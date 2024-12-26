import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import axios from 'axios';

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', values);
        console.log('Form submitted successfully:', response.data);
        alert('Form submitted successfully!');
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Header />
      <div className="container">
        <div className='w-full grid grid-cols-12 md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] my-16 mx-auto lg:border rounded-lg '>
          <div className="col-span-7 hidden lg:block">
            <img src="assets/images/sign-in/login.webp" alt="login img" className='w-full h-full object-cover' />
          </div>

          <div className="flex lg:block justify-center col-span-12 lg:col-span-5">
            <div className='p-10 border lg:boe'>
              <div className='flex justify-center mb-3'>
                <img src="assets/images/logo/logo.svg" alt="" />
              </div>
              <div className='text-center'>
                <h3 className='font-bold text-2xl mb-3'>
                  Welcome Back!
                </h3>
                <p className='text-[15px] text-gray-500'>Don’t have an account?<Link to="/signup"><span className='text-theme font-bold'> Create Account</span></Link></p>
              </div>
              <form onSubmit={formik.handleSubmit} className='my-6'>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-500 font-semibold mb-2 text-sm dark:text-white">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="border h-[45px] w-full px-3 focus:outline-[#02b290] border-gray-300 text-sm rounded-md"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-500 font-semibold">Password</label>
                    <div className="relative">
                      <input
                        id="password"
                        type={passwordVisible ? "text" : "password"}
                        className="h-[48px] ps-4 pe-10 block w-full border border-gray-300 focus:outline-[#02b290] text-sm rounded-md"
                        {...formik.getFieldProps('password')}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none"
                      >
                        {passwordVisible ? (
                          <Icon icon="mdi:eye" className="shrink-0" width={24} height={24} />
                        ) : (
                          <Icon icon="mdi:eye-off" className="shrink-0" width={24} height={24} />
                        )}
                      </button>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className='theme-btn w-full h-[48px] rounded-md mb-4 mt-6'
                >
                  {formik.isSubmitting ? 'Submitting...' : 'Sign In'}
                </button>
              </form>
              <div className='text-center'>
                <span className='text-gray-500'>or continue with</span>
                <div className='flex items-center justify-center gap-4 mt-4'>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                    <Icon icon="mdi:facebook" width="20" height="20" className='text-gray-500' />
                  </div>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                    <Icon icon="mingcute:twitter-fill" width="20" height="20" className='text-gray-500' />
                  </div>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center border'>
                    <Icon icon="ri:linkedin-fill" width="20" height="20" className='text-gray-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
