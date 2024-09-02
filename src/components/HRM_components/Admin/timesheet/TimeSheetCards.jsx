import React from "react";
import Checkbox from "../../_common/Checkbox";
import CustomInput from "../../_common/CustomInput";
import { ImCross } from "react-icons/im";
import CustomDropdown from "../../_common/CustomDropDown";

const TimeSheetCards = ({
  index,
  timeEntries,
  handleHoursChange,
  handleDeleteSet,
}) => {
  return (
    <div className="flex">
      <div key={index} className="flex">
        <table id={`card-${index}`} className="">
          <tbody>
            <tr>
              <td className="w-[10%]">
                <Checkbox />
              </td>
              <td className="w-[10%]">
                <CustomDropdown />
              </td>
              <td className="w-[10%]">
                <CustomDropdown />
              </td>
              <td className="w-[10%]">
                <CustomDropdown />
              </td>

              {timeEntries.map((entry, entryIndex) => (
                <>
                  <td className="w-[10%]" key={entryIndex}>
                    <input
                      type="number"
                      value={entry.hours}
                      onChange={(e) =>
                        handleHoursChange(index, entryIndex, e.target.value)
                      }
                      min="0"
                    />
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </table>
        <div className="absolute -top-[20px] -right-[95px] h-16 w-16 bg-red-100 rounded-full transform -translate-x-full flex items-end justify-start px-3 pb-4">
          <ImCross
            onClick={() => handleDeleteSet(index)}
            className="text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSheetCards;
