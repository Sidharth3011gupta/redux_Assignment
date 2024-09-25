function ProductValidate(req, res, next) {
  const { name, price, isStock } = req.body;

  console.log(name, price, isStock);

  if (name === "" && !name) {
    return res.json({ msg: "Invalid name entry" });
  }
//   else

  next();
}

module.exports = {
  ProductValidate,
};
