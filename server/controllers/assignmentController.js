const assignmentModel =
require("../models/assignmentModel");

exports.getAssignments = async (
  req,
  res
) => {

  try {

    const assignments =
      await assignmentModel.getAllAssignments();

    res.status(200).json(assignments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getAssignmentById =
async (req, res) => {

  try {

    const assignment =
      await assignmentModel.getAssignmentById(
        req.params.id
      );

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found"
      });
    }

    res.status(200).json(assignment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.createAssignment =
async (req, res) => {

  try {

    const result =
      await assignmentModel.createAssignment({
        ...req.body,
        assigned_by: req.user.id
      });

    res.status(201).json({
      message:
        "Assignment created successfully",
      assignmentId:
        result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateAssignment =
async (req, res) => {

  try {

    await assignmentModel.updateAssignment(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message:
        "Assignment updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.deleteAssignment =
async (req, res) => {

  try {

    await assignmentModel.deleteAssignment(
      req.params.id
    );

    res.status(200).json({
      message:
        "Assignment deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getMyAssignments =
async (req, res) => {

  try {

    const assignments =
      await assignmentModel
        .getAssignmentsByAuditor(
          req.user.id
        );

    res.status(200).json(assignments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};