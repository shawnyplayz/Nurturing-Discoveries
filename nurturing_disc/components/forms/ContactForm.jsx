"use client";

import React, { useState } from "react";
import { Input, TextArea } from "../Input";
import Button from "../buttons/Button";
import endpoints from "@/config/endpoints";
import { fetchDataPost } from "@/utils/fetchData";
import { showToastError, showToastSuccess } from "@/config/toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      const result = await fetchDataPost(endpoints.sendInquiry, formData);

      if (result && result.message) {
        showToastSuccess(result.message);
        setFormData({
          name: "",
          email: "",
          mobile_number: "",
          message: "",
        });
      } else {
        showToastError("Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      showToastError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full lg:max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label className="mb-2 font-quicksand text-left font-medium text-fiord">
            Your Name
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="grid gap-1">
          <label className="mb-2 text-left font-medium font-quicksand text-fiord">
            Your Email
          </label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label className="mb-2 text-left font-medium font-quicksand text-fiord">
          Your Phone
        </label>
        <Input
          name="mobile_number"
          value={formData.mobile_number}
          onChange={handleChange}
          placeholder="Your Phone"
        />
      </div>
      <div className="grid gap-1">
        <label className="mb-2 text-left font-medium font-quicksand text-fiord">
          Write Message
        </label>
        <TextArea
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Message"
        />
      </div>
      <div>
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
