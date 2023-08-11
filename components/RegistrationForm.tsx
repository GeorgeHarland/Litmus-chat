'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Months } from '@/data/data';
import { z } from 'zod';

// For future prop types since current functions are placeholders to get it working
type FormEventTypes = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<User>({
    Username: '',
    Email: '',
    Password: '',
    Day: 0,
    Month: 0,
    Year: 0,
  });

  type User = z.infer<typeof userSchema>;

  const PasswordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\\|`~]).*$/;

  const userSchema = z.object({
    Username: z.string().min(3),
    Email: z.string().email(),
    Password: z.string().min(3).regex(PasswordRegex),
    Day: z.number(),
    Month: z.number(),
    Year: z.number(),
  });

  const dayRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);

  const resetFormData = () => {
    setFormData({
      Username: '',
      Email: '',
      Password: '',
      Day: 0,
      Month: 0,
      Year: 0,
    });
    if (dayRef.current) dayRef.current.value = 'Day';
    if (monthRef.current) monthRef.current.value = 'Month';
    if (yearRef.current) yearRef.current.value = 'Year';
  };

  // Fixes Hydration issue
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(userSchema.safeParse(formData));
    resetFormData();
  };

  const handleData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value =
      e.target.type === 'select-one'
        ? parseInt(e.target.value)
        : e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  const Days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const earliestYear = currentYear - 100;
  const Years = Array.from(
    { length: currentYear - earliestYear + 1 },
    (_, i) => earliestYear + i
  );

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
              type="text"
              placeholder="Username"
              required={true}
              value={formData.Username}
              name="Username"
              onChange={(e) => handleData(e)}
            />
            <input
              className="formElement "
              type="password"
              placeholder="Password"
              required={true}
              value={formData.Password}
              name="Password"
              onChange={(e) => handleData(e)}
            />
            <div className="flex justify-between gap-4 p-2">
              <select
                ref={dayRef}
                name="Day"
                onChange={(e) => handleData(e)}
                className="w-full appearance-none rounded-lg bg-purple-700 px-4 py-1"
              >
                <option disabled hidden selected>
                  Day
                </option>
                {Days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                ref={monthRef}
                name="Month"
                onChange={(e) => handleData(e)}
                className="w-full appearance-none rounded-lg bg-purple-700 px-4 py-1"
              >
                <option disabled hidden selected>
                  Month
                </option>
                {Object.entries(Months).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
              <select
                ref={yearRef}
                name="Year"
                onChange={(e) => handleData(e)}
                className="w-full appearance-none rounded-lg bg-purple-700 px-4 py-1"
              >
                <option disabled hidden selected>
                  Year
                </option>
                {Years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <button className="justify-self-center rounded-md bg-green-500 p-2 hover:bg-green-700">
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
