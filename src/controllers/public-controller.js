const publicService = require("../services/public-service");

exports.searchProduct = async (req, res, next) => {
  try {
    const { search } = req.body;
    console.log(req.body);
    // console.log(search);
    const findProduct = await publicService.searchProduct(search);
    // console.log(findProduct);

    const result = findProduct.reduce((acc, product) => {
      const model = product.model;
      const brand = product.Brand.name;
      const type = product.TypeCar.type;
      const image = product.Image?.imgUrl;
      const engine = product.EngineType.type;

      const arr = [model, brand, type, image, engine];
      const rs = arr.some((condition) => {
        if (search) {
          return condition?.toLowerCase().includes(search?.toLowerCase());
        }
        return true;
      });
      if (rs) {
        acc.push(product);
      }
      return acc;
    }, []);

    if (result.length === 0) {
      res.json("notfound car");
    } else {
      res.status(200).json({ result });
    }
  } catch (err) {
    next(err);
  }
};

exports.fetchProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await publicService.getProductById(id);
    res.json(car);
  } catch (err) {
    next(err);
  }
};
