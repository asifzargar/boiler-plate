import environment from "../environments/environment.json";
const BaseUrl = environment.BASE_ADMIN_API_URL;

const ApiEndpointsConfig = {
  BASE_URL: BaseUrl,
};

const Job = `api/v1/job`;

export { Job, ApiEndpointsConfig };
