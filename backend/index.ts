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
    .command("serve")
    .description("Start the server")
    .option(
      "-p, --production",
      "Use production mode"
    )
    .action(options => {
        const isProd = !!options.production;
        const buildDir = isProd ? "/home/iletthedawgsout/www" : path.join("..", "frontend", "build");
        const indexPath = path.join(buildDir, "index.html");
        const port = isProd ? 80 : 9000;

        console.log(`Starting server at port ${port}. Serving files from ${buildDir} and go dawgs`);

        startServer(buildDir, indexPath, port);
    });

program.parse(process.argv);