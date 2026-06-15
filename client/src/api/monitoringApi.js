import API from "./axios";

export const getMonitoring =
  () =>
    API.get(
      "/monitoring"
    );

export const getMonitoringByFarm =
  (farmId) =>
    API.get(
      `/monitoring/farm/${farmId}`
    );

export const createMonitoring =
  (data) =>
    API.post(
      "/monitoring",
      data
    );

export const updateMonitoring =
  (
    id,
    data
  ) =>
    API.put(
      `/monitoring/${id}`,
      data
    );

export const deleteMonitoring =
  (id) =>
    API.delete(
      `/monitoring/${id}`
    );