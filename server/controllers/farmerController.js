const farmerModel = require("../models/farmerModel");

exports.getFarmers = async (req, res) => {
  try {

    const farmers =
      await farmerModel.getAllFarmers();

    res.status(200).json(farmers);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getFarmerById = async (req, res) => {
  try {

    const farmer =
      await farmerModel.getFarmerById(
        req.params.id
      );

    if (!farmer) {
      return res.status(404).json({
        message: "Farmer not found"
      });
    }

    res.status(200).json(farmer);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.createFarmer = async (req, res) => {
  try {

    const result =
      await farmerModel.createFarmer(
        req.body
      );

    res.status(201).json({
      message: "Farmer created successfully",
      farmerId: result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateFarmer = async (req, res) => {
  try {

    await farmerModel.updateFarmer(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Farmer updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.deleteFarmer = async (req, res) => {
  try {

    await farmerModel.deleteFarmer(
      req.params.id
    );

    res.status(200).json({
      message: "Farmer deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getFarmerFarms = async (req, res) => {
  try {

    const farms =
      await farmerModel.getFarmerFarms(
        req.params.id
      );

    res.status(200).json(farms);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};