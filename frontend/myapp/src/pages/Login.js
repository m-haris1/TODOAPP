
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.accessToken);
        navigate('/home');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full gap-y-4 py-10 bg-blue-50">
        <h3 className="text-3xl font-semibold text-gray-900">Login</h3>
        <form onSubmit={handleSubmit} className="w-11/12 max-w-md bg-white rounded-lg shadow-lg px-10 py-10">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Email Address <sup className="text-red-600">*</sup>
            </p>
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="w-full relative mt-4">
            <p className="text-sm text-gray-700 mb-1">
              Password <sup className="text-red-600">*</sup>
            </p>
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              name="password"
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? 
                <AiOutlineEyeInvisible fontSize={24} fill="#6B7280" /> : 
                <AiOutlineEye fontSize={24} fill="#6B7280" />}
            </span>
          </label>

          {error && <p className="text-red-600 my-4">{error}</p>}

          <button className="w-full bg-indigo-600 text-white rounded-md py-2 mt-6 hover:bg-indigo-700">
            Log In
          </button>

          <p className="mt-4 text-gray-700">
            Don't have an account? {" "}
            <Link to="/signup" className="text-blue-600">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
