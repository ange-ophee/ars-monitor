const traceModel =
require("../models/traceabilityModel");

exports.createTraceEvent = async (req, res) => {

  try {

    const result =
      await traceModel.createTraceEvent(
        req.body
      );

    res.status(201).json({
      message: "Traceability event added",
      id: result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getBatchTraceability = async (req, res) => {

  try {

    const data =
      await traceModel.getTraceabilityByBatch(
        req.params.batchId
      );

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getAllTraceability = async (req, res) => {

  try {

    const data =
      await traceModel.getAllTraceability();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};