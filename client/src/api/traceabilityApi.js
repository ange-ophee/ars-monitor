import API from "./axios";

// ALL TRACEABILITY EVENTS
export const getAllTraceability = () =>
  API.get("/traceability");

// TRACEABILITY OF ONE BATCH
export const getBatchTraceability = (batchId) =>
  API.get(`/traceability/batch/${batchId}`);

// CREATE TRACE EVENT
export const createTraceEvent = (data) =>
  API.post("/traceability", data);