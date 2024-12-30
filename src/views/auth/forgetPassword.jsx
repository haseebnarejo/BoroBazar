import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axiosInstance from '../../configs/axios.config';
import Textinput from '../../components/ui/Textinput';
import SubmitButton from '../../components/ui/SubmitButton';

const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

function ForgetPassword() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
    mode: 'all',
  });

  const onSubmit = async (formData) => {
    try {
      const { data: response } = await axiosInstance.post('/user/auth/forget-password', formData);
      if (!response.error) {
        toast.success('Reset link sent to your email. Please check your inbox.');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <img src="assets/images/logo/logo.svg" alt="Logo" className="mx-auto mb-4 w-56" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Forgot Your Password?</h3>
          <p className="text-sm text-gray-500">Enter your email to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Textinput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your registered email"
            register={register}
            error={errors.email}
            className="w-full"
          />

          <SubmitButton
            label="Send Reset Link"
            isSubmitting={isSubmitting}
            className="w-full h-12 rounded-md bg-theme text-white hover:bg-theme-dark transition-all"
          />
        </form>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className="text-sm text-theme hover:underline"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
