import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAllModals,
  openModalByName,
} from "../../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { TbAsset } from "react-icons/tb";
import { MODALS } from "../../../../../constants/modals.constant";
import { selectAssetsSlice } from "../../../../../features/HRM_features/inventory/assets/assets.selectors";
import {
  deleteAssetById,
  fetchAssetById,
  fetchAssets,
} from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import {
  Button,
  FilterTab,
  Spinner,
  TableContainer,
  TableRowItem,
} from "../../../../../components/HRM_components";
import ImportAssets from "../../../../../components/HRM_components/Admin/assetsManagement/modals/ImportAssets";
import CreateAsset from "../../../../../components/HRM_components/Admin/assetsManagement/modals/CreateAsset";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { encryptId } from "../../../../../utils/helperFunctions/crypto.utils";

const Asset = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assets, isLoading } = useSelector(selectAssetsSlice);
  const openModal = useSelector(selectModalsSlice);
  const tableHeaders = [
    "Asset ID",
    "Asset Name",
    "Asset Quantity",
    "Asset Type",
    "Asset Location",
    "Status",
  ];

  const dotOptions = [
    {
      text: "View Details",
      icon: <FaPlus />,
      callBack: (id) => {
        navigate(`/HRM/asset/${encryptId(id)}`);
      },
    },
    {
      text: "Delete Asset",
      icon: <FaTrash />,
      callBack: (id) => {
        dispatch(deleteAssetById(id))
          .unwrap()
          .then((payload) => {
            console.log(payload);
            if (payload.data.id && payload.data.created_at) {
              dispatch(closeAllModals());
              dispatch(fetchAssets());
            }
          });
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  return (
    <div className="h-full">
      {/* top buttons */}
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <h1 className="font-bold text-[1.3rem]">Assets</h1>
        <div className="flex items-center gap-x-3">
          <Button
            icon={<FiDownload />}
            color={"secondary"}
            onClick={() => {
              dispatch(openModalByName(MODALS.ASSET_MANAGEMENT.IMPORT_ASSET));
            }}
          >
            Import Asset
          </Button>
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.ASSET_MANAGEMENT.ASSET));
            }}
          >
            Create Asset
          </Button>
        </div>
      </div>

      {/* filter */}
      <FilterTab filter={true} sort={true} refresh={true} />

      <main>
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <div className="h-full col-span-3">
            {assets.length > 0 ? (
              <TableContainer tableHeader={tableHeaders} dotOption={dotOptions}>
                {assets?.map(
                  (
                    { name, serial_no, type, location, quantity, status, id },
                    i
                  ) => {
                    return (
                      <TableRowItem
                        key={i}
                        className="px-6 w-[30px]"
                        dotOptions={dotOptions}
                        id={id}
                      >
                        <td className="px-8 ">{serial_no}</td>
                        <td className="px-8 ">{name}</td>
                        <td className="px-8 ">{quantity}</td>
                        <td className="px-6 ">{type}</td>
                        <td className="px-6 ">{location}</td>
                        <td className="px-6 ">{status}</td>
                      </TableRowItem>
                    );
                  }
                )}
              </TableContainer>
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                <div className="flex flex-col items-center justify-center">
                  <TbAsset className="text-[80px] " />
                  <p className=" font-semibold text-lg">No Asset Found</p>
                  <p>Your Asset list is empty. Create a new Asset.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      {<CreateAsset isOpen={openModal[MODALS.ASSET_MANAGEMENT.ASSET]} />}

      {openModal[MODALS.ASSET_MANAGEMENT.IMPORT_ASSET] && <ImportAssets />}
    </div>
  );
};

export default Asset;
