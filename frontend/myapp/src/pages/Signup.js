// import Navbar from '../components/Navbar'
// import React, { useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate, Link } from 'react-router-dom';
// import {toast} from "react-hot-toast"
// import apiClient from '../utils/axiosInstance';
// import axios from 'axios';

// const Signup = () => {

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         fullName:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//     })
//     const [error,setError]=useState("");

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     function changeHandler(event) {
//         setFormData((prevData) =>(
//             {
//                 ...prevData,
//                 [event.target.name]:event.target.value
//             }
//         ))
//     }    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:8000/api/v1/signup', {
//             fullName:formData.fullName,
//             email: formData.email,
//             password: formData.password
//           });
    
//           if (response.data.success) {
//             localStorage.setItem('token', response.data.accessToken);
//             console.log(response);
//             // setIsLoggedIn(true);
//             navigate('/dashboard');
//           } else {
//             setError(response.data.message);
//           }
//         } catch (error) {
//           console.error('Login failed:', error);
//           setError('Login failed. Please try again.');
//         }
//       };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className='flex flex-col justify-center items-center w-full gap-y-4'>
//         <h3 className='mx-5'> SignUp </h3>
//       <form onSubmit={handleSubmit} className='w-11/12 max-w-[450px] px-10 py-10 border-2'>
//         {/* first name and lastName */}
//             <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
//                     <label className='w-full'>
//                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
//                             Name<sup className='text-pink-200'>*</sup>
//                         </p>
//                         <input
//                             required
//                             type="text"
//                             name="fullName"
//                             onChange={changeHandler}
//                             placeholder="Enter First Name"
//                             value={formData.fullName}
//                             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
//                         />
//                     </label>

//             </div>
//             {/* email Add */}
//             <div className='mt-[20px]'>
//             <label className='w-full mt-[20px]'>
//                     <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
//                     <input
//                         required
//                         type="email"
//                         name="email"
//                         onChange={changeHandler}
//                         placeholder="Enter Email Address "
//                         value={formData.email}
//                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
//                     />
//             </label>
//             </div>
            

//             {/* createPassword and Confirm Password */}
//             <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px] '>
//                 <label className='w-full relative'>
//                     <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
//                     <input
//                         required
//                         type= {showPassword ? ("text") : ("password")}
//                         name="password"
//                         onChange={changeHandler}
//                         placeholder="Enter Password"
//                         value={formData.password}
//                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
//                     />
//                     <span
//                      className='absolute right-3 top-[38px] cursor-pointer' 
//                     onClick={() => setShowPassword((prev) => !prev)}>
//                         {showPassword ? 

//                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

//                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
//                     </span>
//                 </label>

//                 <label className='w-full relative'>
//                     <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
//                     <input
//                         required
//                         type= {showConfirmPassword ? ("text") : ("password")}
//                         name="confirmPassword"
//                         onChange={changeHandler}
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
//                     />
//                     <span 
//                      className='absolute right-3 top-[38px] cursor-pointer'
//                     onClick={() => setShowConfirmPassword((prev) => !prev)}>
//                         {showConfirmPassword ?

//                          (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

//                          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
//                     </span>
//                 </label>
//             </div>
//             <p>{error}</p>
//             <span>
//                     Have already registered ? {"   "}
//                     <Link to="/login" className='text-blue-600'>Login Here</Link>
//                 </span>            
//         <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
//             Create Account
//         </button>

//         </form>      
//     </div>
//     </div>
//   )
// }

// export default Signup

// import Navbar from '../components/Navbar';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from "react-hot-toast";
// import apiClient from '../utils/axiosInstance';
// import axios from 'axios';

// const Signup = () => {

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     });
//     const [error, setError] = useState("");

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     function changeHandler(event) {
//         setFormData((prevData) => (
//             {
//                 ...prevData,
//                 [event.target.name]: event.target.value
//             }
//         ));
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/api/v1/signup', {
//                 fullName: formData.fullName,
//                 email: formData.email,
//                 password: formData.password
//             });

//             if (response.data.success) {
//                 localStorage.setItem('token', response.data.accessToken);
//                 console.log(response);
//                 // setIsLoggedIn(true);
//                 navigate('/dashboard');
//             } else {
//                 setError(response.data.message);
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             setError('Signup failed. Please try again.');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col">
//             <Navbar />
//             <div className="flex flex-col justify-center items-center w-full gap-y-4">
//                 <h3 className="text-3xl font-semibold text-gray-800 mt-10">Sign Up</h3>
//                 <form onSubmit={handleSubmit} className="w-11/12 max-w-md px-8 py-10 bg-white shadow-lg rounded-lg border border-gray-200">
//                     <div className="flex flex-col gap-4 mt-4">
//                         <label className="w-full">
//                             <p className="text-lg text-gray-700 mb-1 leading-5">
//                                 Name<sup className="text-red-500">*</sup>
//                             </p>
//                             <input
//                                 required
//                                 type="text"
//                                 name="fullName"
//                                 onChange={changeHandler}
//                                 placeholder="Enter Full Name"
//                                 value={formData.fullName}
//                                 className="bg-gray-100 rounded-md text-gray-900 w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </label>
//                     </div>
//                     <div className="mt-4">
//                         <label className="w-full">
//                             <p className="text-lg text-gray-700 mb-1 leading-5">Email Address<sup className="text-red-500">*</sup></p>
//                             <input
//                                 required
//                                 type="email"
//                                 name="email"
//                                 onChange={changeHandler}
//                                 placeholder="Enter Email Address"
//                                 value={formData.email}
//                                 className="bg-gray-100 rounded-md text-gray-900 w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </label>
//                     </div>
//                     <div className="w-full flex flex-col gap-4 mt-4">
//                         <label className="w-full relative">
//                             <p className="text-lg text-gray-700 mb-1 leading-5">Create Password<sup className="text-red-500">*</sup></p>
//                             <input
//                                 required
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 onChange={changeHandler}
//                                 placeholder="Enter Password"
//                                 value={formData.password}
//                                 className="bg-gray-100 rounded-md text-gray-900 w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <span
//                                 className="absolute right-3 top-9 cursor-pointer"
//                                 onClick={() => setShowPassword((prev) => !prev)}
//                             >
//                                 {showPassword ?
//                                     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
//                                     (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
//                             </span>
//                         </label>
//                         <label className="w-full relative">
//                             <p className="text-lg text-gray-700 mb-1 leading-5">Confirm Password<sup className="text-red-500">*</sup></p>
//                             <input
//                                 required
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 name="confirmPassword"
//                                 onChange={changeHandler}
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 className="bg-gray-100 rounded-md text-gray-900 w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <span
//                                 className="absolute right-3 top-9 cursor-pointer"
//                                 onClick={() => setShowConfirmPassword((prev) => !prev)}
//                             >
//                                 {showConfirmPassword ?
//                                     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
//                                     (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
//                             </span>
//                         </label>
//                     </div>
//                     {error && <p className="text-red-500 mt-4">{error}</p>}
//                     <div className="mt-4">
//                         <span className="text-gray-700">
//                             Already have an account?{" "}
//                             <Link to="/login" className="text-blue-600 hover:underline">Login Here</Link>
//                         </span>
//                     </div>
//                     <button className="w-full bg-blue-600 text-white rounded-md font-medium px-4 py-3 mt-6 hover:bg-blue-700 transition duration-200">
//                         Create Account
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;
























import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/signup', {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                localStorage.setItem('token', response.data.accessToken);
                console.log(response);
                navigate('/home');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Signup failed:', error);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-center items-center w-full gap-y-4 py-10 bg-blue-50">
                <h3 className="text-3xl font-semibold text-gray-900">Sign Up</h3>
                <form onSubmit={handleSubmit} className="w-11/12 max-w-[450px] bg-white rounded-lg shadow-lg px-10 py-10">
                    {/* Full Name */}
                    <div className="flex flex-col gap-4 mt-4">
                        <label className="w-full">
                            <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                                Name<sup className="text-red-600">*</sup>
                            </p>
                            <input
                                required
                                type="text"
                                name="fullName"
                                onChange={changeHandler}
                                placeholder="Enter Your Name"
                                value={formData.fullName}
                                className="bg-gray-100 rounded-md text-gray-900 w-full p-[12px] border border-gray-300"
                            />
                        </label>
                    </div>
                    {/* Email */}
                    <div className="mt-4">
                        <label className="w-full">
                            <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">Email Address<sup className="text-red-600">*</sup></p>
                            <input
                                required
                                type="email"
                                name="email"
                                onChange={changeHandler}
                                placeholder="Enter Email Address"
                                value={formData.email}
                                className="bg-gray-100 rounded-md text-gray-900 w-full p-[12px] border border-gray-300"
                            />
                        </label>
                    </div>
                    {/* Password and Confirm Password */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">Create Password<sup className="text-red-600">*</sup></p>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={changeHandler}
                                placeholder="Enter Password"
                                value={formData.password}
                                className="bg-gray-100 rounded-md text-gray-900 w-full p-[12px] border border-gray-300"
                            />
                            <span
                                className="absolute right-3 top-[38px] cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ?
                                    (<AiOutlineEyeInvisible fontSize={24} fill="#6B7280" />) :
                                    (<AiOutlineEye fontSize={24} fill="#6B7280" />)}
                            </span>
                        </label>

                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-red-600">*</sup></p>
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                onChange={changeHandler}
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                className="bg-gray-100 rounded-md text-gray-900 w-full p-[12px] border border-gray-300"
                            />
                            <span
                                className="absolute right-3 top-[38px] cursor-pointer"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {showConfirmPassword ?
                                    (<AiOutlineEyeInvisible fontSize={24} fill="#6B7280" />) :
                                    (<AiOutlineEye fontSize={24} fill="#6B7280" />)}
                            </span>
                        </label>
                    </div>
                    {/* Error Message */}
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                    {/* Already Registered */}
                    <span className="block mt-4 text-gray-700">
                        Already registered? {" "}
                        <Link to="/login" className="text-blue-600">Login Here</Link>
                    </span>
                    {/* Submit Button */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium px-[12px] py-[8px] mt-6">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
