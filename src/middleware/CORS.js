// CORS middleware
const CORSMiddleware = {
  origin: (origin, callback) => {
    if (origin && origin.includes(process.env.ALLOW_URL)) {
      // Allow the request
      callback(null, true);
    } else {
      // Disallow the request
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
};

module.exports = CORSMiddleware;
