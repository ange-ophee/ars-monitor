const farmModel = require("../models/farmModel");

exports.getFarms = async (req, res) => {
  try {

    const farms =
      await farmModel.getAllFarms();

    res.status(200).json(farms);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getFarmById = async (req, res) => {
  try {

    const farm =
      await farmModel.getFarmById(
        req.params.id
      );

    if (!farm) {
      return res.status(404).json({
        message: "Farm not found"
      });
    }

    res.status(200).json(farm);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.createFarm = async (req, res) => {
  try {

    const result =
      await farmModel.createFarm(
        req.body
      );

    res.status(201).json({
      message: "Farm created successfully",
      farmId: result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateFarm = async (req, res) => {
  try {

    await farmModel.updateFarm(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Farm updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.deleteFarm = async (req, res) => {
  try {

    await farmModel.deleteFarm(
      req.params.id
    );

    res.status(200).json({
      message: "Farm deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getFarmMonitoring = async (req, res) => {
  try {

    const records =
      await farmModel.getFarmMonitoring(
        req.params.id
      );

    res.status(200).json(records);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getFarmEvaluations = async (req, res) => {
  try {

    const evaluations =
      await farmModel.getFarmEvaluations(
        req.params.id
      );

    res.status(200).json(evaluations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};