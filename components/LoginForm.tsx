'use client';

import React, { useContext, useEffect, useState } from 'react';
import { LoginFormData } from '@/types/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LoginContext } from '@/context/LoginContext';
import { z } from 'zod';

// For future prop types since current functions are placeholders to get it working
type FormEventTypes = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    Email: '',
    Password: '',
  });

  const { setIsLoggedIn } = useContext(LoginContext);
  const router = useRouter();

  const resetFormData = () => {
    setFormData({
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
    resetFormData();
    setIsLoggedIn(true);
    router.push('/');
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
          <div className="flex flex-col gap-4">
            <input
              className="formElement"
              type="text"
              placeholder="Email"
              required={true}
              value={formData.Email}
              name="Email"
              onChange={(e) => handleData(e)}
            />
            <input
              className="formElement"
              type="password"
              placeholder="Password"
              required={true}
              value={formData.Password}
              name="Password"
              onChange={(e) => handleData(e)}
            />
            <button className="mt-4 w-4/5 self-center rounded-md bg-green-500 p-2 hover:bg-green-700">
              Log in
            </button>
          </div>
        </form>
        <h2 className="text-center">
          Don&apos;t have an account?
          <Link className="text-blue-500 hover:underline" href="/register">
            {' '}
            Register here
          </Link>
        </h2>
      </div>
    )
  );
};

export default RegistrationForm;
