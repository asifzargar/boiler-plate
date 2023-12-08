import TestPage from "../pages/TestFolder/TestPage";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
};

export { AppRouter };
