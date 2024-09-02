import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import CheckoutAsset from "../../../../../components/HRM_components/Admin/assetsManagement/modals/CheckoutAsset";
import CustomDropdown from "../../../../../components/HRM_components/_common/CustomDropDown";
import {
  BreadCrumbs,
  Button,
  CustomInput,
  Spinner,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../../components/HRM_components";
import { selectAssetsSlice } from "../../../../../features/HRM_features/inventory/assets/assets.selectors";
// import { selectedAssetSlice } from "../../../../../features/HRM_features/inventory/assets/assets.selectors";
import {
  fetchAssets,
  fetchCheckout,
} from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import { fetchAssetById } from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import { editAssetById } from "../../../../../features/HRM_features/inventory/assets/assets.slice";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../../../utils/helperFunctions/crypto.utils";
import EditableForm from "./EditableForm";
import SavedFormDetails from "./SavedFormDetails";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";

const AssetDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabHeader = ["Details", "History"];
  const breadcrumbItems = ["Assets/Inventory", "Assets", "Asset Details"];

  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  const { asset, isLoading, assetCheckout } = useSelector(selectAssetsSlice);
  const { id } = useParams();
  const assetId = decryptId(id);
  const [editable, setEditable] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [assetAction, setAssetAction] = useState({
    assetAction: "",
  });

  const [editedAssetData, setEditedAssetData] = useState({
    id: assetId,
    asset_image: "asset?.data?.image",
    name: asset?.data?.name,
    serial_no: asset?.data?.serial_no,
    type: asset?.data?.type,
    date_purchased: asset?.data?.date_purchased,
    model: asset?.data?.model,
    maintenance: asset?.data?.maintenance,
    vendor_id: asset?.data?.vendor?.id,
    description: asset?.data?.description,
    warranty: asset?.data?.warranty,
    cost: asset?.data?.cost,
    status: asset?.data?.status,
    location: asset?.data?.vendor?.location,
  });

  useEffect(() => {
    if (asset) {
      setEditedAssetData({
        id: assetId,
        asset_image: "das",
        name: asset?.data?.name,
        serial_no: asset?.data?.serial_no,
        type: asset?.data?.type,
        date_purchased: asset?.data?.date_purchased,
        model: asset?.data?.model,
        maintenance: asset?.data?.maintenance,
        vendor_id: asset?.data?.vendor?.id,
        description: asset?.data?.description,
        warranty: asset?.data?.warranty,
        cost: asset?.data?.cost,
        status: asset?.data?.status,
        location: asset?.data?.vendor?.location,
      });
    }
  }, [asset, assetId]);

  useEffect(() => {
    dispatch(fetchAssets());
    dispatch(fetchCheckout());
    dispatch(
      fetchEmployees({
        sort_by: "desc",
        per_page: 20,
        page: 1,
        order_by: "created_at",
        load_related: true,
      })
    );
    dispatch(fetchAssetById(assetId));
  }, [dispatch, assetId]);

  const handleOnClickSave = () => {
    dispatch(editAssetById(editedAssetData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchAssetById(assetId));
          setEditable(false);
        }
      });
    setEditable(true);
  };

  const tableHeaders = [
    "Asset ID/Serial No",
    "Employee ID",
    "Note",
    "Return Status",
  ];

  const handleActionSelect = (selectedOption) => {
    if (selectedOption === "checkout") {
      dispatch(openModalByName(MODALS.ASSET_MANAGEMENT.CHECKOUT_ASSET));
    }
  };

  const handleDropDownSelect = (name, selectedOption) => {
    // setassetFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const action = [
    { value: "checkout", label: "Checkout" },
    { value: "repair", label: "Repair" },
    { value: "report_damage", label: "Report Damage" },
    { value: "perform_maintenance", label: "Perform Maintenance" },
  ];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const pageOutput = () => {
    switch (tabIndex) {
      case 0:
        return editable ? (
          <EditableForm
            editedAssetData={editedAssetData}
            setEditedAssetData={setEditedAssetData}
            asset={asset}
            key={"editable"}
          />
        ) : (
          <SavedFormDetails
            setEditable={setEditable}
            asset={asset}
            key={"saved"}
          />
        );

      case 1:
        return (
          <div className="px-4 py-6" key={"history"}>
            <div className="w-[500px]">
              <CustomDropdown
                options={action}
                onSelect={(selectedOption) => {
                  handleDropDownSelect("action", selectedOption);
                }}
              />
            </div>
            <div className="h-full col-span-3">
              <TableContainer tableHeader={tableHeaders}>
                {assetCheckout.map((item, i) => {
                  return (
                    <TableRowItem key={i} className="px-6 w-[30px]">
                      <td className="px-6 ">{item.asset.serial_no}</td>
                      <td className="px-6 ">{item.employee.first_name}</td>
                      <td className="px-6 ">{item.note}</td>
                      <td className="px-6 ">{String(item.is_returned)}</td>
                    </TableRowItem>
                  );
                })}
              </TableContainer>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* asset header */}
      <div className="flex items-center justify-between bg-white py-6 px-6">
        <h1 className="font-bold text-[1.3rem]">Assets</h1>
        <div className="flex items-center justify-end gap-x-3 w-[350px]">
          {!editable ? (
            <div className="flex flex-col gap-4 relative">
              <div className="flex items-center gap-4">
                {!editable && (
                  <div className="w-[200px]">
                    <CustomDropdown
                      placeHolder={"Actions"}
                      options={action}
                      onSelect={(selectedOption) => {
                        handleActionSelect(selectedOption);
                      }}
                    />
                  </div>
                )}
                <Button
                  className={"h-[56px]"}
                  onClick={() => setEditable(true)}
                  icon={<BiEdit />}>
                  Edit Asset
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Button
                className={"h-[56px]"}
                onClick={() => setEditable(false)}
                color={"secondary"}>
                Cancel
              </Button>
              <Button
                className={"h-[56px]"}
                onClick={() => {
                  setEditable(false);
                  handleOnClickSave();
                }}>
                {isLoading ? (
                  <div className="w-14">
                    <Spinner />
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
            </>
          )}
        </div>
      </div>

      <TabbedPages
        tabIndex={tabIndex}
        tabsHeader={tabHeader}
        setTabIndex={changeTab}>
        <div className="pb-[100px] bg-white">{pageOutput()}</div>
      </TabbedPages>

      <CheckoutAsset
        assetId={assetId}
        isOpen={openModal[MODALS.ASSET_MANAGEMENT.CHECKOUT_ASSET]}
      />
    </div>
  );
};

export default AssetDetails;
