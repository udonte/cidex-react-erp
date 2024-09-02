import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import AddProductModal from "../../../../components/CRM_components/inventoryManagement/modal/products/AddProductModal";
import AddCategoryModal from "../../../../components/CRM_components/inventoryManagement/modal/category/AddCategoryModal";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import {
  fetchCategories,
  fetchCategoryById,
} from "../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { selectCategorySlice } from "../../../../features/CRM_features/inventoryManagement/categories/categories.selector";
import { fetchProduct } from "../../../../features/CRM_features/inventoryManagement/product/product.slice";
import { selectProductSlice } from "../../../../features/CRM_features/inventoryManagement/product/product.selector";
import { deleteCategory } from "../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { deleteProduct } from "../../../../features/CRM_features/inventoryManagement/product/product.slice";
import { MODALS } from "../../../../constants/modals.constant";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  FilterSection,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/CRM_components";
import { Spinner } from "../../../../components/HRM_components";
import { useNavigate } from "react-router-dom";
import { encryptId } from "../../../../utils/helperFunctions/crypto.utils";
import DeleteProductModal from "../../../../components/CRM_components/inventoryManagement/modal/products/DeleteProductModal";
import EditCategoryModal from "../../../../components/CRM_components/inventoryManagement/modal/category/EditCategoryModal";
import DeleteCategoryModal from "../../../../components/CRM_components/inventoryManagement/modal/category/DeleteCategoryModal";

const Inventory = ({ isOpen }) => {
  const [categoryId, setCategoryId] = useState({
    id: "",
    name: "",
    description: "",
  });
  const [productId, setProductId] = useState({
    id: "",
  });
  const navigate = useNavigate();
  const { categories, isLoading } = useSelector(selectCategorySlice);
  const { products } = useSelector(selectProductSlice);
  const breadcrumbItems = ["Inventory", "Products", ""];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };
  const dispatch = useDispatch();
  const openAddCategoryModal = useSelector(selectModalsSlice);
  const openAddProductModal = useSelector(selectModalsSlice);
  const openDeleteProduct = useSelector(selectModalsSlice);
  const openEditCategoryModal = useSelector(selectModalsSlice);
  const openDeleteCategoryModal = useSelector(selectModalsSlice);
  const tabLabels = ["Products", "Categories"];

  // useEffect
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategories());
  }, [dispatch]);

  // category table
  const categoryTableHeader = ["Category", "Description"];
  const categoryDotOptions = [
    {
      text: "Edit",
      icon: <FaEdit />,
      action: (id) => {
        setCategoryId({ id: id });
        dispatch(openModalByName(MODALS.INVENTORY.CATEGORY.EDIT_CATEGORY));
      },
    },
    {
      text: "Delete",
      icon: <MdDelete />,
      action: (id) => {
        setCategoryId({ id: id });
        dispatch(openModalByName(MODALS.INVENTORY.CATEGORY.DELETE_CATEGORY));
      },
    },
  ];

  // product table
  const productTableHeader = [
    "Product",
    "Category",
    "Price",
    "Unit Qty",
    "Min. Unit Qty",
    "Status",
  ];
  const productDotOptions = [
    // { text: "Edit", icon: <FaEdit />, action: () => dispatch() },
    {
      text: "View Product details",
      icon: <FaPlus />,
      action: (id) => navigate(`/CRM/inventory/${encryptId(id)}`),
    },
    {
      text: "Delete",
      icon: <MdDelete />,
      action: (id) => {
        setProductId({ id: id });
        dispatch(openModalByName(MODALS.INVENTORY.PRODUCT.DELETE_PRODUCT));
      },
    },
  ];

  const pageOutput = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <>
            <FilterSection
              settings={true}
              component={
                <Button
                  icon={<FaPlus />}
                  onClick={() => {
                    dispatch(
                      openModalByName(MODALS.INVENTORY.CATEGORY.ADD_PRODUCT)
                    );
                  }}
                >
                  Add Product
                </Button>
              }
            />
            <div className="py-4">
              {/* table */}
              {isLoading ? (
                <div className="h-[500px] w-full flex items-center justify-center">
                  <Spinner
                    className={"text-[80px] text-gurugeeks-orange-700"}
                  />
                </div>
              ) : (
                <>
                  <div className="mt-4">
                    <TableContainer
                      tableHeader={productTableHeader}
                      dotOptions={productDotOptions}
                      Checkbox={true}
                    >
                      {products?.map(
                        (
                          {
                            name,
                            categories,
                            image,
                            price,
                            quantity,
                            minimum_quantity,
                            status,
                            id,
                          },
                          index
                        ) => (
                          <TableRowItem
                            dotOptions={productDotOptions}
                            id={id}
                            key={index}
                          >
                            <td>
                              <Checkbox />
                            </td>
                            <td>{name}</td>
                            <td>{categories[0]?.name}</td>
                            <td>{price}</td>
                            <td className="text-center">{quantity}</td>
                            <td className="text-center">{minimum_quantity}</td>
                            <td className="text-center">{status}</td>
                          </TableRowItem>
                        )
                      )}
                    </TableContainer>
                  </div>
                </>
              )}
            </div>
          </>
        );

      case 1:
        return (
          <>
            <FilterSection
              settings={true}
              component={
                <Button
                  icon={<FaPlus />}
                  onClick={() => {
                    dispatch(
                      openModalByName(MODALS.INVENTORY.CATEGORY.ADD_CATEGORY)
                    );
                  }}
                >
                  Add Category
                </Button>
              }
            />

            {/* table */}
            <div className="mt-4">
              <TableContainer
                tableHeader={categoryTableHeader}
                dotOptions={categoryDotOptions}
                Checkbox={true}
              >
                {categories?.map(({ name, description, id }, index) => (
                  <TableRowItem
                    dotOptions={categoryDotOptions}
                    id={id}
                    key={index}
                  >
                    <td>
                      <Checkbox />
                    </td>
                    <td>{name}</td>
                    <td>{description}</td>
                  </TableRowItem>
                ))}
              </TableContainer>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      {/* tabbed pages */}
      {/* TabbedPages component */}
      <TabbedPages
        tabIndex={activeTabIndex}
        tabsHeader={tabLabels}
        setTabIndex={handleTabChange}
      >
        <>{pageOutput()}</>
      </TabbedPages>
      <AddCategoryModal
        isOpen={openAddCategoryModal[MODALS.INVENTORY.CATEGORY.ADD_CATEGORY]}
      />
      <AddProductModal
        isOpen={openAddProductModal[MODALS.INVENTORY.CATEGORY.ADD_PRODUCT]}
      />
      {openDeleteProduct[MODALS.INVENTORY.PRODUCT.DELETE_PRODUCT] && (
        <DeleteProductModal productId={productId.id} />
      )}

      {openDeleteCategoryModal[MODALS.INVENTORY.CATEGORY.DELETE_CATEGORY] && (
        <DeleteCategoryModal categoryId={categoryId.id} />
      )}
      <EditCategoryModal
        isOpen={openEditCategoryModal[MODALS.INVENTORY.CATEGORY.EDIT_CATEGORY]}
        categoryId={categoryId.id}
        setCategoryId={setCategoryId}
      />
    </div>
  );
};

export default Inventory;
