import { fixed_assets } from "../models/fixed_assets.js";

export const getAssets = async (req, res) => {
  try {
    const assets = await fixed_assets.findAll();
    res.json(assets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const assetFound = await fixed_assets.findOne({
      where: {
        id: id,
      },
    });

    if (!assetFound)
      return res.status(404).json({ message: "Project not found" });

    res.json(assetFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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

export const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    await fixed_assets.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.sendStatus(204);
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

export const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
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

    const assetId = await fixed_assets.findByPk(id);
    assetId.name = code;
    assetId.description = description;
    assetId.acquisition_value = acquisition_value;
    assetId.date_acquisition = date_acquisition;
    assetId.useful_life = useful_life;
    assetId.residual_value = residual_value;
    assetId.depreciation_start_date = depreciation_start_date;
    assetId.observations = observations;
    assetId.id_status = id_status;
    assetId.id_category = id_category;
    assetId.id_method_depreciation = id_method_depreciation;
    assetId.id_location = id_location;
    assetId.id_responsible = id_responsible;

    await assetId.save();

    res.json(assetId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getFixedAssetsAll = async (req, res) => {
  try {
    const fixedAssets = await fixed_assets.findAll({
      include: [
        states,
        category,
        locations,
        responsible,
        method_depreciation,
      ],
    });

    res.json(fixedAssets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
