import API from "./axios";

export const getReports =
  () =>
    API.get(
      "/reports"
    );

export const getComplianceSummary =
  () =>
    API.get(
      "/reports/compliance-summary"
    );

export const getFarmPerformance =
  () =>
    API.get(
      "/reports/farm-performance"
    );

export const getTraceabilitySummary =
  () =>
    API.get(
      "/reports/traceability-summary"
    );

export const getCertificationSummary =
  () =>
    API.get(
      "/reports/certification-summary"
    );

export const getARSDashboard =
  (farmId) =>
    API.get(
      `/reports/ars-dashboard/${farmId}`
    );