require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn.js");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const cloudinary = require("cloudinary");

const webhookRoute = require("./routes/stripeWebhooks.js");
app.use("/stripe", webhookRoute);

app.use(cookieParser());

app.use(express.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// app.use(express.static(path.join(__dirname, "public")));

app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file limit
  }),
);

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://upstatekosherrentals.com",
    "https://www.upstatekosherrentals.com",
    "http://localhost:5173",
    "https://ukr-react.vercel.app",
  ],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ limit: "10mb", extended: true }));




app.use("/api/listing", require("./routes/api/listing.js")); 
app.use("/api/checkout", require("./routes/stripe.js"));


const PORT = process.env.PORT || 3000;





connectDB();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
