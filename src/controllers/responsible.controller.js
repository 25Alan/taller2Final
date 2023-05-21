import { responsible } from '../models/responsible.js'

export const getResponsibles = async (req, res) => {
    try {
        const responsibles = await responsible.findAll();
        res.json(responsibles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getResponsible = async (req, res) => {
    try {
        const { id } = req.params;
        const responsibleFound = await responsible.findOne({
            where: {
                id: id,
            },
        });

        if (!responsibleFound)
            return res.status(404).json({ message: "Project not found" });

        res.json(responsibleFound);
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

export const updateResponsible = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const responsibleId = await responsible.fidByPk(id);
        responsibleId.name = name;
        responsibleId.email = email;

        await responsibleId.save();

        res.json(responsibleId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteReponsible = async (req, res) => {
    try {
        const { id } = req.params;
        await responsible.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.sendStatus(204);
};