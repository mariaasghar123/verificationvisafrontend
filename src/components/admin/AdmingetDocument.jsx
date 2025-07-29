import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../api/baseUrl";

export default function AdminDocumentList() {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = () => {
    axios
      .get(`${BASE_URL}/api/admin`)
      .then((res) => {
        console.log("Fetched documents:", res.data); // Debug log
        setDocuments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching documents:", err);
      });
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      axios
        .delete(`${BASE_URL}/api/admin/delete/${id}`)
        .then((res) => {
          alert("Deleted successfully");
          fetchDocuments();
        })
        .catch((err) => {
          console.error("Error deleting document:", err);
        });
    }
  };

  //const isPdf = (url) => url.toLowerCase().endsWith(".pdf");
  const isPdf = (url) => typeof url === "string" && url.toLowerCase().endsWith(".pdf");


  // Normalize file URLs
  // This function ensures that the file URLs are in the correct format
  const normalizeFiles = (file) => {
    if (!file) return [];
    if (typeof file === "string") return [file];
    if (Array.isArray(file)) return file;
    return [];
  };

  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Uploaded Documents</h2>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Passport #</th>
            <th className="border px-2 py-1">Reference #</th>
            <th className="border px-2 py-1">Files</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{doc.name}</td>
              <td className="border px-2 py-1">{doc.passportNumber}</td>
              <td className="border px-2 py-1">{doc.referenceNumber}</td>
              <td className="border px-2 py-1">
                {normalizeFiles(doc.file).length > 0 ? (
                  normalizeFiles(doc.file).map((fileUrl, idx) => (
                    <div key={idx} className="mb-2">
                      <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                        View File {idx + 1} ({isPdf(fileUrl) ? "PDF" : "Image"})
                      </a>
                      {isPdf(fileUrl) && (
                        <iframe
                          src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                          title={`PDF ${idx + 1}`}
                          width="100%"
                          height="200px"
                          style={{ border: "1px solid #ccc" }}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <span>No files</span>
                )}
              </td>
              <td className="border px-2 py-1">
                <button
                  className="bg-danger border-0 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(doc._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}