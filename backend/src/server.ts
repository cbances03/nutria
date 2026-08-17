import express from "express";
import taskRoutes from "./routes/task.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend ejecutándose en http://localhost:${PORT}`);
});