import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import SideModalContainer from "../../../common/SideModalcontainer/SideModalContainer";
import CustomDropdown from "../../../common/CustomDropDown";
import { useSelector } from "react-redux";
import { selectProductSlice } from "../../../../../features/CRM_features/inventoryManagement/product/product.selector";
import { decryptId } from "../../../../../utils/helperFunctions/crypto.utils";
import { fetchProductById } from "../../../../../features/CRM_features/inventoryManagement/product/product.slice";
import Button from "../../../common/Button/Button";
import { selectCategorySlice } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.selector";
import { Spinner } from "../../../../HRM_components";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { editProduct } from "../../../../../features/CRM_features/inventoryManagement/product/product.slice";

const EditProductModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector(selectCategorySlice);
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
  }, [productId, product]);

  const [imagePreview, setImagePreview] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setProductData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(postCategory(categoryData));
    navigate("/product_detail", { productData });
    console.log(productData);
    dispatch(editProduct(productData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(closeAllModals());
          dispatch(fetchProductById(productId));
        }
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProductData((prevData) => ({
          ...prevData,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <SideModalContainer title={"Edit Product"} width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="space-y-5">
              <div className="w-1/2">
                <p>Image</p>
                <div>
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="relative w-60 h-44 overflow-hidden rounded-md">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Product Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="border-2 border-gray-300 w-full h-full flex flex-col gap-2 items-center justify-center">
                          <AiOutlineCloudUpload
                            className=" object-cover"
                            size={50}
                            color={"#A1A1A1"}
                          />
                          <p className="text-sm text-gray-200">Upload Image</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="name">Product</label>
                <input
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  type="text"
                  placeholder="Enter product name"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex flex-col">
                <CustomDropdown
                  label="Category"
                  options={categories?.map((items) => ({
                    value: items.id,
                    label: items.name,
                  }))}
                  onSelect={(selectedOption) => {
                    handleDropdownSelect("category_ids", [selectedOption]);
                  }}
                />
              </div>
              <div className="w-full">
                <label htmlFor="price">Price</label>
                <input
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  type="text"
                  placeholder="Enter price"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="quantity">Unit Qty</label>
                <input
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  type="text"
                  placeholder="Enter unit quantity"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="minimum_quantity">Minimum Unit Qty</label>
                <input
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  type="text"
                  placeholder="Enter minimum unit quantity"
                  name="minimum_quantity"
                  value={productData.minimum_quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <div className="w-full">
                  <label htmlFor="description">Description</label>
                  <textarea
                    placeholder="Give more details"
                    className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="w-full flex items-center">
                <Button color={"primary"} type={"submit"}>
                  {isLoading ? (
                    <div className="w-14 text-center">
                      <Spinner />
                    </div>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </SideModalContainer>
    </div>
  );
};

export default EditProductModal;
