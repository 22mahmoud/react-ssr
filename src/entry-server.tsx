import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
import path from "path";
import { readFileSync } from "fs";

const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

const getAssetManifest = () => {
  const manifest = JSON.parse(
    readFileSync(path.join(__dirname, "public/manifest.json"), "utf-8")
  );

  return manifest;
};

const assetMap = getAssetManifest();

const getAssetFromManifest = (name: string) => {
  return assetMap[name];
};

const appJs = getAssetFromManifest("app.js");

app.get("/", (_req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: [appJs],
    onShellReady() {
      res.setHeader("Content-Type", "text/html");
      pipe(res);
    },
  });
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
