import React, { useState } from "react";

const BannerForm = ({
  title,
  setTitle,
  description,
  setDescription,
  timer,
  setTimer,
  link,
  setLink,
  isVisible,
  setIsVisible,
  handleSubmit,
}) => {
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    timer: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", description: "", timer: "" };

    if (!title.trim()) {
      newErrors.title = "Title cannot be empty";
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = "Description cannot be empty";
      isValid = false;
    }
    if (timer <= 0) {
      newErrors.timer = "Timer must be a positive number greater than 0";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (validate()) {
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 mr-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Banner Title"
        className={`w-full mb-4 p-2 border ${errors.title ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Banner Description"
        className={`w-full mb-4 p-2 border ${errors.description ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.description && <p className="text-red-500 mb-4">{errors.description}</p>}
      
      <input
        type="number"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
        placeholder="Timer (seconds)"
        className={`w-full mb-4 p-2 border ${errors.timer ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.timer && <p className="text-red-500 mb-4">{errors.timer}</p>}
      
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Banner Link"
        className="w-full mb-4 p-2 border border-gray-300"
      />
      
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
          className="mr-2"
        />
        Banner Visible
      </label>
      
      <button
        onClick={handleFormSubmit}
        className="mt-4 p-2 rounded bg-blue-500 text-white"
      >
        Update
      </button>
    </div>
  );
};

export default BannerForm;
