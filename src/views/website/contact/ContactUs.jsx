import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Banner from '../../../components/shared/Banner';
import Textinput from '../../../components/ui/Textinput';
import Textarea from '../../../components/ui/Textarea';
import Button from '../../../components/ui/Button';

function ContactUs() {
  // Validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be numeric')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      console.log(data); // Replace with your API call
      toast.success('Message sent successfully!');
      reset(); // Reset form fields after successful submission
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[url('assets/images/contact-us/contact-page-banner.png')] bg-cover bg-center h-[450px] relative">
        <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:px-20">
          <div className="w-full lg:w-[50%] 2xl:w-[35%]">
            <h3 className="text-2xl sm:text-2xl lg:text-4xl font-extrabold leading-[50px]">
              Do you need support? <br className="sm:block hidden" /> Our team is ready to help
            </h3>
            <p className="text-gray-500 leading-[30px]">
              We are passionate about building carefully thought-out <br className="sm:block hidden" /> products
              that will improve your design workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="2xl:px-20">
        <div className="container h-[750px] md:h-[550px] relative 2xl:px-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[70px] p-8 sm:p-16 shadow-lg w-full z-10 bg-white grid gap-10 grid-cols-1 sm:grid-cols-12">
            {/* Information Section */}
            <div className="sm:col-span-12 lg:col-span-7">
              <h3 className="sm:text-lg lg:text-xl font-extrabold leading-[50px] mb-6">
                Support is our main priority
              </h3>
              <p className="text-gray-500 leading-[32px] truncate line-clamp-3 md:line-clamp-none">
                We created reusable react components and modern 
              </p>
              <div className="images flex items-center gap-2 mt-6">
                <img
                  src="assets/images/contact-us/person.webp"
                  alt="person img"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
                <img
                  src="assets/images/contact-us/person.webp"
                  alt="person img"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
                <img
                  src="assets/images/contact-us/person.webp"
                  alt="person img"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="sm:col-span-12 lg:col-span-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <Textinput
                    label="Full Name"
                    placeholder="Enter your full name"
                    className='border w-full px-2'
                    error={errors.fullName?.message}
                    {...register}
                  />
                </div>
                <div className="mb-4">
                  <Textinput
                    label="Email Address"
                    placeholder="Enter your email"
                    className='border w-full px-2'
                    error={errors.email?.message}
                    {...register}
                  />
                </div>
                <div className="mb-4">
                  <Textinput
                    label="Phone"
                    placeholder="Enter your phone number"
                    className='border w-full px-2'
                    error={errors.phone?.message}
                    {...register}
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    label="Your Message"
                    placeholder="Type your message here..."
                    className='border w-full px-2'
                    error={errors.message?.message}
                    {...register}
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    text="Send Message"
                    className="mt-4 bg-theme hover:bg-primary-600 text-white px-6 py-2 rounded-md transition duration-300 w-full"
                    icon="heroicons-outline:paper-airplane"
                    type='submit'

                    iconPosition="left"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='my-20'>
          <Banner
            title="Make your online shop easier with our mobile app"
            subtitle="BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food."
            appStoreLinks={[
              "assets/images/other/app-store.png",
              "assets/images/other/play-store.png",
            ]}
            extraImage="assets/images/banner/banner-img.png"
            heightClass="h-[388px] 2xl:h-[450px] overflow-hidden"
            containerClass="flex flex-col items-center justify-center md:items-start text-center md:text-left md:block 2xl:w-1/2 overflow-hidden"
            titleClass="text-2xl sm:text-2xl 2xl:text-[42px] font-bold mb-3 2xl:leading-[3rem]"
            subtitleClass="text-[14px] 2xl:text-[17px] text-gray-500 mb-8 md:w-10/12 xl:leading-8"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
