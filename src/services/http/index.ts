import {
  AllInfluencerListsResponseType,
  CreateListPayloadType,
  ListDetailsInfluencersResponseType,
  ListDetailsResponseType,
  ProfileResponceType,
  SearchPayloadType,
  TopicsResponseType,
} from "./types";
import axios, { Method } from "axios";

import { SelectValue } from "antd/lib/select";

export const BASE_URL =
  "https://gpzz9e6vz8.execute-api.us-east-1.amazonaws.com/prod";

export const TEST_USER_ID: string = "a4f5708f-ac6d-497d-b647-a4f9315490db";
export const TOPICS_API_KEY: string = "164c387dbc1c4a349ef3467a08956d87";

export const urls = {
  list: (userID: string) => `${BASE_URL}/influencerlist/${userID}/`,
  listDetails: (userID: string, listID: string) =>
    `${BASE_URL}/influencerlist/${userID}/${listID}/`,
  search: `${BASE_URL}/influencersearch/`,
  createList: (userID: string) => `${BASE_URL}/modifyinfluencerlist/${userID}/`,
  deleteList: (userID: string, listId: string) =>
    `${BASE_URL}/modifyinfluencerlist/${userID}/${listId}`,
  editList: (userID: string, listId: string) =>
    `${BASE_URL}/modifyinfluencerlist/${userID}/${listId}`,
  addInfluencerToList: (userID: string, listId: string | SelectValue) =>
    `${BASE_URL}/modifyinfluencerlist/${userID}/${listId}`,
  profile: (influencerID: string) =>
    `${BASE_URL}/influencerprofile/${influencerID}/`,
  topics: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI`,
};

class HttpService {
  private fetchData = async <T>(
    url: string,
    method: Method = "get",
    params: object | null = null,
    body: object | null = null,
    headers?: object
  ) => {
    try {
      const { data } = await axios.request<T>({
        url: url,
        method: method,
        data: body,
        params: params,
        headers,
      });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  getLists = () => {
    return this.fetchData<AllInfluencerListsResponseType[]>(
      urls.list(TEST_USER_ID)
    );
  };
  createList = (body: CreateListPayloadType) => {
    return this.fetchData<string>(
      urls.createList(TEST_USER_ID),
      "patch",
      null,
      body
    );
  };
  editList = (body: CreateListPayloadType, listId: string) => {
    return this.fetchData<string>(
      urls.editList(TEST_USER_ID, listId),
      "patch",
      null,
      body
    );
  };
  addInfluencerToListList = (
    body: ListDetailsInfluencersResponseType,
    listId: string | SelectValue
  ) => {
    return this.fetchData<string>(
      urls.addInfluencerToList(TEST_USER_ID, listId),
      "patch",
      null,
      body
    );
  };
  deleteList = (id: string) => {
    return this.fetchData<string>(
      urls.deleteList(TEST_USER_ID, id),
      "patch",
      null,
      {}
    );
  };
  getListsDetails = (listId: string) => {
    return this.fetchData<ListDetailsResponseType>(
      urls.listDetails(TEST_USER_ID, listId)
    );
  };
  searchInfluencers = (body: SearchPayloadType) => {
    return this.fetchData<ListDetailsInfluencersResponseType[]>(
      urls.search,
      "post",
      null,
      body
    );
  };
  getProfile = (influencerID: string) => {
    return this.fetchData<ProfileResponceType>(urls.profile(influencerID));
  };
  getTopics = (query: string) => {
    return this.fetchData<TopicsResponseType>(
      urls.topics,
      "get",
      {
        pageSize: "10",
        q: query,
        autoCorrect: "true",
        pageNumber: "1",
        toPublishedDate: "null",
        fromPublishedDate: "null",
      },
      null,
      {
        "x-rapidapi-key": "4061fb68b1mshda89bca3c51dc87p1eae66jsn7ad5c7a020a6",
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      }
    );
  };
}

export const httpService = new HttpService();
