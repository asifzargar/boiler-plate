import { apiConfiguration } from "@/api/api";
import { BaseService } from "./base.service";
import { Job } from "@/constants";

class JobService extends BaseService {
  async get_job_list(): Promise<any> {
    try {
      const data = await apiConfiguration.get(`${Job}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  //   async get_client(clientId?: string): Promise<any> {
  //     try {
  //       const { data } = await apiConfiguration.get(`${clients}/${clientId}`);
  //       return data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  async post_job(obj: any): Promise<any> {
    try {
      const { data } = await apiConfiguration.post(`${Job}`, obj);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async put_job(obj: any, job_id?: string): Promise<any> {
    try {
      const { data } = await apiConfiguration.put(`${Job}/${job_id}`, obj);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async delete_job(job_id?: number): Promise<any> {
    try {
      const { data } = await apiConfiguration.del(`${Job}/${job_id}`, {});
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export { JobService };
