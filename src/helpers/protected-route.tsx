import { Navigate } from "react-router-dom";

import { ProtectedRouteProps } from "../types/route.type";
import { LocalStorageService } from "./local.storage.service.helper";

function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
  const localstorageService = new LocalStorageService();

  const isAuthenticated = localstorageService.get_access_token();

  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default ProtectedRoute;
