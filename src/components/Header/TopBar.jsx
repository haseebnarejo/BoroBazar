import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function TopBar() {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Retrieve the end time from localStorage or set a new one
    const storedEndTime = localStorage.getItem("timerEndTime");
    if (storedEndTime) {
      return Math.max(0, new Date(storedEndTime) - new Date());
    }
    const newEndTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    localStorage.setItem("timerEndTime", new Date(newEndTime));
    return newEndTime - new Date().getTime();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = timeLeft - 1000;

      if (remainingTime <= 0) {
        const newEndTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Reset to 24 hours
        localStorage.setItem("timerEndTime", new Date(newEndTime));
        setTimeLeft(24 * 60 * 60 * 1000); // Reset state to 24 hours
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [timeLeft]);

  // Convert timeLeft (in milliseconds) into hours, minutes, and seconds
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-theme hidden sm:block">
      <div className="container relative text-white flex justify-center gap-5 items-center p-2">
        <div className="flex items-center">
          <span className="text-sm">
            Claim your online <span className="font-semibold">FREE Delivery or Shipping</span> today! Expires in
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="bg-white text-teal-500 rounded p-1 px-2">{String(hours).padStart(2, "0")}</div>
          <span>:</span>
          <div className="bg-white text-teal-500 rounded p-1 px-2">{String(minutes).padStart(2, "0")}</div>
          <span>:</span>
          <div className="bg-white text-teal-500 rounded p-1 px-2">{String(seconds).padStart(2, "0")}</div>
        </div>
        <Icon icon="ic:round-close" className="text-white text-2xl absolute right-0 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default TopBar;
