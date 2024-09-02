<button
  className={`w-10 h-8 px-1 rounded ${
    !isSidebarOpen ? "bg-[#16C098]" : "bg-gray-300"
  }`}
>
  <span
    className={`block w-4 h-[26px] rounded ${
      !isSidebarOpen ? "transform translate-x-4" : "translate-x-0"
    } bg-white transition-transform duration-400`}
  />
</button>;
