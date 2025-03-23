import { Route, Routes } from "react-router";
import useTiltlePage from "../hooks/useTitlePage";

const AppRoutes = () => {
  useTiltlePage();

  return (
    <Routes>
      <Route index path="/" element={<h1>Know me!!</h1>} />
      <Route path="/about" element={<h1>About me!!</h1>} />
      <Route path="/projects" element={<h1>Projects!!</h1>} />
      <Route path="*" element={<h1>Ruta no encontrada!!</h1>} />
    </Routes>
  );
};

export default AppRoutes;
