const Chef = require("../models/chefModel");

const getChef = (req, res) => {
  res.render("frontend/chef", { layout: "main.hbs" });
};

const getAddChef = (req, res) => {
  res.render("dashboard/addChef", { layout: "dashboardLayout.hbs" });
};
const getChefList = ( req, res ) => {
  res.render("dashboard/chefList", { layout: "dashboardLayout.hbs" });
};

const postChef = async (req, res) => {
  try {
    const newChef = new Chef({
      ...req.body,
    });
    await newChef.save();
    return res.status(201).json({
      message: "Chef successfully Created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const updateChef = async (req, res) => {
	try {
		await Chef.findByIdAndUpdate(req.params.id, req.body);
		return res.status(201).json({
			message: "Chef Successfully Updated",
			success: true,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
			success: false,
		});
	}
};


const deleteChef = async ( req, res ) => {
	try {
		const deleted = await Chef.findByIdAndDelete(req.params.id);
		if (!deleted) {
			return res.status(404).json({
				message: "Chef Not Found",
				success: false,
			});
		}
		return res.status(204).json({
			message: "Chef Successfully deleted",
			success: true,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
			success: false,
		});
	}
};


module.exports = {
  getChef,
  getAddChef,
  getChefList,
  postChef,
  updateChef,
  deleteChef,
};
