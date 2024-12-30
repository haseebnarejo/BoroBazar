import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axiosInstance from '../../configs/axios.config';
import { setAuth } from '../../store/slice/auth';
import Textinput from '../../components/ui/Textinput';

function SignIn() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // Validation Schema
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'all',
    });

    const onSubmit = async (data) => {
        try {
            const { data: res } = await axiosInstance.post('/user/auth/login', data);
            if (!res.error) {
                // dispatch(setAuth({ user: res.data, token: res.token, userType: 1 }));
                navigate('/dashboard');
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container">
                <div className="grid grid-cols-12 md:w-[95%] lg:w-[80%] xl:w-[70%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Left Image Section */}
                    <div className="col-span-7 hidden lg:block" >
                        <img
                            src="assets/images/sign-in/login.webp"
                            alt="login img"
                            className="w-full h-full object-cover"
                            
                        />
                    </div>

                    {/* Right Form Section */}
                    <div className="col-span-12 lg:col-span-5 flex justify-center p-8">
                        <div className="w-full">
                            <div className="flex justify-center mb-4" >
                                <img src="assets/images/logo/logo.svg" alt="Logo" className="h-10" onClick={()=>navigate('/')} />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">Welcome Back!</h3>
                                <p className="text-gray-600 text-sm">
                                    Don’t have an account?{' '}
                                    <Link to="/signup" className="text-theme font-bold">
                                        Create Account
                                    </Link>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Email Input */}
                                <div className="mb-5">
                                    <Textinput
                                        type="email"
                                        label="Email Address"
                                        placeholder="Enter your email"
                                        register={register}
                                        name="email"
                                        error={errors.email}
                                        onChange={(e) => setValue('email', e.target.value)}
                                        isRequired
                                        className="w-full"
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="mb-5">
                                    <Textinput
                                        placeholder="Enter Your Password"
                                        label="Password"
                                        type="password"
                                        name={'password'}
                                        register={register}
                                        error={errors.password}
                                        onChange={(e) => setValue('password', e.target.value)}
                                        isRequired
                                        hasicon
                                        className="w-full"
                                    />
                                </div>

                                {/* Remember Me and Forgot Password */}
                                <div className="flex items-center justify-between mb-4">
                                    <label className="flex items-center text-sm">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-theme border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-gray-700">Remember me</span>
                                    </label>
                                    <Link to="/forgot-password" className="text-sm text-theme font-semibold">
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Sign In Button */}
                                <button
                                    className="bg-theme text-white w-full h-[48px] rounded-md font-semibold hover:bg-theme-dark transition duration-300"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                                </button>

                                {/* Social Sign In */}
                                <div className="text-center mt-6">
                                    <span className="text-gray-500 text-sm">or continue with</span>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-100 hover:bg-gray-200 transition">
                                            <Icon icon="mdi:facebook" width="20" height="20" className="text-gray-500" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-100 hover:bg-gray-200 transition">
                                            <Icon
                                                icon="mingcute:twitter-fill"
                                                width="20"
                                                height="20"
                                                className="text-gray-500"
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-100 hover:bg-gray-200 transition">
                                            <Icon
                                                icon="ri:linkedin-fill"
                                                width="20"
                                                height="20"
                                                className="text-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
