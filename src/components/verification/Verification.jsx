import React, { useState } from "react";

export default function Verify() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/user/verify-document`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ referenceNumber, passportNumber }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Verify result:", data); // Debug log
        setResult(data);
        setError("");
      } else {
        const res = await response.json();
        console.error("Verify error:", res); // Debug log
        setResult(null);
        setError(res.message || "No document found.");
      }
    } catch (err) {
      console.error("Server error:", err); // Debug log
      setError("Server error. Please try again later.");
    }
  };

  const isPdf = (url) => url.toLowerCase().endsWith(".pdf");

  const normalizeFiles = (file) => {
    if (!file) return [];
    if (typeof file === "string") return [file];
    if (Array.isArray(file)) return file;
    return [];
  };

  return (
    <div>
      <div className="w-100 h-50 bg-body-secondary mx-auto ps-5 mt-5 pt-5">
        <h2 className="underline">Enquire Verification:</h2>
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Date of Birth</label>
            <input
              type="text"
              className="form-control"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Passport Number</label>
            <input
              type="text"
              className="form-control"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn text-white mb-5"
            style={{ backgroundColor: "#001f3f" }}
          >
            Verification
          </button>
        </form>

        {result && (
          <div className="alert alert-success">
            <h5>✅ Document Found:</h5>
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Date of Birth:</strong> {result.referenceNumber}
            </p>
            <p>
              <strong>Passport:</strong> {result.passportNumber}
            </p>
            <p>
              <strong>Uploaded Files:</strong>
            </p>
            {normalizeFiles(result.file).length > 0 ? (
              normalizeFiles(result.file).map((fileUrl, idx) => (
                <div key={idx} className="mb-3">
                  {isPdf(fileUrl) ? (
                    <div>
                      <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                        View PDF {idx + 1}
                      </a>
                      <iframe
                        src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={`PDF ${idx + 1}`}
                        width="100%"
                        height="400px"
                        style={{ border: "1px solid #ccc" }}
                      />
                    </div>
                  ) : (
                    <img
                      src={fileUrl}
                      alt={`Document ${idx + 1}`}
                      width="300"
                      className="mb-2"
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No files uploaded</p>
            )}
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}