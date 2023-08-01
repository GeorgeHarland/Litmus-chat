'use client';

import React, { useEffect, useState } from 'react';
import { RegisterFormData } from '@/types/types';
import Link from 'next/link';

// For future prop types since current functions are placeholders to get it working
type FormEventTypes = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    FirstName: '',
    Surname: '',
    Email: '',
    Password: '',
  });

  const resetFormData = () => {
    setFormData({
      FirstName: '',
      Surname: '',
      Email: '',
      Password: '',
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
    resetFormData();
  };

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    mounted && ( //If Component has mounted then render
      <div className="w-[500px] rounded-xl bg-gradient-bg p-4 shadow-2xl">
        <h2 className="mb-10 text-center text-6xl font-bold">Livianos</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="formElement"
              type="text"
              placeholder="First name"
              required={true}
              value={formData.FirstName}
              name="FirstName"
              onChange={(e) => handleData(e)}
            />
            <input
              className="formElement"
              type="text"
              placeholder="Surname"
              required={true}
              value={formData.Surname}
              name="Surname"
              onChange={(e) => handleData(e)}
            />
            <input
              className="formElement col-span-2"
              type="text"
              placeholder="Email"
              required={true}
              value={formData.Email}
              name="Email"
              onChange={(e) => handleData(e)}
            />
            <input
              className="formElement col-span-2"
              type="password"
              placeholder="Password"
              required={true}
              value={formData.Password}
              name="Password"
              onChange={(e) => handleData(e)}
            />
            <button className="col-span-3 mt-4 w-4/5 justify-self-center rounded-md bg-green-500 p-2 hover:bg-green-700">
              Sign Up
            </button>
          </div>
        </form>
        <h2 className="text-center">
          <Link className="text-blue-500 hover:underline" href="/login">
            Back to Login
          </Link>
        </h2>
      </div>
    )
  );
};

export default RegistrationForm;
