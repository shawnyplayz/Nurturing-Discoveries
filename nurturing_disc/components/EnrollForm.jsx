import React from "react";
import Button from "./buttons/Button";
import { Input, TextArea } from "./Input";

const EnrollForm = () => {
  return (
    <form className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-quicksand text-base sm:text-lg lg:text-xl">
            Child Name
          </label>
          <Input
            type="text"
            placeholder="Enter Name"
            className="w-full font-quicksandMedium text-base sm:text-lg lg:text-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-quicksand text-base sm:text-lg lg:text-xl">
            Mobile Number
          </label>
          <Input
            type="text"
            placeholder="1401400 1231"
            className="w-full font-quicksandMedium text-base sm:text-lg lg:text-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-quicksand text-base sm:text-lg lg:text-xl">
            Guardian Parent Name
          </label>
          <Input
            type="text"
            placeholder="Guardian Name"
            className="w-full font-quicksandMedium text-base sm:text-lg lg:text-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-quicksand text-base sm:text-lg lg:text-xl">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="w-full font-quicksandMedium text-base sm:text-lg lg:text-xl"
          />
        </div>
      </div>

      <div className="flex flex-col mt-4 sm:mt-6 gap-2">
        <label className="text-gray-700 font-quicksand text-base sm:text-lg lg:text-xl">
          Message
        </label>
        <TextArea
          placeholder="write here ..."
          className="w-full font-quicksandMedium text-base sm:text-lg lg:text-xl"
          textAreaHeight="h-32 sm:h-40"
        />
      </div>

      <div className="flex justify-end sm:justify-start mt-4 sm:mt-6">
        <Button className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition-colors">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EnrollForm;
