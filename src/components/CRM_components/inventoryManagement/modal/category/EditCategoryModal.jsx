import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../common/Button/Button";
import SideModalContainer from "../../../common/SideModalcontainer/SideModalContainer";
import {
  editCategory,
  fetchCategories,
  fetchCategoryById,
} from "../../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { selectCategorySlice } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.selector";
import { useSelector } from "react-redux";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { Spinner } from "../../../../HRM_components";

const EditCategoryModal = ({ isOpen, categoryId }) => {
  const dispatch = useDispatch();
  const { category, isLoading } = useSelector(selectCategorySlice);
  const [categoryData, setCategoryData] = useState({
    id: categoryId,
    name: category?.data?.name,
    description: category?.data?.description,
  });

  useEffect(() => {
    dispatch(fetchCategoryById(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (category) {
      setCategoryData({
        id: [categoryId],
        name: category?.data?.name,
        description: category?.data?.description,
      });
    }
  }, [category, categoryId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoryData);
    dispatch(editCategory(categoryData))
      .unwrap()
      .then((payload) => {
        if (payload?.id && payload?.created_at) {
          dispatch(fetchCategories());
          dispatch(closeAllModals());
        }
      });
  };

  return (
    <SideModalContainer title={"Edit Category"} width="sm" isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <div className="space-y-5">
            <div className="w-full">
              <label htmlFor="name">Category Name</label>
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
                <label htmlFor="description">Description</label>
                <textarea
                  className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                  name="description"
                  value={categoryData.description}
                  onChange={handleInputChange}
                  cols="50"
                  rows="50"
                ></textarea>
              </div>
            </div>
            <div className="w-full flex items-center">
              <Button color={"primary"} type={"submit"}>
                {isLoading ? (
                  <div className="w-full text-center">
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
  );
};

export default EditCategoryModal;
