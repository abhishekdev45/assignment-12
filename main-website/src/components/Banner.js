import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const apiUrl = process.env.REACT_APP_BACKEND_URL

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setBanner(response.data);
        setCountdown(response.data.timer);
      })
      .catch(() => {
        toast.error("Error fetching banner data", {
          position: "bottom-right",
        });
      });

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!banner || countdown === 0 || !banner.isVisible) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-800 text-white py-16 px-8 font-sans rounded-lg shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            {banner.title || "Unlock Your Potential"}
          </h2>
          <p className="text-base text-gray-300">
            {banner.description || "Upgrade your skills with our premium courses. Enroll now and access exclusive content!"}
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center space-x-4">
          {banner.link && (
            <a
              href={banner.link}
              className="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold rounded hover:bg-yellow-500 transition duration-300 ease-in-out"
            >
              Click me
            </a>
          )}
          <div className="flex items-start justify-center gap-1.5">
            <div className="rounded-xl bg-white/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                {formatTime(countdown)}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Banner;
