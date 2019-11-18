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

const fail = (message: string) => {
    console.log(`Error: ${message}`);
    process.exit(1);
}

program
    .version("1.0.0")
    .description("Start the server")
    .option(
      "-p, --port <port>",
      "Port"
    )
    .option(
        "-a, --asset-dir <assetDir>",
        "Path to assert dir"
    )
    .parse(process.argv);

let { port, assetDir } = program;

if (!port) {
    fail("Missing port");
}

if (!assetDir) {
    fail("Missing assertDir");
}

const indexPath = path.join(assetDir, "index.html");
console.log(`Starting server at port ${port}. Serving files from ${assetDir} and go dawgs`);
startServer(assetDir, indexPath, port);