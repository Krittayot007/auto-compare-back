require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const authRoute = require("./routes/auth-route");
const adminRoute = require("./routes/admin-route");
const productRoute = require("./routes/product-route");

const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");
const authenticate = require("./middleware/authenticate");
const authenticateAdmin = require("./middleware/authenticateAdmin");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

app.use(
  rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 1000,
    message: { message: "too many request" },
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/admin", authenticate, authenticateAdmin, adminRoute);
app.use("/user", authenticate, () => {});
app.use("/product", authenticate, productRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log(`server running on port: ${port}`));
