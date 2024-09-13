import app from "./src/app.js";
const port = process.env.PORT || "8080";

app.listen(port, () =>
  console.log(`Ligando o servidor na porta ${port}\nAcesse em: http://localhost:${port}`, new Date())
);