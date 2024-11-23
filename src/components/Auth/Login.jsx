import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  
  // Define email and password using useState at the top level of the component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    handleLogin(email,password)
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="bg-gray-800 bg-opacity-90 border-2 border-teal-500 rounded-xl p-10 sm:p-20 shadow-lg shadow-teal-500/20 backdrop-blur-md">
        <form
          className="flex items-center justify-center flex-col space-y-5"
          onSubmit={submitHandler}
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-transparent border-2 border-teal-500 py-2 px-6 w-72 sm:w-80 text-lg sm:text-xl text-white outline-none rounded-full placeholder:text-gray-400 transition duration-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-transparent border-2 border-teal-500 py-2 px-6 w-72 sm:w-80 text-lg sm:text-xl text-white outline-none rounded-full placeholder:text-gray-400 transition duration-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your Password"
          />
          <button
            className="bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 py-2 px-8 w-full sm:w-auto text-white mt-5 text-lg sm:text-xl rounded-full transition duration-200 shadow-md hover:shadow-lg hover:shadow-teal-500/40 focus:shadow-lg focus:shadow-teal-500/40"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
