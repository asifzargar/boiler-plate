import environment from "../environments/environment.json";
const BaseUrl = environment.BASE_ADMIN_API_URL;

const ApiEndpointsConfig = {
  BASE_URL: BaseUrl,
  LOGIN_URL: `/api/v1/login`,
  USER_URL: `/api/v1/users`,
};

export { ApiEndpointsConfig };
