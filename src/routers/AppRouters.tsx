import ProtectedRoute from "../helpers/protected-route";
import TestPage from "../pages/TestFolder/TestPage";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "../components/shared-layout";
import { ProtectedRouteProps } from "../types/route.type";
import InventoryPage from "../pages/inventory";

const AppRouter = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/login",
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={<SharedLayout />}
          />
        }
      >
        <Route index element={<TestPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="inventory/new" element={<InventoryPage />} />
        <Route path="inventory/edit" element={<InventoryPage />} />
        <Route path="projects" element={<Navigate to="project" />} />
        <Route path="projects/project" element={<div>projects</div>} />
        <Route path="projects/work-order" element={<div>work-order</div>} />
        <Route path="projects/receipts" element={<div>receipts</div>} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
