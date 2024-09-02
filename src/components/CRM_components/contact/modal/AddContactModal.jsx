import React, { useEffect, useState } from "react";
import CRMSideModalContainer from "../../common/SideModalcontainer/SideModalContainer";
import Button from "../../common/Button/Button";
import CustomInputByComma from "../../../HRM_components/_common/CustomInputByComma";
import { useDispatch } from "react-redux";
import {
  fetchContact,
  postContact,
} from "../../../../features/CRM_features/contactManagement/contact.slice";
import CustomDropdown from "../../common/CustomDropDown";
import { useSelector } from "react-redux";
import { selectContactsSlice } from "../../../../features/CRM_features/contactManagement/contact.selector";
import { Spinner } from "../../../HRM_components";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";

const AddContactModal = ({ isOpen }) => {
  const { isLoading } = useSelector(selectContactsSlice);
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    phone_number: "",
    email: "",
    title: "",
    type: "",
    address: "",
    city: "",
    state: "",
    country: "",
    preference: "",
    tags: [],
  });

  const action = [
    { value: "email", label: "email" },
    { value: "sms", label: "sms" },
    { value: "call", label: "call" },
  ];

  const typeAction = [
    { value: "customer", label: "customer" },
    { value: "other", label: "other" },
  ];
  
  const handleDropDownSelect = (name, selectedOption) => {
    setContactData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputByCommaChange = (wordArray) => {
    setContactData((prevData) => ({ ...prevData, tags: wordArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContact(contactData))
      .unwrap()
      .then((payload) => {
        console.log(payload);
        if (payload.created_at) {
          dispatch(closeAllModals());
          dispatch(fetchContact());
        }
      });
  };

  const output = () => {
    if (pageIndex === 0) {
      return (
        <div className="space-y-5">
          <div className="w-full">
            <label htmlFor="first_name">First Name</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="first_name"
              value={contactData.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="last_name">Last Name</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="last_name"
              value={contactData.last_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="company">Company</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="company"
              value={contactData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone_number">Phone number</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="phone_number"
              value={contactData.phone_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email*</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="title">Title</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="title"
              placeholder="E.g Markter"
              value={contactData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomDropdown
              label="Type"
              options={typeAction}
              onSelect={(selectedOption) => {
                handleDropDownSelect("type", selectedOption);
              }}
            />
          </div>
        </div>
      );
    } else if (pageIndex === 1) {
      return (
        <div className="space-y-5">
          <div className="w-full">
            <label htmlFor="address">Address</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="address"
              value={contactData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center gap-x-2">
            <div className="w-full">
              <label htmlFor="city">City</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="city"
                value={contactData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="state">State</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="state"
                value={contactData.state}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="country">Country</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="country"
              value={contactData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomDropdown
              label="Preference"
              options={action}
              onSelect={(selectedOption) => {
                handleDropDownSelect("preference", selectedOption);
              }}
            />
          </div>
          <div className="w-full">
            <CustomInputByComma
              label="Tags"
              handleInputByCommaChange={handleInputByCommaChange}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <CRMSideModalContainer title={"New Contact"} width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="p-6 h-screen overflow-y-scroll">
            <div className="w-full h-2 flex items-center justify-between gap-x-2 my-3">
              <div className="w-full h-full rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full bg-green-500 w-[${
                    (pageIndex + 1 / 2) * 100
                  }%]`}
                ></div>
              </div>{" "}
              <div>{`${pageIndex + 1}/2`}</div>
            </div>
            {output()}
            <div className="my-6 mb-12 flex items-end justify-end">
              {pageIndex === 0 ? (
                <Button
                  onClick={() => {
                    setPageIndex(1);
                  }}
                  color={"primary"}
                  type={"button"}
                >
                  Next
                </Button>
              ) : (
                <div className="w-full flex justify-between items-center">
                  <Button
                    onClick={() => {
                      setPageIndex(0);
                    }}
                    color={"secondary"}
                  >
                    Previous
                  </Button>
                  <Button type={"submit"}>
                    {isLoading ? (
                      <div className="text-center w-14">
                        <Spinner />
                      </div>
                    ) : (
                      "Save"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </CRMSideModalContainer>
    </div>
  );
};

export default AddContactModal;
