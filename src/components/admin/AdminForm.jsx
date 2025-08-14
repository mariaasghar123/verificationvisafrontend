import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../api/baseUrl";
import ClipLoader from "react-spinners/ClipLoader"; // Loader import

export default function AdminUploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    referenceNumber: "",
    files: [],
  });
  const [progress, setProgress] = useState(0); // Progress %
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "files") {
      const selectedFiles = Array.from(files);
      const maxSizeInMB = 500;
      for (let file of selectedFiles) {
        const fileSizeInMB = file.size / (1024 * 1024);
        if (fileSizeInMB > maxSizeInMB) {
          alert(`File ${file.name} size must be less than 500MB`);
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

    setLoading(true);
    setProgress(0);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("passportNumber", formData.passportNumber);
    data.append("referenceNumber", formData.referenceNumber);
    formData.files.forEach((file) => {
      data.append("files", file);
    });

    try {
      const response = await axios.post(`${BASE_URL}/api/admin/upload`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          if (event.total) {
            const percent = Math.round((event.loaded * 100) / event.total);
            setProgress(percent);
          }
        },
      });

      alert("Document uploaded successfully!");
      setFormData({
        name: "",
        passportNumber: "",
        referenceNumber: "",
        files: [],
      });
      document.querySelector('input[type="file"]').value = "";
    } catch (err) {
      alert("Upload failed: " + (err.response?.data?.error || "Please try again."));
    } finally {
      setLoading(false);
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
          placeholder="Date of Birth"
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

        {loading && (
          <div className="flex flex-col items-center space-y-2 mb-3">
            <ClipLoader color="#2563eb" loading={loading} size={40} />
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p>{progress}% Uploaded</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}





// import React, { useState } from "react";
// import axios from "axios";
// import BASE_URL from "../../api/baseUrl";

// export default function AdminUploadForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     passportNumber: "",
//     referenceNumber: "",
//     files: [],
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "files") {
//       const selectedFiles = Array.from(files);
//       const maxSizeInMB = 50;
//       for (let file of selectedFiles) {
//         const fileSizeInMB = file.size / (1024 * 1024);
//         if (fileSizeInMB > maxSizeInMB) {
//           alert(`File ${file.name} size must be less than 50MB`);
//           return;
//         }
//       }
//       setFormData({ ...formData, files: selectedFiles });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (formData.files.length === 0) {
//   //     alert("Please select at least one file to upload");
//   //     return;
//   //   }

//   //   try {
//   //     // ✅ STEP 1: Upload to Cloudinary directly
//   //     const fileUrls = [];
//   //     for (let file of formData.files) {
//   //       const data = new FormData();
//   //       data.append("file", file);
//   //       data.append("upload_preset", "unsigned_uploads");

//   //       // data.append("upload_preset", "YOUR_UNSIGNED_UPLOAD_PRESET"); // 🔹 Add your preset name here
//   //       data.append("resource_type", "auto"); // handles pdf, images, videos

//   //       const uploadRes = await fetch(
//   //         `https://api.cloudinary.com/v1_1/dr7dpuw0e/auto/upload`, // 🔹 Replace YOUR_CLOUD_NAME
//   //         {
//   //           method: "POST",
//   //           body: data,
//   //         }
//   //       );

//   //       const uploadData = await uploadRes.json();
//   //       fileUrls.push(uploadData.secure_url);
//   //     }

//   //     // ✅ STEP 2: Send only URLs to backend
//   //     const payload = {
//   //       name: formData.name,
//   //       passportNumber: formData.passportNumber,
//   //       referenceNumber: formData.referenceNumber,
//   //       fileUrls,
//   //     };

//   //     // const response = await axios.post(`${BASE_URL}/api/admin/upload`, payload);
//   //     alert("Document uploaded successfully!");
      
//   //     // Reset form
//   //     setFormData({
//   //       name: "",
//   //       passportNumber: "",
//   //       referenceNumber: "",
//   //       files: [],
//   //     });
//   //     document.querySelector('input[type="file"]').value = "";
//   //   } catch (err) {
//   //     alert("Upload failed: " + (err.response?.data?.error || "Please try again."));
//   //   }
//   // };



//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (formData.files.length === 0) {
//     alert("Please select at least one file to upload");
//     return;
//   }

//   try {
//     const fileUrls = [];

//     for (let file of formData.files) {
//       const data = new FormData();
//       data.append("file", file);
//       data.append("upload_preset", "unsigned_uploads");
//       data.append("resource_type", "auto"); // handles pdf, images, videos

//       const uploadRes = await fetch(
//         "https://api.cloudinary.com/v1_1/dr7dpuw0e/auto/upload", // Your Cloudinary URL
//         { method: "POST", body: data }
//       );

//       const uploadData = await uploadRes.json();

//       if (!uploadData.secure_url) {
//         throw new Error("Cloudinary upload failed for file: " + file.name);
//       }

//       fileUrls.push(uploadData.secure_url);
//     }
//     // ✅ Send metadata + Cloudinary URLs to backend
//     const payload = {
//       name: formData.name,
//       passportNumber: formData.passportNumber,
//       referenceNumber: formData.referenceNumber,
//       fileUrls, // array of Cloudinary URLs
//     };
//     await axios.post("https://verificationvisa.onrender.com/api/admin/upload", payload);

//     // ✅ All files uploaded successfully, show URLs or success message
//     alert("All files uploaded successfully!");
//     console.log("Uploaded file URLs:", fileUrls);

//     // Reset form
//     setFormData({
//       name: "",
//       passportNumber: "",
//       referenceNumber: "",
//       files: [],
//     });
//     document.querySelector('input[type="file"]').value = "";

//   } catch (err) {
//     alert("Upload failed: " + err.message);
//   }
// };

//   return (
//     <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
//       <h2 className="text-xl font-semibold text-center">Admin Document Upload</h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           name="name"
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />
//         <input
//           name="passportNumber"
//           type="text"
//           placeholder="Passport Number"
//           value={formData.passportNumber}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />
//         <input
//           name="referenceNumber"
//           type="text"
//           placeholder="Date of Birth"
//           value={formData.referenceNumber}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />
//         <input
//           name="files"
//           type="file"
//           accept=".pdf,.jpg,.jpeg,.png,.mp4"
//           onChange={handleChange}
//           multiple
//           className="w-full mb-3"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
//         >
//           Upload
//         </button>
//       </form>
//     </div>
//   );
// }























