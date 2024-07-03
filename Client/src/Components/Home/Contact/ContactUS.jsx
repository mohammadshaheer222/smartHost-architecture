import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUS = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post(`http://localhost:2000/api/v2/contact-form`, {
        firstName,
        lastName,
        email,
        message,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsLoading(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 md:mt-0  flex-1 flex flex-col items-center justify-center gap-4   rounded-xl max-w-full"
    >
      <div className="self-stretch flex flex-col md:flex-row gap-6 items-start justify-start ">
        <div className="flex flex-col items-start justify-start gap-2  w-full md:w-1/2">
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => {
              const value = e.target.value;
              setFirstName(value.charAt(0).toUpperCase() + value.slice(1));
            }}
            className=" outline-none text-gray-500 px-3 w-full py-2"
            placeholder="First Name"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full md:w-1/2">
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => {
              const value = e.target.value;
              setLastName(value.charAt(0).toUpperCase() + value.slice(1));
            }}
            className=" outline-none text-gray-500 px-3 w-full py-2"
            placeholder="Last Name"
            type="text"
            required
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 mt-4">
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none text-gray-500 px-3 w-full py-2"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 mt-4">
        <textarea
          id="message"
          value={message}
          onChange={(e) => {
            const value = e.target.value;
            setMessage(value.charAt(0).toUpperCase() + value.slice(1));
          }}
          className=" outline-none text-gray-500 py-1 px-3 w-full h-[80px]"
          placeholder="How can i help you?"
          required
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer border-none w-full active:scale-95 active:shadow-lg duration-100 bg-[#3B3B3B] p-2 mt-8 flex items-center justify-center hover:bg-[#454545] text-white active:bg-[#1f1f1f]"
      >
        <b className="text-[18px] font-thin leading-[150%] uppercase text-center">
          {isLoading ? "Submitting.." : "Submit"}
        </b>
      </button>
    </form>
  );
};

export default ContactUS;
