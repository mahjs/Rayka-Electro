import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  kind?: "blue" | "yellow" | "skyblue" | "white" | "purple";
};

const Buttons: React.FC<ButtonProps> = ({ children, kind = "blue" }) => {
  // Define the styles for different kinds of buttons
  const blueButtonClasses =
    "text-[#0077ff] hover:text-white border rounded-[2rem] px-14 border-[#0077ff] hover:bg-blue-[#0077ff] focus:ring-4 focus:outline-none focus:ring-[#0077ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#0077ff] dark:text-[#0077ff] dark:hover:text-white dark:hover:bg-[#0077ff] dark:focus:ring-[#0077ff] transition duration-500";
  const yellowButtonClasses =
    "text-[#ff9100] hover:text-white border rounded-[2rem] px-14 border-[#ff9100] hover:bg-[#ff9100] focus:ring-4 focus:outline-none focus:ring-[#ff9100] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#ff9100] dark:text-[#ff9100] dark:hover:text-white dark:hover:bg-[#ff9100] dark:focus:ring-[#ff9100] transition duration-500";
  const skyblueButtonClasses =
    "text-yellow-400 hover:text-white border rounded-[2rem] px-14 border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 transition duration-500";
  const whiteButtonClasses =
    "text-gray-900 hover:text-white border rounded-[2rem] px-14 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition duration-500";
  const purpleButtonClasses =
    "text-purple-700 hover:text-white border rounded-[2rem] px-14 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 transition duration-500";

  return (
    <>
      <button
        type="button"
        className={
          kind === "blue"
            ? blueButtonClasses
            : kind === "yellow"
            ? yellowButtonClasses
            : kind === "skyblue"
            ? skyblueButtonClasses
            : kind === "white"
            ? whiteButtonClasses
            : purpleButtonClasses
        }
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
