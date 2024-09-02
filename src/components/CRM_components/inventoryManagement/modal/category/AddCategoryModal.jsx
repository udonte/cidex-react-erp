import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button/Button";
import SideModalContainer from "../../../common/SideModalcontainer/SideModalContainer";
import { postCategory } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { selectCategorySlice } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.selector";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { Spinner } from "../../../../HRM_components";
const AddCategoryModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });
  const { isLoading } = useSelector(selectCategorySlice);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategory(categoryData));
    dispatch(postCategory(categoryData))
      .unwrap()
      .then((payload) => {
        if (payload.data.id && payload.data.created_at) {
          dispatch(fetchCategories());
          dispatch(closeAllModals());
        }
      });
  };
  return (
    <div>
      <SideModalContainer width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="space-y-5">
              <div className="w-full">
                <label htmlFor="last_name">Category Name</label>
                <input
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  type="text"
                  name="name"
                  value={categoryData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <div className="w-full">
                  <label htmlFor="job_title">Description</label>
                  <textarea
                    className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                    name="description"
                    value={categoryData.description}
                    onChange={handleInputChange}
                    cols="50"
                    rows="50"
                  >
                    type
                  </textarea>
                </div>
              </div>
              <div className="w-full flex items-center">
                <Button color={"primary"} type={"submit"}>
                  {isLoading ? (
                    <div className="w-full text-center">
                      <Spinner />
                    </div>
                  ) : (
                    "Add Category"
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

export default AddCategoryModal;
