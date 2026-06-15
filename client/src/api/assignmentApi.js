import API from "./axios";

// GET ALL ASSIGNMENTS
export const getAssignments = () =>
  API.get("/assignments");

// GET MY ASSIGNMENTS (AUDITOR)
export const getMyAssignments = () =>
  API.get("/assignments/my");

// GET ONE ASSIGNMENT
export const getAssignmentById = (id) =>
  API.get(`/assignments/${id}`);

// CREATE
export const createAssignment = (data) =>
  API.post("/assignments", data);

// UPDATE
export const updateAssignment = (id, data) =>
  API.put(`/assignments/${id}`, data);

// DELETE
export const deleteAssignment = (id) =>
  API.delete(`/assignments/${id}`);