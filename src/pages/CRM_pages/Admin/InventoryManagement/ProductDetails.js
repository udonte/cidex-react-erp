import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import EditProductModal from "../../../../components/CRM_components/inventoryManagement/modal/products/EditProductModal";
import { MODALS } from "../../../../constants/modals.constant";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { BreadCrumbs, Button } from "../../../../components/CRM_components";
import { useParams } from "react-router-dom";
import { selectProductSlice } from "../../../../features/CRM_features/inventoryManagement/product/product.selector";
import { fetchProductById } from "../../../../features/CRM_features/inventoryManagement/product/product.slice";
import { decryptId } from "../../../../utils/helperFunctions/crypto.utils";
import DeleteProductModal from "../../../../components/CRM_components/inventoryManagement/modal/products/DeleteProductModal";
import { Spinner } from "../../../../components/HRM_components";

const ProductDetails = () => {
  const breadcrumbItems = ["Inventory", "Products", "Product Details", ""];
  const dispatch = useDispatch();
  const openEditProductModal = useSelector(selectModalsSlice);
  const openDeleteProductModal = useSelector(selectModalsSlice);
  const { product, isLoading } = useSelector(selectProductSlice);
  const { id } = useParams();
  const productId = decryptId(id);

  const [productData, setProductData] = useState({
    id: productId,
    image: product?.data?.image,
    name: product?.data?.name,
    category_ids: product?.data?.categories[0]?.name,
    price: product?.data?.price,
    quantity: product?.data?.quantity,
    minimum_quantity: product?.data?.minimum_quantity,
    description: product?.data?.description,
    status: product?.status,
  });

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setProductData({
        id: productId,
        image: product?.data?.image,
        name: product?.data?.name,
        category_ids: product?.data?.categories[0]?.name,
        price: product?.data?.price,
        quantity: product?.data?.quantity,
        minimum_quantity: product?.data?.minimum_quantity,
        description: product?.data?.description,
        status: product?.status,
      });
    }
  }, [product, productId]);

  return (
    <div className="h-screen overflow-y-auto pb-[200px]">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <div className="p-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col items-start justify-center gap-x-3">
            <h1 className="text-xl font-bold">Product Details</h1>
            <p className="text-sm">Full details of product</p>
          </div>

          <div className="flex items-center justify-center gap-x-3">
            <Button
              color="secondary"
              icon={<MdDelete />}
              onClick={() => {
                dispatch(
                  openModalByName(MODALS.INVENTORY.PRODUCT.DELETE_PRODUCT)
                );
              }}
            >
              Delete Product
            </Button>

            <Button
              icon={<FaEdit />}
              onClick={() => {
                dispatch(
                  openModalByName(MODALS.INVENTORY.PRODUCT.EDIT_PRODUCT)
                );
              }}
            >
              Edit Product
            </Button>
          </div>
        </div>

        <div className="bg-white w-full p-6 mt-6">
          <p>Picture of the product</p>
          <div className="w-44 h-44 bg-gray-300 rounded-md p-2">
            <img src="." alt="" />
            <p>image</p>
          </div>
          <table class="border-collapse w-full mt-6">
            <tr class="mb-4">
              <td class="p-4 border border-gray-300">Product</td>
              <td class="p-4 border border-gray-300">{productData?.name}</td>
            </tr>
            <tr class="mb-4">
              <td class="p-4 border border-gray-300">Category</td>
              <td class="p-4 border border-gray-300">
                {productData?.category_ids}
              </td>
            </tr>
            <tr class="mb-4">
              <td class="p-4 border border-gray-300">Unit Quantity</td>
              <td class="p-4 border border-gray-300">
                {productData?.quantity}
              </td>
            </tr>
            <tr class="mb-4">
              <td class="p-4 border border-gray-300">Price</td>
              <td class="p-4 border border-gray-300">{productData?.price}</td>
            </tr>
            <tr class="mb-4">
              <td class="p-4 border border-gray-300">Description</td>
              <td class="p-4 border border-gray-300">
                {productData?.description}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <EditProductModal
        isOpen={openEditProductModal[MODALS.INVENTORY.PRODUCT.EDIT_PRODUCT]}
      />
      {/* <DeleteProductModal
        id={productId}
        isOpen={openDeleteProductModal[MODALS.INVENTORY.PRODUCT.DELETE_PRODUCT]}
      /> */}
      {openDeleteProductModal[MODALS.INVENTORY.PRODUCT.DELETE_PRODUCT] && (
        <DeleteProductModal productId={productData.id} />
      )}
    </div>
  );
};

export default ProductDetails;
