"use client";

import React, { useState } from "react";
import Button from "./buttons/Button";
import { Input, TextArea } from "./Input";
import endpoints from "@/config/endpoints";
import { fetchDataPost } from "@/utils/fetchData";
import { showToastSuccess, showToastError } from "@/config/toast";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    enrollment_child_name: "",
    enrollment_guardian_name: "",
    enrollment_email_id: "",
    enrollment_phNumber: "",
    enrollment_message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState(null);
  const [formErrorMessage, setFormErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormSuccessMessage(null);
    setFormErrorMessage(null);

    try {
      const result = await fetchDataPost(endpoints.sendEnrollment, formData);

      if (result && result.message) {
        showToastSuccess(result.message);
        setFormData({
          enrollment_child_name: "",
          enrollment_guardian_name: "",
          enrollment_email_id: "",
          enrollment_phNumber: "",
          enrollment_message: "",
        });
        setFormSuccessMessage(
          "Your enrollment form has been submitted successfully!"
        );
      } else {
        showToastError("Failed to send inquiry. Please try again.");
        setFormErrorMessage("Form Submission Failed, Please try again");
      }
    } catch (err) {
      showToastError(err.message || "An unexpected error occurred.");
      setFormErrorMessage("Form Submission Failed, Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-6 p-4 sm:p-6 lg:p-8 bg-white rounded-lg  mx-auto max-w-full md:max-w-2xl"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Child Name</label>
          <Input
            value={formData.enrollment_child_name}
            onChange={handleChange}
            type="text"
            name="enrollment_child_name"
            placeholder="Enter Name"
            className="w-full"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Mobile Number</label>
          <Input
            value={formData.enrollment_phNumber}
            onChange={handleChange}
            type="text"
            name="enrollment_phNumber"
            placeholder="1401400 1231"
            className="w-full"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">
            Guardian / Parent Name
          </label>
          <Input
            value={formData.enrollment_guardian_name}
            onChange={handleChange}
            type="text"
            name="enrollment_guardian_name"
            placeholder="Guardian Name"
            className="w-full"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Email Address</label>
          <Input
            value={formData.enrollment_email_id}
            onChange={handleChange}
            type="email"
            name="enrollment_email_id"
            placeholder="example@gmail.com"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="text-gray-700 font-medium">Message</label>
        <TextArea
          value={formData.enrollment_message}
          onChange={handleChange}
          name="enrollment_message"
          placeholder="Write here ..."
          className="w-full"
          textAreaHeight="h-32 md:h-40"
        />
      </div>

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      {formSuccessMessage && (
        <p className="text-green-600 text-lg mt-4">{formSuccessMessage}</p>
      )}
      {formErrorMessage && (
        <p className="text-red-600 text-lg mt-4">{formErrorMessage}</p>
      )}

      <div className="flex justify-end mt-4">
        <Button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition-colors"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default EnrollForm;
