// components/EnrollForm.js
import React from "react";
import Button from "./buttons/Button";

const EnrollForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700">Child Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Mobile Number</label>
        <input
          type="text"
          placeholder="1401400 1231"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Guardian Parent Name</label>
        <input
          type="text"
          placeholder="Guardian Name"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Message</label>
        <textarea
          placeholder="Write here..."
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default EnrollForm;
