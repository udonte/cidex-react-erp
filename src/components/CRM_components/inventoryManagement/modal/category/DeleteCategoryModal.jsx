import { useDispatch } from "react-redux";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import MiddleModalContainer from "../../../../MiddleModalContainer";
import Button from "../../../common/Button/Button";
import { Spinner } from "../../../../HRM_components";
import {
  deleteCategory,
  fetchCategories,
} from "../../../../../features/CRM_features/inventoryManagement/categories/categories.slice";
import { useSelector } from "react-redux";
import { selectCategorySlice } from "../../../../../features/CRM_features/inventoryManagement/categories/categories.selector";

const DeleteCategoryModal = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectCategorySlice);
  return (
    <MiddleModalContainer title="Delete Category">
      <div className="w-[400px] px-8 py-12">
        <div className="text-center text-gray-500">
          <p className="text-sm">
            Are you sure you want to delete this category{" "}
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button
            color={"secondary"}
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeAllModals());
            }}
          >
            Cancel
          </Button>
          <Button
            className={"bg-red-600"}
            onClick={() => {
              dispatch(deleteCategory(categoryId))
                .unwrap()
                .then((payload) => {
                  console.log(payload);
                  if (payload?.status_code === 200) {
                    dispatch(fetchCategories());
                    dispatch(closeAllModals());
                  }
                });
            }}
          >
            {isLoading ? (
              <div className="w-full text-center">
                <Spinner />
              </div>
            ) : (
              " Delete"
            )}
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default DeleteCategoryModal;
