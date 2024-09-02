import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { selectEmployeeSlice } from "../../../../../../features/HRM_features/employee/employee.selector";
import {
  createEmployee,
  fetchEmployees,
  postBankDetails,
} from "../../../../../../features/HRM_features/employee/employee.slice";
import { getDepartments } from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { getPositions } from "../../../../../../features/HRM_features/organisation/positions/position.slice";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";
import { selectPositions } from "../../../../../../features/HRM_features/organisation/positions/position.selectors";
import Spinner from "../../../../../_common/Spinner";
import CustomDropdown from "../../../../_common/CustomDropDown";
import Button from "../../../../_common/Button/Button";
import {
  closeAllModals,
  openModalByName,
} from "../../../../../../features/common/modals/modals.slice";
import ToggleButton from "../../../../_common/ToggleButton";
import { MdAnnouncement } from "react-icons/md";
import CustomInput from "../../../../_common/CustomInput";
import { selectModalsSlice } from "../../../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../../../constants/modals.constant";
import AddDepartment from "../../../organisation/modals/AddDepartment";

export const PersonalDetails = ({ form }) => {
  const { isLoading, employeeId } = useSelector(selectEmployeeSlice);
  const dispatch = useDispatch();
  const { positions } = useSelector(selectPositions);

  const { departments } = useSelector(selectDepartment);
  const [personalDetailsData, setPersonalDetailsData] = useState(() => {
    const storedFormData = localStorage.getItem("formData");
    return storedFormData
      ? JSON.parse(storedFormData)
      : {
          email: "",
          first_name: "",
          last_name: "",
          department_ids: [],
          designation_ids: [],
          phone_number: "",
          date_of_birth: "",
          date_hired: "",
          gender: "",
          address: "",
          is_active: true,
          is_confirmed: true,
        };
  });
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  useEffect(() => {
    dispatch(getDepartments());
    dispatch(getPositions());
    console.log(departments);
  }, []);

  // Effect to save form data to local storage when the component unmounts
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(personalDetailsData));
  }, [personalDetailsData]);

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

  const handleIsConfirmEmployee = () => {
    setPersonalDetailsData((prev) => ({
      ...prev,
      is_confirmed: !personalDetailsData.is_confirmed,
    }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setPersonalDetailsData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalDetailsData);
    dispatch(createEmployee(personalDetailsData))
      .unwrap()
      .then((payload) => {
        if (payload.status_code === 201) {
          dispatch(
            fetchEmployees(
              `employees/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true`
            )
          );
          toast.success(payload.data);
          dispatch(getDepartments());
          dispatch(fetchEmployees());
          dispatch(closeAllModals());
          localStorage.removeItem("formData");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        {/* form headr */}
        <div className="my-3 space-y-3">
          <h1 className="font-bold text-xl">Personal Details</h1>
          <p className="text-gray-400 font-light">
            Please fill out your information to complete your onboarding
          </p>
        </div>
        {/* alert */}

        <div className="bg-gray-100 opacity-7 flex items-center gap-2 p-4 rounded-md my-6">
          <MdAnnouncement size={25} />
          <p className="text-gray-400 font-light">
            Before adding an employee, you need to create a{" "}
            <span
              className="text-black font-bold cursor-pointer underline"
              onClick={() => {
                dispatch(openModalByName(MODALS.ORGANIZATION.ADD_DEPARTMENT));
              }}
            >
              Department
            </span>{" "}
            and{" "}
            <span
              className="text-black font-bold cursor-pointer underline"
              onClick={() => {
                dispatch(openModalByName(MODALS.ORGANIZATION.ADD_DESIGNATION));
              }}
            >
              Designation
            </span>
          </p>
        </div>
        {/* form */}
        <div className="flex justify-between items-center gap-x-8 my-5">
          <div className="w-full">
            <CustomInput
              label={"First Name"}
              type="text"
              name="first_name"
              placeholder="Enter first name"
              value={personalDetailsData.first_name}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label={"Last Name"}
              type="text"
              name="last_name"
              placeholder="Enter last name"
              value={personalDetailsData.last_name}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-8 my-5">
          <div className="w-full">
            <CustomInput
              label={"Email"}
              type="text"
              name="email"
              placeholder="Enter email"
              value={personalDetailsData.email}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomDropdown
              placeHolder={"Select Gender"}
              label="Gender"
              size={"small"}
              onSelect={(selectedOption) => {
                handleDropdownSelect("gender", selectedOption);
              }}
              options={gender}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-8 my-5">
          <div className="w-full">
            <CustomInput
              label={"DOB"}
              type="date"
              name="date_of_birth"
              placeholder="Enter date of birth"
              value={personalDetailsData.date_of_birth}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label={"Date Hired"}
              type="date"
              name="date_hired"
              placeholder="Enter date of hire"
              value={personalDetailsData.date_hired}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label={"Phone Number"}
              type="tel"
              name="phone_number"
              placeholder="Enter telephone number"
              value={personalDetailsData.phone_number}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-8 my-5">
          <div className="w-full">
            <CustomInput
              label={"Address"}
              type="text"
              name="address"
              placeholder="Enter address"
              value={personalDetailsData.address}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-8 my-5">
          <div className="flex w-full flex-col gap-y-1">
            <CustomDropdown
              placeHolder={"Select Designation"}
              onSelect={(selectedOption) => {
                handleSelect("designation_ids", selectedOption);
                console.log(positions, selectedOption);
              }}
              label="Select Designation/Position"
              options={positions?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
            />
          </div>

          <div className="w-full">
            <CustomDropdown
              placeHolder={"Select Department"}
              label="Department"
              onSelect={(selectedOption) => {
                handleSelect("department_ids", selectedOption);
                console.log(departments, selectedOption);
              }}
              options={departments?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-2 py-2 w-full mt-8">
          {/* <div className="flex gap-x-3 items-center">
          <p className="font-bold">Activate Employee account</p>
          <ToggleButton
            activeState={personalDetailsData.is_confirmed}
            handleOnClick={handleIsConfirmEmployee}
          />
        </div> */}
          <div className="flex items-center w-full">
            {/* <Button
            onClick={() => {
              localStorage.removeItem("formData");
              dispatch(closeAllModals());
            }}
            size={"lg"}
            type="button"
            color={"secondary"}
          >
            Cancel
          </Button> */}
            <Button
              size={"lg"}
              type="submit"
              className={
                "w-full text-center flex items-center justify-center font-light mb-24"
              }
            >
              {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : (
                "Complete"
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export const BankingDetails = ({ employeeId }) => {
  const employee = localStorage.getItem("formData");
  const employeeDetails = JSON.parse(employee);
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
  const employee = localStorage.getItem("formData");
  const employeeDetails = JSON.parse(employee);
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
      {employeeId ? (
        <p>
          Please upload in Documents for{" "}
          <span className="font-bold text-gurugeeks-green-600">
            {employeeDetails.name}
          </span>
        </p>
      ) : (
        <p>Please fill all information correctly</p>
      )}
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
  const employee = localStorage.getItem("formData");
  const employeeDetails = JSON.parse(employee);
  const dispatch = useDispatch();
  const isLoading = false;

  function handleContact(e) {
    const key = e.target.name;
    const value = e.target.value;
  }

  return (
    <div className="my-3 space-y-3">
      <h1 className="font-bold text-2xl">Emergency Contact</h1>
      {employeeId ? (
        <p>
          Please fill in Emergency Contact for{" "}
          <span className="font-bold text-gurugeeks-green-600">
            {employeeDetails.name}
          </span>
        </p>
      ) : (
        <p>Please fill all information correctly</p>
      )}
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
