/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import SubmitButton from '../ui/SubmitButton';

const OtpFrom = ({ otp, setOtp, resendOtp, handleSubmit, isSubmitting }) => {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="customOtpTemplate py-20 bg-[url(../../assets/images/main-slider/slider2/slide1.jpg)] min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center relative">
          <div className="lg:w-[572px] rounded-xl w-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
            <div className="container">
              <form className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-4">
                  <h1 className="text-[28px] md:text-[34px] font-bold leading-[74px] text-qblack">{'Verification'}</h1>

                  <div className="shape -mt-6">
                    <svg width="172" height="29" viewBox="0 0 172 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727" stroke="#FCBF49" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 text-center mb-3 text-sm md:text-base">
                  OTP have been sent to your Email. <br /> If you haven&apos;t received it, please check your spam folder.
                </p>
                <div className="input-area">
                  <div className="input-item mb-5 flex justify-center">
                    <OTPInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      inputStyle={'form-control dark:bg-gray !w-[2em] md:!w-[2.5em] h-12 p-0 text-lg dark:text-secondary-500 rounded-md'}
                      renderSeparator={<span> - </span>}
                      renderInput={(props) => <input {...props} />}
                      inputType="tel"
                      placeholder="******"
                    />
                  </div>

                  <div className="signin-area">
                    <div className="flex justify-center">
                      <SubmitButton isSubmitting={isSubmitting} type="button" onClick={handleSubmit}>
                        Verify Your Email
                      </SubmitButton>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="text-gray-400 md:text-sm text-xs">
                      Didnt Recieved your Otp ?{' '}
                      {seconds > 0 ? (
                        <span>You Can Resend OTP In {seconds} seconds</span>
                      ) : (
                        <span className="text-main font-medium">
                          Didn&apos;t receive your OTP?{' '}
                          <button
                            className="underline"
                            onClick={() => {
                              resendOtp();
                              setSeconds(59);
                            }}
                          >
                            Resend now.
                          </button>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpFrom;
