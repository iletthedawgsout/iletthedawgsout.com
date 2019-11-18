import express from "express";
import path from "path";
import program from "commander";

const app = express();

const startServer = (buildDir: string, indexPath: string, port: number) => {
    app.use(express.static(buildDir));
    app.get('/', function (req, res) {
        res.sendFile(indexPath);
    });
    app.listen(port);
};

program
    .version("1.0.0")
    .description("Start the server")
    .option(
      "-p, --production",
      "Use production mode"
    )
    .option(
        "-a, --asset-dir <assetDir>",
        "Path to assert dir"
    )
    .parse(process.argv);

const isProd = !!program.production;
let assetDir = program.assetDir;
if (!assetDir) {
    // Fallback to sensible defaults if path not provided
    assetDir = isProd ? "/home/iletthedawgsout/www" : path.join("..", "frontend", "build");
}
const indexPath = path.join(assetDir, "index.html");
const port = isProd ? 80 : 9000;

console.log(`Starting server at port ${port}. Serving files from ${assetDir} and go dawgs`);

startServer(assetDir, indexPath, port);