import React from "react";
import { Input, TextArea } from "../Input";
import Button from "../buttons/Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 lg:max-w-lg mx-auto container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="mb-2 font-quicksand text-left font-medium text-fiord">
            Your Name
          </label>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <label className="mb-2 text-left font-medium font-quicksand text-fiord">
            Your Email
          </label>
          <Input placeholder="Your Email" />
        </div>
      </div>
      <div>
        <label className="mb-2 text-left font-medium font-quicksand text-fiord">
          Your Phone
        </label>
        <Input placeholder="Your Phone" />
      </div>
      <div>
        <label className="mb-2 text-left font-medium font-quicksand text-fiord">
          Write Message
        </label>
        <TextArea rows="6" placeholder="Write Message"></TextArea>
      </div>
      <div>
        <Button>Send message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
