import { useEffect, useState } from "react";
import axios from "axios";
import BannerForm from "./BannerForm";
import BannerPreview from "./BannerPreview";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setTimer(response.data.timer);
        setLink(response.data.link);
        setIsVisible(response.data.isVisible);
      })
      .catch(() => {
        toast.error("Error fetching banner data", {
          position: "bottom-right",
        });
      });
  }, []);

  const handleSubmit = () => {
    if (!title || !description || timer <= 0) {
      toast.error("Please fill all fields correctly", {
        position: "bottom-right",
      });
      return;
    }

    axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        title,
        description,
        timer,
        link,
        isVisible,
      })
      .then(() => {
        toast.success("Banner updated successfully", {
          position: "bottom-right",
        });
      })
      .catch(() => {
        toast.error("Error updating banner", {
          position: "bottom-right",
        });
      });
  };

  return (
    <div className="p-4 ">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <BannerForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          timer={timer}
          setTimer={setTimer}
          link={link}
          setLink={setLink}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          handleSubmit={handleSubmit}
        />
        <BannerPreview
          title={title}
          description={description}
          timer={timer}
          link={link}
          isVisible={isVisible}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
