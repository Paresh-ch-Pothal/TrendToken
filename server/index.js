const express=require('express');   
const app=express();
const cors=require('cors');
const connectDB=require("./connection") // Importing the database connection
const productRoutes=require("./routes/product")
require("dotenv").config();
// Middleware
app.use(express.json());
const corsOptions = {
  origin: ["https://trendtoken.vercel.app"], // Add your frontend URL here
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/product",productRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
