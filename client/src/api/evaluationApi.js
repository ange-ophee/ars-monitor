import API from "./axios";

export const getEvaluations =
  () =>
    API.get(
      "/evaluations"
    );

export const getEvaluation =
  (id) =>
    API.get(
      `/evaluations/${id}`
    );

export const createEvaluation =
  (data) =>
    API.post(
      "/evaluations",
      data
    );

export const updateEvaluation =
  (
    id,
    data
  ) =>
    API.put(
      `/evaluations/${id}`,
      data
    );

export const deleteEvaluation =
  (id) =>
    API.delete(
      `/evaluations/${id}`
    );