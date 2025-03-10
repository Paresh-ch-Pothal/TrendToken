const express = require('express');   
const cors = require('cors');
const connectDB = require("./connection"); // Importing the database connection
const productRoutes = require("./routes/product");
require("dotenv").config();

const app = express();

// ✅ Fix: Move CORS middleware to the top
app.use(cors({
  origin: ['http://localhost:5173', 'https://trend-token.vercel.app'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // Allow cookies if needed
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB().catch(err => {
  console.error("MongoDB connection failed:", err);
  process.exit(1); // Exit process if DB connection fails
});

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Routes
app.use("/product", productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
