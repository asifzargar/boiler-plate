import environment from "../environments/environment.json";
const BaseUrl = environment.BASE_ADMIN_API_URL;
console.log(BaseUrl);

const ApiEndpointsConfig = {
  BASE_URL: BaseUrl,
  LOGIN_URL: `${BaseUrl}/api/v1/auth/login`,
  USER_URL: `/api/v1/users`
};

export { ApiEndpointsConfig };
