import React, { useState } from "react";
import { Button, CustomInput } from "../../../../components/HRM_components";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import PreviewInvoice from "../../Tenants/PrevewInvoice";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";

const SubscriptionForm = ({ onCreatePlan }) => {
  const openModal = useSelector(selectModalsSlice);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    tier_name: "",
    fee: "",
    type_of_plan: "",
    currency: "",
    description: "",
    target_audience: "",
    modules: "",
    features: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubscriptionsForm = () => {
    // Assuming validation is successful
    onCreatePlan(formData);
  };

  return (
    <div className="bg-white py-6 px-6">
      <div className="flex items-center justify-between  ">
        <div className="flex items-center">
          <h3 className="font-bold">Create a Subscription</h3>
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            color={"gray"}
            onClick={() => {
              dispatch(
                openModalByName(
                  MODALS.SUPER_ADMIN.SETTINGS.SUBSCRIPTION.PREVIEW_PLANS
                )
              );
            }}
          >
            Preview Plan
          </Button>
          <Button onClick={handleSubscriptionsForm}>Create Plan</Button>
        </div>
      </div>
      <div className="my-8">
        <form className="w-1/2">
          <div className="w-full mb-4">
            <CustomInput
              label="Tier Name"
              name="tier_name"
              placeholder={"Enter tier"}
              value={formData.tier_name}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              placeholder={"Enter features"}
              label="Fee (in USD)"
              name="tier_name"
              value={formData.fee}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Type of Plan"
              name="type_of_plan"
              placeholder={"Enter Features"}
              value={formData.type_of_plan}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Currency"
              name="currency"
              placeholder={"Enter Features"}
              value={formData.currency}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Description"
              name="description"
              placeholder={"Enter Features"}
              value={formData.description}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Target Audience"
              placeholder={"Enter Features"}
              name="target_audience"
              value={formData.target_audience}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Modules"
              placeholder={"Enter Features"}
              name="modules"
              value={formData.modules}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <CustomInput
              label="Features"
              name="features"
              placeholder={"Enter Features"}
              value={formData.features}
              handleInputChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      {openModal[MODALS.SUPER_ADMIN.SETTINGS.SUBSCRIPTION.PREVIEW_PLANS] && (
        <PreviewInvoice />
      )}
    </div>
  );
};

export default SubscriptionForm;
