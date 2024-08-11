const BannerPreview = ({ title, description, timer, link, isVisible }) => {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };
    return(
     <div className="bg-gray-800 text-white py-16 px-8 font-sans rounded-lg shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4">
                {title }
              </h2>
              <p className="text-base text-gray-300">
                {description }
              </p>
            </div>
    
            <div className="md:w-1/2 flex justify-center items-center space-x-4">
              {link && (
                <a
                  href={link}
                  className="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold rounded hover:bg-yellow-500 transition duration-300 ease-in-out"
                >
                  Click
                </a>
              )}
              <div className="flex items-start justify-center gap-1.5">
                <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                  <h3 className="font-manrope font-semibold text-2xl text-white text-center">
                    {formatTime(timer)}
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
}

  export default BannerPreview