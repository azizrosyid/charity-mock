const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.post("/verify-tokopedia", (req, res) => {
  const { invoiceId } = req.body;
  if (!invoiceId) {
    return res.status(400).json({ message: "Invoice ID is required" });
  }

  return res.json({ message: "Success", invoiceId });
});

server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});
