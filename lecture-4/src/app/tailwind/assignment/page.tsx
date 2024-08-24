import React from "react";

const AssignmentPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-100">
      <div className="w-[20vw] bg-white rounded-3xl p-8 shadow-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-blue-600">CSS Flex & Grid</h1>
        <p className="text-gray-600 text-lg">
          This book takes a completely different approach. I won&apos;t teach
          you the things flex and grid can do. Instead, I will first show you
          some components and layouts and make you think how to build them using
          the CSS concepts you already know. Now you have a problem, and you
          want a solution.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-200  font-medium py-2 px-4 rounded-md hover:bg-blue-300">
            Prev
          </button>
          <button className="bg-blue-200  font-medium py-2 px-4 rounded-md hover:bg-blue-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
