import API from "./axios";

export const getFarms = () =>
  API.get("/farms");

export const getFarm = (id) =>
  API.get(`/farms/${id}`);

export const createFarm = (data) =>
  API.post("/farms", data);

export const updateFarm = (
  id,
  data
) =>
  API.put(
    `/farms/${id}`,
    data
  );

export const deleteFarm = (
  id
) =>
  API.delete(
    `/farms/${id}`
  );