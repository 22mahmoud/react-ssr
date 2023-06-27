import express from "express";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

function renderMarkup(html: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `;
}

app.use(express.static("dist"));

app.get("/", (_req, res) => {
  console.log("Server rendering...");
  res.send(renderMarkup(renderToString(<App />)));
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
