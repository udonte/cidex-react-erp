import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchProduct,
} from "../../../../../features/CRM_features/inventoryManagement/product/product.slice";
import MiddleModalContainer from "../../../../MiddleModalContainer";
import Button from "../../../common/Button/Button";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { useSelector } from "react-redux";
import { selectProductSlice } from "../../../../../features/CRM_features/inventoryManagement/product/product.selector";
import { Spinner } from "../../../../HRM_components";
import { useNavigate } from "react-router-dom";

const DeleteProductModal = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(selectProductSlice);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <MiddleModalContainer title="Delete Product">
      <div className="w-[400px] px-8 py-12">
        <div className="text-center text-gray-500">
          <p className="text-sm">
            Are you sure you want to delete this product{" "}
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button
            color={"secondary"}
            onClick={(e) => {
              e.preventDefault();
              closeAllModals();
            }}
          >
            Cancel
          </Button>
          <Button
            className={"bg-red-600"}
            onClick={() => {
              dispatch(deleteProduct(productId))
                .unwrap()
                .then((payload) => {
                  console.log(payload);
                  if (payload?.updated_at) {
                    dispatch(fetchProduct());
                    dispatch(closeAllModals());
                    navigate(`/CRM/inventory/`);
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

export default DeleteProductModal;
