import { states } from "../models/states.js";

export const getStates = async (req, res) => {
  try {
    const state = await states.findAll();
    res.json(state);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const getTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const taskFound = await task.findOne({
//       where: {
//         id: id,
//       },
//       attributes: ["name"],
//     });
//     res.json(taskFound);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

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

// export const updateTask = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const taskOne = await task.findOne({
//       where: { id },
//     });
//     taskOne.set(req.body);
//     await taskOne.save();
//     return res.json(taskOne);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const deleteTask = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await task.destroy({
//       where: { id },
//     });
//     console.log(result);
//     return res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };