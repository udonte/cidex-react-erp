import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import { FaEdit, FaEnvelope, FaPhone } from "react-icons/fa";
import { BiSolidChat } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectContactsSlice } from "../../../features/CRM_features/contactManagement/contact.selector";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../utils/helperFunctions/crypto.utils";
import { useDispatch } from "react-redux";
import { fetchContactById } from "../../../features/CRM_features/contactManagement/contact.slice";

const DetailsSection = () => {
  const dispatch = useDispatch();
  const { contact, isLoading } = useSelector(selectContactsSlice);
  const { id } = useParams();
  const contactId = decryptId(id);
  const [contactData, setContactData] = useState({
    id: contactId,
    first_name: contact?.data?.first_name,
    last_name: contact?.data?.last_name,
    company: contact?.data?.company,
    phone_number: contact?.data?.phone_number,
    email: contact?.data?.email,
    title: contact?.data?.title,
    type: contact?.data?.type,
    address: contact?.data?.address,
    city: contact?.data?.city,
    state: contact?.data?.state,
    country: contact?.data?.country,
    preference: contact?.data?.preference,
    tags: contact?.data?.tags,
  });

  useEffect(() => {
    dispatch(fetchContactById(contactId));
  }, [dispatch, contactId]);

  useEffect(() => {
    if (contact) {
      setContactData({
        id: contactId,
        first_name: contact?.data?.first_name,
        last_name: contact?.data?.last_name,
        company: contact?.data?.company,
        phone_number: contact?.data?.phone_number,
        email: contact?.data?.email,
        title: contact?.data?.title,
        type: contact?.data?.type,
        address: contact?.data?.address,
        city: contact?.data?.city,
        state: contact?.data?.state,
        country: contact?.data?.country,
        preference: contact?.data?.preference,
        tags: contact?.data?.tags,
      });
    }
  }, [contact, contactId]);

  return (
    <div className="bg-white w-full h-full p-8 rounded">
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="h-[65px] w-[65px] bg-[#AF531F] rounded-full flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-white">JD</h1>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold capitalize">
            {contactData.first_name} {contactData.last_name}
          </h1>
          <p className="text-base font-medium capitalize">
            {contactData.company}
          </p>
          <p className="text-gurugeeks-dark-500 capitalize">
            {contactData.title}
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            size={"icon"}
            icon={<FaEdit className="text-[20px]" />}
            color={"icon"}
          />
          <Button
            size={"icon"}
            icon={<FaPhone className="text-[20px]" />}
            color={"icon"}
          />
          <Button
            size={"icon"}
            icon={<BiSolidChat className="text-[20px]" />}
            color={"icon"}
          />
          <Button
            size={"icon"}
            icon={<FaEnvelope className="text-[20px]" />}
            color={"icon"}
          />
          <Button
            size={"icon"}
            icon={<CiMenuKebab className="text-[20px]" />}
            color={"icon"}
          />
        </div>
        <p className="text-xs text-gurugeeks-dark-500">Newly created</p>
      </div>
    </div>
  );
};

export default DetailsSection;
