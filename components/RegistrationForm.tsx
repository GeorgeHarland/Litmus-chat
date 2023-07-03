"use client";

import React, { useEffect, useState } from "react";
import { FormDataType } from "@/types/types";

type FormEventTypes = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = () => {
  const [formData, setFormData] = useState<FormDataType>({
    FirstName: "",
    Surname: "",
    Email: "",
    Password: "",
  });

  const restFormData = () => {
    setFormData({
      FirstName: "",
      Surname: "",
      Email: "",
      Password: "",
    });
  };

  // Fixes Hydration issue
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    restFormData();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    mounted && ( //If Component has mounted then render
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="w-[400px] p-4 shadow-2xl">
          <h2 className="mb-10 text-center text-3xl font-bold">Livianos</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="formElement"
                type="text"
                placeholder="First name"
                required={true}
                value={formData.FirstName}
                name="FirstName"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                className="formElement"
                type="text"
                placeholder="Surname"
                required={true}
                value={formData.Surname}
                name="Surname"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                className="formElement col-span-2"
                type="text"
                placeholder="Email"
                required={true}
                value={formData.Email}
                name="Email"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                className="formElement col-span-2"
                type="password"
                placeholder="Password"
                required={true}
                value={formData.Password}
                name="Password"
                onChange={(e) => handleOnChange(e)}
              />
              <button className="col-span-3 mt-4 w-4/5 justify-self-center rounded-md bg-green-600 bg-transparent p-2 hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Form;
