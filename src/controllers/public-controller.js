const publicService = require("../services/public-service");

exports.searchProduct = async (req, res, next) => {
  try {
    const { search } = req.body;
    const findProduct = await publicService.searchProduct(search);
    console.log(findProduct);

    const result = findProduct.reduce((acc, product) => {
      const model = product.model;
      const brand = product.Brand.name;
      const type = product.TypeCar.type;

      const arr = [model, brand, type];
      const rs = arr.some((condition) => {
        return condition.toLowerCase().includes(search.toLowerCase());
      });
      if (rs) {
        acc.push(product);
      }
      return acc;
    }, []);

    if (result.length === 0) {
      res.json("notfound car");
    }
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};
