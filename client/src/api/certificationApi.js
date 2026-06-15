import API from "./axios";

export const getCertificates =
  () =>
    API.get(
      "/certifications"
    );

export const getCertificate =
  (id) =>
    API.get(
      `/certifications/${id}`
    );

export const issueCertificate =
  (data) =>
    API.post(
      "/certifications",
      data
    );

export const updateCertificate =
  (
    id,
    data
  ) =>
    API.put(
      `/certifications/${id}`,
      data
    );