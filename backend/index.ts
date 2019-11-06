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
    .command("start")
    .description("Start the server")
    .option(
      "-p, --production",
      "Use production mode"
    )
    .action(options => {
        const buildDir = !!options.production ? "/var/www" : path.join("..", "frontend", "build");
        const indexPath = path.join(buildDir, "index.html");
        const port = 9000;

        console.log(`Starting server at port ${port}. Serving files from ${buildDir}`);

        startServer(buildDir, indexPath, port);
    });
