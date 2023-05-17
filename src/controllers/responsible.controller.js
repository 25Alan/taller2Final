import { responsible } from '../models/responsible.js'

export const getResponsible = async (req, res) => {
    try {
        const responsibles = await responsible.findAll();
        res.json(responsibles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createResponsible = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newResponsible = await responsible.create({
            name,
            email,
        });
        res.json(newResponsible);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
