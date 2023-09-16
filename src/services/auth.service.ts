import { FormValues } from "@/types";
import { ApiEndpointsConfig } from "../constants";
import axios from "axios";
class Authenticaion {
  public async login(request: FormValues) {
    try {
      let response = await axios.post(ApiEndpointsConfig.LOGIN_URL, request);
      return response;
    } catch (error: any) {
      console.log(error);
    }
  }
}
export { Authenticaion };
