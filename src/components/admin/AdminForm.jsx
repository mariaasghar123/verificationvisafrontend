import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../api/baseUrl";

export default function AdminUploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    referenceNumber: "",
    file: null,
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "file") {
    const file = files[0];

    if (file) {
      const maxSizeInMB = 2; // Max allowed size (e.g. 2MB)
      const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB

      if (fileSizeInMB > maxSizeInMB) {
        alert("File size must be less than 2MB");
        return; // Stop further execution
      }

      setFormData({ ...formData, file: file });
    }
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("passportNumber", formData.passportNumber);
    data.append("referenceNumber", formData.referenceNumber);
    data.append("file", formData.file);

    try {
      await axios.post(`${BASE_URL}/api/admin/upload`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Document uploaded successfully!");
      // Optional: Reset the form
      setFormData({
        name: "",
        passportNumber: "",
        referenceNumber: "",
        file: null,
      });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center">Admin Document Upload</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          name="passportNumber"
          type="text"
          placeholder="Passport Number"
          value={formData.passportNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          name="referenceNumber"
          type="text"
          placeholder="Reference Number"
          value={formData.referenceNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          name="file"
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleChange}
          className="w-full mb-3"
          
        />
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
