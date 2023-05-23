import { states } from "../models/states.js";

export const getStates = async (req, res) => {
  try {
    const state = await states.findAll();
    res.json(state);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getState = async (req, res) => {
  try {
    const { id } = req.params;
    const stateFound = await states.findOne({
      where: {
        id: id,
      }
    });

    if (!stateFound)
      return res.status(404).json({ message: "Project not found" });

    res.json(stateFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createState = async (req, res) => {
  const { state } = req.body;

  try {
    const newState = await states.create({
      state,
    });
    res.json(newState);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateState = async (req, res) => {
  const { id } = req.params;
  try {
    const newState = await states.findOne({
      where: { id },
    });
    newState.set(req.body);
    await newState.save();

    return res.json(newState);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteState = async (req, res) => {
  const { id } = req.params;
  try {
    const dState = await states.destroy({
      where: { id },
    });
    dState();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};