import knex from "knex";

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3308,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const allowedSortFields = ["first_name", "last_name"];
  const allowedSortOrders = ["ASC", "DESC"];

  if ("sort" in req.query) {
    const orderBy = req.query.sort.split(" ");

    if (orderBy.length === 2) {
      const [field, order] = orderBy;

      if (
        allowedSortFields.includes(field) &&
        allowedSortOrders.includes(order.toUpperCase())
      ) {
        query = query.orderBy(field, order);
      } else {
        return res.status(400).json({ error: "Invalid sort parameter" });
      }
    } else {
      return res
        .status(400)
        .json({ error: "Sort parameter must be in the format: field order" });
    }
  }

  console.log("SQL Query:", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error("Database query error:", e);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

