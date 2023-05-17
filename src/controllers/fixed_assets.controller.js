import { fixed_assets } from "../models/fixed_assets.js";
// import { task } from "../models/states.js";

export const getAssets = async (req, res) => {
  try {
    const assets = await fixed_assets.findAll();
    res.json(assets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const getProject = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const projectFound = await project.findOne({
//       where: {
//         id: id,
//       },
//     });

//     if (!projectFound)
//       return res.status(404).json({ message: "Project not found" });

//     res.json(projectFound);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const createAsset = async (req, res) => {
  const {
    code,
    description,
    acquisition_value,
    date_acquisition,
    useful_life,
    residual_value,
    depreciation_start_date,
    observations, 
    id_status,
    id_category,
    id_method_depreciation, 
    id_location, 
    id_responsible } = req.body;

  try {
    const newAsset = await fixed_assets.create({
      code: code,
      description: description,
      acquisition_value: acquisition_value,
      date_acquisition: date_acquisition,
      useful_life: useful_life,
      residual_value: residual_value,
      depreciation_start_date: depreciation_start_date,
      observations: observations,
      id_status: id_status,
      id_category: id_category,
      id_method_depreciation: id_method_depreciation,
      id_location: id_location,
      id_responsible: id_responsible  
    });
    res.json(newAsset);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const updateProject = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, priority, description } = req.body;

//     const projectId = await project.findByPk(id);
//     projectId.name = name;
//     projectId.priority = priority;
//     projectId.description = description;
//     await projectId.save();

//     res.json(projectId);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const deleteProject = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await project.destroy({
//       where: {
//         id: id,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }

//   res.sendStatus(204);
// };

// export const getProjectTasks = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const tasks = await task.findAll({
//       where: { projectId: id },
//     });
//     res.json(tasks);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };