const CollapseIcon = ({ isSidebarOpen }) => {
    return (
      <svg
        className={`m-auto h-5 w-5 transition-transform duration-300 ${
          isSidebarOpen ? "rotate-180" : ""
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 19L7 12L13 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.5"
          d="M16.9998 19L10.9998 12L16.9998 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default CollapseIcon;
  