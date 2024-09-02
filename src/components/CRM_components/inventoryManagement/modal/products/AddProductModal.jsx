import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button/Button";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../../../common/CustomDropDown";
import SideModalContainer from "../../../common/SideModalcontainer/SideModalContainer";
import { selectProductSlice } from "../../../../../features/CRM_features/inventoryManagement/product/product.selector";
import {
  fetchProduct,
  postProduct,
} from "../../../../../features/CRM_features/inventoryManagement/product/product.slice";
import { fetchCategories } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { selectCategorySlice } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.selector";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { Spinner } from "../../../../HRM_components";

const AddProductModal = ({ isOpen }) => {
  const { categories } = useSelector(selectCategorySlice);
  const { isLoading } = useSelector(selectProductSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    category_ids: [],
    price: "",
    quantity: "",
    minimum_quantity: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
    console.log(productData);
    dispatch(postProduct(productData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchProduct());
          dispatch(closeAllModals());
          // navigate("/product_detail", { productData });
        }
      });
  };

  const productStatus = [
    { value: "Okay", label: "Okay" },
    { value: "Low", label: "Low" },
    { value: "Out of Stock", label: "Out of Stock" },
  ];

  const handleImageChange = (e) => {
    // const file = e.target.files[0];

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImagePreview(reader.result);
    //     setProductData((prevData) => ({
    //       ...prevData,
    //       image: file,
    //     }));
    //   };
    //   reader.readAsDataURL(file);
    // }
    return;
  };
  return (
    <div>
      <SideModalContainer title=" Add Product" width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="p-6 h-screen overflow-y-scroll pb-20">
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
                  type="number"
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
                  type="number"
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
                  type="number"
                  placeholder="Enter minimum unit quantity"
                  name="minimum_quantity"
                  value={productData.minimum_quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <CustomDropdown
                  label="Status"
                  value={productData.status}
                  options={productStatus.map((items) => ({
                    value: items.value,
                    label: items.label,
                  }))}
                  onSelect={(selectedOption) => {
                    handleDropdownSelect("status", selectedOption);
                  }}
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
                <Button size={"lg"} type="submit">
                  {isLoading ? (
                    <div className="w-full text-center">
                      <Spinner />
                    </div>
                  ) : (
                    "Add Product"
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

export default AddProductModal;
