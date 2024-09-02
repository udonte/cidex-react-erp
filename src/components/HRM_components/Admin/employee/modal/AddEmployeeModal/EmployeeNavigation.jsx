const EmployeeNavigation = ({ index = 0, onClick }) => {
  return (
    <div className="flex justify-between mt-5">
      <button
        type="button"
        onClick={onClick}
        id="dec"
        className={`border rounded-[0.4rem] p-2 px-8 ${
          index === 0
            ? "bg-gray-300 border-gray-400 cursor-default"
            : "border-orange-700"
        }`}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={onClick}
        id="inc"
        className="border border-orange-700 rounded-[0.4rem] p-2 px-8 bg-orange-700 text-white"
      >
        {index === 3 ? "Complete" : "Next"}
      </button>
    </div>
  );
};

export default EmployeeNavigation;
