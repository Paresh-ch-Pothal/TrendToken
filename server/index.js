const express=require('express');   
const app=express();
const cors=require('cors');
const connectDB=require("./connection") // Importing the database connection
require("dotenv").config();
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
