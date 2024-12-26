import { apiClient } from "./apiClient";

const URL = "https://tektariq-api.onrender.com/api/v1/fellows";

const createFellow = async (data) => {
  const response = await apiClient.post(URL, data, {});
  return response;
};

const getAllFellows = async (URL) => {
  const response = await apiClient.get(URL, {});
  return response;
};

const getFellowById = async (id) => {
  const response = await apiClient.get(`${URL}/${id}`, {});
  return response;
};

export default {
  createFellow,
  getAllFellows,
  getFellowById,
};
