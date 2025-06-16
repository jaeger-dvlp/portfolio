import { Axios } from 'axios';
import API from '../configs/api.config';

class ApiHelper {
  private readonly API: Axios;
  public userName: string;

  constructor(userName: string) {
    this.API = API;
    this.userName = userName;
  }

  public async getRepos() {
    try {
      const { data } = await this.API.get(
        `/users/${this.userName}/repos?per_page=100&sort=created&direction=desc`,
      );

      return { data, error: null };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { data: [], error: error.message };
      }
      return { data: [], error: 'An error occured.' };
    }
  }
}

export default ApiHelper;
