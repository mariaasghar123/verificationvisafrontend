const BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.MODE === "development" 
    ? "http://localhost:5000" 
    : "https://verificationvisa.onrender.com");

 export default BASE_URL;