import express from "express";
import cors from "cors";
import generateImageRoute from "./generateimage";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", generateImageRoute);

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World! This is TypeScript");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
