import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../api/baseUrl";

export default function AdminUploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    referenceNumber: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "files") {
      const selectedFiles = Array.from(files);
      console.log("Selected files:", selectedFiles.map(f => ({ name: f.name, size: f.size, type: f.type }))); // Debug log
      const maxSizeInMB = 50;
      for (let file of selectedFiles) {
        const fileSizeInMB = file.size / ( 1024 * 1024 );
        if (fileSizeInMB > maxSizeInMB) {
          alert(`File ${file.name} size must be less than 50MB`);
          return;
        }
      }
      setFormData({ ...formData, files: selectedFiles });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.files.length === 0) {
      alert("Please select at least one file to upload");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("passportNumber", formData.passportNumber);
    data.append("referenceNumber", formData.referenceNumber);
    formData.files.forEach((file, index) => {
      data.append("files", file);
      console.log(`Appending file ${index + 1}: ${file.name}`); // Debug log
    });

    try {
      const response = await axios.post(`${BASE_URL}/api/admin/upload`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload response:", response.data); // Debug log
      alert("Document uploaded successfully!");
      setFormData({
        name: "",
        passportNumber: "",
        referenceNumber: "",
        files: [],
      });
      document.querySelector('input[type="file"]').value = "";
    } catch (err) {
      // console.error("Upload error:", err.response?.data || err); // Debug log
      alert("Upload failed: " + (err.response?.data?.error || "Please try again."));
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
          name="files"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleChange}
          multiple
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