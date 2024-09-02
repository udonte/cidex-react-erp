import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import AddVendors from "../../../../../components/HRM_components/Admin/assetsManagement/modals/AddVendors";
import { BiDotsVerticalRounded, BiSolidStoreAlt } from "react-icons/bi";
import { MODALS } from "../../../../../constants/modals.constant";
import {
  fetchVendors,
  deleteVendorById,
} from "../../../../../features/HRM_features/inventory/vendors/vendors.slice";
import { selectVendors } from "../../../../../features/HRM_features/inventory/vendors/vendors.selectors";
import {
  Button,
  FilterTab,
  Spinner,
  TableContainer,
  TableRowItem,
} from "../../../../../components/HRM_components";
import ImportVendors from "../../../../../components/HRM_components/Admin/assetsManagement/modals/ImportVendors";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { encryptId } from "../../../../../utils/helperFunctions/crypto.utils";

const Vendor = () => {
  const navigate = useNavigate();
  const { vendors, isLoading } = useSelector(selectVendors);
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  const openImportVendors = useSelector(selectModalsSlice);

  const tableHeaders = [
    "Vendor Name",
    "Location",
    "Personnel",
    "Phone Number",
    "Address",
  ];

  const dotOptions = [
    {
      text: "Delete vendor",
      icon: <FaTrash />,
      callBack: (id) => {
        dispatch(deleteVendorById(id))
          .unwrap()
          .then((payload) => {
            if (payload.status_code === 200 && payload.data) {
              dispatch(fetchVendors());
            }
          });
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  return (
    <div className="h-full">
      {/* top buttons */}
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <h1 className="font-bold text-[1.3rem]">Vendor List</h1>
        <div className="flex items-center gap-x-3">
          <Button
            icon={<FiDownload />}
            color={"secondary"}
            className="text-gray-600"
          >
            <button
              onClick={() => {
                dispatch(
                  openModalByName(MODALS.ASSET_MANAGEMENT.IMPORT_VENDORS)
                );
              }}
            >
              Import Vendors
            </button>
          </Button>
          <Button icon={<FaPlus />}>
            <button
              onClick={() => {
                dispatch(openModalByName(MODALS.ASSET_MANAGEMENT.VENDORS));
              }}
            >
              Add Vendors
            </button>
          </Button>
        </div>
      </div>
      {/* filter */}
      <div className="">
        <FilterTab filter={true} sort={true} refresh={true} />
      </div>
      <main>
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <div className="h-full col-span-3">
            {vendors.length > 0 ? (
              <TableContainer tableHeader={tableHeaders} dotOption={dotOptions}>
                {vendors?.map(
                  (
                    { name, location, personnel, phone_number, address, id },
                    i
                  ) => {
                    return (
                      <TableRowItem
                        key={i}
                        className="px-6 w-[30px]"
                        dotOptions={dotOptions}
                        id={id}
                      >
                        <td className="px-6 ">{name}</td>
                        <td className="px-6 ">{location}</td>
                        <td className="px-6 ">{personnel}</td>
                        <td className="px-6 ">{phone_number}</td>
                        <td className="px-6 ">{address}</td>
                      </TableRowItem>
                    );
                  }
                )}
              </TableContainer>
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                <div className="flex flex-col items-center justify-center">
                  <BiSolidStoreAlt className="text-[80px] " />
                  <p className=" font-semibold text-lg">No vendors Found</p>
                  <p>Your vendors list is empty. Create a new vendor.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      {<AddVendors isOpen={openModal[MODALS.ASSET_MANAGEMENT.VENDORS]} />}
      {openImportVendors[MODALS.ASSET_MANAGEMENT.IMPORT_VENDORS] && (
        <ImportVendors />
      )}
    </div>
  );
};

export default Vendor;
