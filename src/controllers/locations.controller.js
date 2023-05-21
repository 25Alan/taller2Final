import { locations } from '../models/locations.js'

export const getLocations = async (req, res) => {
    try {
        const location = await locations.findAll();
        res.json(location);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const locationFound = await locations.findOne({
            where: {
                id: id,
            },
        });

        if (!locationFound)
            return res.status(404).json({ message: "Project not found" });

        res.json(locationFound);
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

export const updateLocation = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, address, city, country } = req.body;

        const locationId = await locations.fidByPk(id);
        locationId.name = name;
        locationId.address = address;
        locationId.city = city;
        locationId.country = country;

        await locationId.save();

        res.json(locationId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await locations.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.sendStatus(204);
};