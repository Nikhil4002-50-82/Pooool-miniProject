import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../../../utils/supabase.js";

import LogComp from './LogComp';

const SignUp = () => {

  const navigate=useNavigate();

  const [user, setUser] = useState("");
  const [name,setName]=useState("")
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [error, setError] = useState(null);

  const signIn = async (userName, password) => {
    try {
      const { data, error } = await supabase
        .from('Auth')
        .insert([{ userName, password , name }])
        .select();

      if (error) {
        throw error;
      }

      console.log("User signed up successfully:", data);
      alert("Signup successful!");
      setUser("");
      setValue1("");
      setValue2("");
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !value1 || !value2 || !name) {
      alert("All fields are required.");
      return;
    }

    if (value1 !== value2) {
      alert("Passwords do not match!");
      setValue1("");
      setValue2("");
      return;
    }

    await signIn(user, value1); // Pass validated username and password directly.
    navigate("/login");
  };

  return (
    <div className="p-[4.5em]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-[1em]">How do you want to sign up?</h1>
        <div className="w-[50%] mb-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="Name">Name</label>
            <input
                type="text"
                className="bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg"
                name="Name"
                id="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              className="bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg"
              name="userName"
              id="userName"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg"
              name="password"
              id="password"
              value={value1}
              onChange={(event) => setValue1(event.target.value)}
            />
            <label htmlFor="conPassword">Confirm Password</label>
            <input
              type="password"
              className="bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg"
              name="conPassword"
              id="conPassword"
              value={value2}
              onChange={(event) => setValue2(event.target.value)}
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[7em] h-[2.5em] flex items-center justify-center rounded-md font-semibold bg-[blue] text-white">
                Submit
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <hr className="w-[50%] border-[0.1em] border-gray-300" />
        <LogComp />
      </div>
    </div>
  );
};

export default SignUp;
