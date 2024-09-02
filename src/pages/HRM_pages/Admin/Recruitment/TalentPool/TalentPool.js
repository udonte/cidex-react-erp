import React, { useEffect } from "react";
import { AiOutlineFolder, AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  StatusPill,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../../components/HRM_components/index";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import AddTalentModal from "../../../../../components/HRM_components/Admin/talentPool/AddtalentModal";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { fetchTalent } from "../../../../../features/HRM_features/recruitment/talentPool/talentPool.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import { selectTalentSlice } from "../../../../../features/HRM_features/recruitment/talentPool/talentPool.selector";
import Spinner from "../../../../../components/_common/Spinner";
import { selectApplicantSlice } from "../../../../../features/HRM_features/recruitment/applicants/applicants.selector";
import {
  fetchApplicant,
  deleteApplicantById,
} from "../../../../../features/HRM_features/recruitment/applicants/applicants.slice";

const TalentPool = () => {
  const dispatch = useDispatch();
  // const { talents, isLoading } = useSelector(selectTalentSlice);
  const { applicants, isLoading } = useSelector(selectApplicantSlice);
  const openModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Recruitment", "Talent Pool"];
  const tableHeader = ["Name", "Email", "Phone Number", "Department", "Source"];

  const dotOptions = [
    {
      text: "Email",
      icon: <FaPlus />,
      callBack: () => {
        console.log("send an email");
      },
    },
    {
      text: "Delete",
      icon: <FaTrash />,
      callBack: (id) => {
        dispatch(deleteApplicantById(id))
          .unwrap()
          .then((payload) => {
            if (payload === 200) {
              dispatch(fetchApplicant());
            }
          });
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchTalent());
    dispatch(fetchApplicant());
  }, [dispatch]);

  return (
    <>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      {applicants?.length > 0 ? (
        <TopTab
          leftComponent={
            <h1 className="font-bold text-xl text-[#161E54]">
              {applicants?.length} Applicants
            </h1>
          }
        />
      ) : (
        "N/A"
      )}
      <FilterTab
        component={
          <div className="flex items-center gap-x-3">
            <Button color={"secondary"}>Import Talent</Button>
            <Button
              onClick={() => {
                dispatch(openModalByName(MODALS.RECRUITMENT.ADD_TALENT));
              }}
            >
              Add Talent
            </Button>
          </div>
        }
        sort={true}
        search={() => {
          return;
        }}
        filter={true}
      />
      <main className="px-6 h-full">
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : applicants.length > 0 ? (
          <TableContainer
            pagination={true}
            tableHeader={tableHeader}
            dotOption={dotOptions}
          >
            {applicants?.map(
              (
                { first_name, last_name, email, phone, location, id },
                index
              ) => (
                <>
                  <TableRowItem key={index} dotOptions={dotOptions} id={id}>
                    <td>
                      {first_name} {last_name}
                    </td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>Department</td>
                    <td>Linkedin</td>
                  </TableRowItem>
                </>
              )
            )}
          </TableContainer>
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
            <div className="flex flex-col items-center justify-center">
              <AiOutlineUsergroupAdd className="text-[80px] " />
              <p className=" font-semibold text-lg">No Talents Found</p>
              <p>Add talents to talent pool</p>
            </div>
          </div>
        )}
      </main>
      {<AddTalentModal isOpen={openModal[MODALS.RECRUITMENT.ADD_TALENT]} />}
    </>
  );
};

export default TalentPool;
