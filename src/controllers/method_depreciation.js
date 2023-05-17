import { method_depreciation } from '../models/method_depreciation.js'

export const getMethod_depreciation = async (req, res) => {
    try {
        const method_depreciations = await method_depreciation.findAll();
        res.json(method_depreciations);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createMethod_depreciation = async (req, res) => {
    const { name } = req.body;

    try {
        const newMethod_depreciation = await method_depreciation.create({
            name,
        });
        res.json(newMethod_depreciation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
