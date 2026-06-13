const Farm = require('../models/farmModel');

// CREATE FARM
exports.createFarm = (req, res) => {

    const {
        farmer_id,
        farm_name,
        location,
        gps_coordinates,
        farm_size,
        production_capacity,
        status
    } = req.body;

    Farm.create(
        [farmer_id, farm_name, location, gps_coordinates, farm_size, production_capacity, status],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Farm created successfully",
                farmId: result.insertId
            });

        }
    );

};

// GET ALL FARMS
exports.getAllFarms = (req, res) => {

    Farm.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET FARM BY ID
exports.getFarmById = (req, res) => {

    const id = req.params.id;

    Farm.getById(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};

// UPDATE FARM
exports.updateFarm = (req, res) => {

    const id = req.params.id;

    const {
        farm_name,
        location,
        gps_coordinates,
        farm_size,
        production_capacity,
        status
    } = req.body;

    Farm.update(
        id,
        [farm_name, location, gps_coordinates, farm_size, production_capacity, status],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Farm updated successfully"
            });

        }
    );

};

// DELETE FARM
exports.deleteFarm = (req, res) => {

    const id = req.params.id;

    Farm.delete(id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Farm deleted successfully"
        });

    });

};