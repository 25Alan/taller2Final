import { category } from '../models/category.js'

export const getCategorys = async (req, res) => {
  try {
    const categorys = await category.findAll();
    res.json(categorys);
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
