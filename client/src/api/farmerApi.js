import API from "./axios";

export const getFarmers = () =>
  API.get("/farmers");

export const getFarmer = (id) =>
  API.get(`/farmers/${id}`);

export const createFarmer = (data) =>
  API.post("/farmers", data);

export const updateFarmer = (
  id,
  data
) =>
  API.put(
    `/farmers/${id}`,
    data
  );

export const deleteFarmer = (
  id
) =>
  API.delete(
    `/farmers/${id}`
  );