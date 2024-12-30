import { yupResolver } from '@hookform/resolvers/yup';
import Fileinput from '../../components/ui/FileInput';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import * as Yup from 'yup';
import axiosInstance from '../../configs/axios.config';
import Textinput from '../../components/ui/Textinput';
import SubmitButton from '../../components/ui/SubmitButton';
import Checkbox from '../../components/ui/Checkbox';

const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[a-z])/, 'Must contain one lowercase character')
        .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase character')
        .matches(/^(?=.*[0-9])/, 'Must contain one number')
        .matches(/^(?=.*[!@#$%^&*])/, 'Must contain one special character')
        .min(8, 'Password must be at least 8 characters long'),
    image: Yup.mixed().required('Profile image is required'),
});

function SignUp() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(signupSchema),
        mode: 'all',
    });

    const onFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setValue('image', file); // Update form value
    };

    const onSubmit = async (formData) => {
        try {
            const formDataObj = new FormData();
            formDataObj.append('name', formData.name);
            formDataObj.append('email', formData.email);
            formDataObj.append('password', formData.password);
            formDataObj.append('image', formData.image); // Add image to the request

            const { data: response } = await axiosInstance.post('/user/auth/signup', formDataObj, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (!response.error) {
                navigate(`/verify?token=${response.token}`);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 md:w-[90%] xl:w-[80%] mx-auto my-10 border rounded-lg bg-white shadow-lg">
                    {/* Left Image Section */}
                    <div className="hidden lg:block col-span-7">
                        <img
                            src="assets/images/sign-up/registration.webp"
                            alt="Signup Illustration"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="col-span-12 lg:col-span-5 flex items-center justify-center p-8">
                        <div className="w-full">
                            <div className="text-center mb-6">
                                <img src="assets/images/logo/logo.svg" alt="Logo" className="mx-auto mb-4 w-24" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign Up for Free!</h3>
                                <p className="text-sm text-gray-500">
                                    Already registered?{' '}
                                    <Link to="/signin" className="text-theme font-semibold hover:underline">
                                        Sign In Now
                                    </Link>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* File Input for Image */}
                                <Fileinput
                                    name="image"
                                    id="image"
                                    onChange={onFileChange}
                                    selectedFile={selectedFile}
                                    preview
                                    placeholder="Choose a profile image"
                                    label="Upload"
                                    className="custom-class"
                                />
                                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                                <Textinput
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    register={register}
                                    error={errors.name}
                                    className="w-full"
                                />

                                <Textinput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    register={register}
                                    error={errors.email}
                                    className="w-full"
                                />

                                <Textinput
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    register={register}
                                    error={errors.password}
                                    className="w-full"
                                    hasicon
                                />
                                <Checkbox
                                    label="I agree to the Privacy and Policy"
                                    checked={false}
                                    onChange={(e) => setValue('isChecked', e.target.checked)}
                                    className="flex items-center"
                                />

                                <SubmitButton
                                    label="Register"
                                    isSubmitting={isSubmitting}
                                    className="w-full h-12 rounded-md bg-theme text-white hover:bg-theme-dark transition-all"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
