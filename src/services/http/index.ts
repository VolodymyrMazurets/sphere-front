import { AccountResponseType } from "./types";
import axios from "axios";

export const BASE_URL =
  "https://collabotics-framework-api.azurewebsites.net/api";

export const urls = {
  accounts: `${BASE_URL}/accounts/`,
};

class HttpService {
  private getData = async <T>(url: string) => {
    try {
      const { data } = await axios.get<T>(url);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  getAccount = () => {
    return this.getData<AccountResponseType>(urls.accounts);
  };
}

export const httpService = new HttpService();
