import { method_depreciation } from '../models/method_depreciation.js'

export const getMdepreciations = async (req, res) => {
    try {
        const method_depreciations = await method_depreciation.findAll();
        res.json(method_depreciations);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getMdepreciation = async (req, res) => {
    try {
        const { id } = req.params;
        const mdepreciationFound = await method_depreciation.findOne({
            where: {
                id: id,
            },
        });

        if (!mdepreciationFound)
            return res.status(404).json({ message: "Project not found" });

        res.json(mdepreciationFound);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createMdepreciation = async (req, res) => {
    const { name } = req.body;

    try {
        const new_Mdepreciation = await method_depreciation.create({
            name,
        });
        res.json(new_Mdepreciation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateMdepreciation = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;

        const mdepreciationId = await method_depreciation.fidByPk(id);
        mdepreciationId.name = name;

        await mdepreciationId.save();

        res.json(mdepreciationId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteMdepreciation = async (req, res) => {
    try {
        const { id } = req.params;
        await method_depreciation.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.sendStatus(204);
};
