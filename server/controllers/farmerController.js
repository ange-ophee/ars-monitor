const Farmer = require('../models/farmerModel');

// CREATE FARMER
exports.createFarmer = (req, res) => {

    const {
        user_id,
        gender,
        cooperative_name,
        region,
        village
    } = req.body;

    Farmer.create(
        [user_id, gender, cooperative_name, region, village],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Farmer created successfully",
                farmerId: result.insertId
            });

        }
    );

};

// GET ALL FARMERS
exports.getAllFarmers = (req, res) => {

    Farmer.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET ONE FARMER
exports.getFarmerById = (req, res) => {

    const id = req.params.id;

    Farmer.getById(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};

// UPDATE FARMER
exports.updateFarmer = (req, res) => {

    const id = req.params.id;

    const {
        gender,
        cooperative_name,
        region,
        village
    } = req.body;

    Farmer.update(
        id,
        [gender, cooperative_name, region, village],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Farmer updated successfully"
            });

        }
    );

};

// DELETE FARMER
exports.deleteFarmer = (req, res) => {

    const id = req.params.id;

    Farmer.delete(id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Farmer deleted successfully"
        });

    });

};