const testController = async (req, res) => {
  const { name } = req.body;
  res.json({ name: name });
};
module.exports = testController;
