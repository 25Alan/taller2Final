import { locations } from '../models/locations.js'

export const getLocation = async (req, res) => {
    try {
        const location = await locations.findAll();
        res.json(location);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createLocation = async (req, res) => {
    const { name, address, city, country } = req.body;

    try {
        const newLocation = await locations.create({
            name,
            address,
            city,
            country,
        });
        res.json(newLocation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
