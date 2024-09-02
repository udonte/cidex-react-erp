import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../../../services/HRM/AdminHRM/components/../../../services/HRM/AdminHRM/components";
import { useEffect, useState } from "react";
import CustomDropdown from "../../../common/CustomDropDown";
import Spinner from "../../../common/Spinner";
import { toast } from "react-toastify";
import { selectEmployeeSlice } from "../../../../../../features/HRM_features/employee/employee.selector";
import {
  createEmployee,
  postBankDetails,
} from "../../../../../../features/HRM_features/employee/employee";
import { getDepartments } from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { getDesignations } from "../../../../../../features/HRM_features/organisation/positions/position.slice";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";
import { selectPositions } from "../../../../../../features/HRM_features/organisation/positions/position.selectors";

export const PersonalDetails = ({ form }) => {
  const { isLoading, employeeId } = useSelector(selectEmployeeSlice);
  const dispatch = useDispatch();
  const { positions } = useSelector(selectPositions);
  const { departments } = useSelector(selectDepartment);
  const [personalDetailsData, setPersonalDetailsData] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    department_ids: [],
    position_ids: [],
    profile_img: "",
    salary: "",
  });

  useEffect(() => {
    dispatch(getDepartments());
    dispatch(getDesignations());
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalDetailsData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSelect = (name, selectedOption) => {
    setPersonalDetailsData((prevState) => ({
      ...prevState,
      [name]: [selectedOption],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(personalDetailsData));
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="my-3 space-y-3">
        <h1 className="font-bold text-2xl">Personal details</h1>
        <p>Please fill all information correctly</p>
      </div>
      <div className="flex justify-between items-center gap-x-2 my-5">
        <div className="w-full">
          <label htmlFor="job_title">Name</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="name"
            value={personalDetailsData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="job_title">Email</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="email"
            value={personalDetailsData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 my-5">
        <div className="w-full">
          <label>Date Of Birth</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="date"
            name="date_of_birth"
            value={personalDetailsData.date_of_birth}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <CustomDropdown
            label="Department"
            onSelect={(selectedOption) => {
              handleSelect("department_ids", selectedOption);
            }}
            options={departments?.map((items) => ({
              value: items.id,
              label: items.name,
            }))}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 my-5">
        <div className="flex w-full flex-col gap-y-1">
          <CustomDropdown
            onSelect={(selectedOption) => {
              handleSelect("position_ids", selectedOption);
            }}
            label="Select Designation"
            options={positions?.map((items) => ({
              value: items.id,
              label: items.name,
            }))}
          />
        </div>

        <div className="flex w-full flex-col gap-y-1">
          <label>Salary</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="salary"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-2">
        <Button size={"lg"} type="button" color={"secondary"}>
          Cancel
        </Button>
        <Button size={"lg"} type="submit">
          {isLoading ? (
            <div className="w-14">
              <Spinner />
            </div>
          ) : (
            "Submit Personal details"
          )}
        </Button>
      </div>
    </form>
  );
};

export const BankingDetails = ({ employeeId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectEmployeeSlice);
  const [bankDetailsData, setBankDetailsData] = useState({
    account_number: "",
    bank_name: "",
    bvn: "",
    employee_id: employeeId,
  });

  const areRequiredFieldsFilled = () => {
    return (
      bankDetailsData.account_number.trim() !== "" &&
      bankDetailsData.bank_name.trim() !== "" &&
      bankDetailsData.bvn.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!areRequiredFieldsFilled()) {
      toast.error("Please fill all required fields");
    } else if (!employeeId) {
      toast.error("Submit Employee Personal Details");
    } else {
      dispatch(postBankDetails(bankDetailsData));
    }
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setBankDetailsData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="my-3 space-y-3">
        <h1 className="font-bold text-2xl">Banking details</h1>
        <p>Please fill all information correctly</p>
      </div>
      <div className="flex justify-between items-center gap-x-2 my-5">
        <div className="flex w-full flex-col gap-y-1">
          <label>Account Number</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="number"
            name="account_number"
            onInput={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-y-1">
          <label>Bank Name</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="bank_name"
            value={bankDetailsData.bank_name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 my-5">
        <div className="flex w-1/2 flex-col gap-y-1">
          <label>Bank Verification Number</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="number"
            name="bvn"
            value={bankDetailsData.bvn}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-2">
        <Button size={"lg"} type="button" color={"secondary"}>
          Cancel
        </Button>
        <Button size={"lg"} type="submit">
          {isLoading ? (
            <div className="w-14">
              <Spinner />
            </div>
          ) : (
            "Submit Bank Details"
          )}
        </Button>
      </div>
    </form>
  );
};

export const Documents = ({ employeeId }) => {
  const isLoading = false;
  const dispatch = useDispatch();
  // function handleDocument(e) {
  //   const file = e.target.files[0];
  //   const key = e.target.name;

  //   if (file) {
  //     const newReader = new FileReader();
  //     newReader.onload = function (event) {
  //       const byteData = new Uint8ClampedArray(event.target.result);
  //       const stringified = JSON.stringify(byteData);
  //       dispatch(uploadDocument({ [key]: stringified }));
  //     };
  //     newReader.readAsArrayBuffer(file);
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!areRequiredFieldsFilled()) {
  //     toast.error("Please fill all required fields");
  //   } else if (!employeeId) {
  //     toast.error("Submit Employee Personal Details");
  //   } else {
  //     dispatch(postBankDetails(bankDetailsData));
  //   }
  // };

  return (
    <div className="my-3 space-y-3">
      <h1 className="font-bold text-2xl">Documents</h1>
      <p>Please fill all information correctly</p>

      <section className="flex w-full justify-between">
        <div className="flex flex-col">
          <label htmlFor="">Offer Letter</label>
          <input type="file" name="offer_letter" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Contract & Agreement</label>
          <input type="file" name="contract_and_agreement" />
        </div>
      </section>
      <div className="flex justify-end items-center gap-x-2 py-2">
        <Button size={"lg"} type="button" color={"secondary"}>
          Cancel
        </Button>
        <Button size={"lg"} type="submit">
          {isLoading ? (
            <div className="w-14">
              <Spinner />
            </div>
          ) : (
            "Submit Documents"
          )}
        </Button>
      </div>
    </div>
  );
};

export const EmergencyContacts = ({ employeeId }) => {
  const dispatch = useDispatch();
  const isLoading = false;

  function handleContact(e) {
    const key = e.target.name;
    const value = e.target.value;
  }
  return (
    <div className="my-3 space-y-3">
      <h1 className="font-bold text-2xl">Emergency Contact</h1>
      <p>Please fill all information correctly</p>

      <div className="flex justify-between items-center gap-x-2 my-10">
        <div className="flex w-full flex-col gap-y-1">
          <label>Name</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="name"
            onInput={handleContact}
          />
        </div>
        <div className="flex w-full flex-col gap-y-1">
          <label>Phone Number</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="phone_number"
            onInput={handleContact}
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-2 my-10">
        <div className="flex w-full flex-col gap-y-1">
          <label>Email Address</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="email"
            name="email_address"
            onInput={handleContact}
          />
        </div>
        <div className="flex w-full flex-col gap-y-1">
          <label>House Address</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="home_address"
            onInput={handleContact}
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-2">
        <Button size={"lg"} type="button" color={"secondary"}>
          Cancel
        </Button>
        <Button size={"lg"} type="submit">
          {isLoading ? (
            <div className="w-14">
              <Spinner />
            </div>
          ) : (
            "Submit Emergency Contact"
          )}
        </Button>
      </div>
    </div>
  );
};
