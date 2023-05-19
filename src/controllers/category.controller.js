import { category } from '../models/category.js'

export const getCategorys = async (req, res) => {
  try {
    const categorys = await category.findAll();
    res.json(categorys);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryFound = await category.findOne({
      where: {
        id: id,
      },
    });

    if (!categoryFound)
      return res.status(404).json({ message: "Project not found" });

    res.json(assetFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await category.create({
      name,
    });
    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {

  try {
    const { id } = req.params;
    const { name } = req.body;

    const categoryId = await category.fidByPk(id);
    categoryId.name = name;

    await categoryId.save();

    res.json(categoryId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await category.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.sendStatus(204);
};
