const Log = require("../models/Log");
const validateData = require("../validator/Log");
const post = async (req, res) => {
  const { error } = validateData(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const { event, pageGroup, referer, query, params, btn, user } = req.body;
    const log = new Log({
      event,
      pageGroup,
      referer,
      query,
      params,
      btn,
      user,
    });
    await log.save();
    res.status(201).send("Successfully");
  } catch (error) {
    res
      .status(500)
      .send(
        process.env.APP_ENV && process.env.APP_ENV == "local"
          ? `Error logging: ${error.message}`
          : "Server Error"
      );
  }
};
const get = async (req, res) => {
  try {
    const result = await Log.find({});
    res.status(201).send({ list: result });
  } catch (error) {
    console.error("Error get:", error.message);
    res.status(500).send("Server Error");
  }
};
module.exports = {
  post,
  get,
};
