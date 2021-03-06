# Overview

## Project structure

This repository contains two separate but related projects (front end and back end).

The frontend is in the frontend/ folder and the backend is in the backend/ folder. Each project has its own node_modules and package.json with its own npm scripts.

## Development and deployment workflow

The idea is that you will run both projects locally on your machine for development. When you open a PR, the Github actions will create a temporary pre-production website where you can verify that your changes behave the way you expect in a production environment. Once your commit lands in the master branch, the Github actions will automatically re-deploy the front end and the back end to production.

## Front end

The frontend/ folder of this repository contains a react single page application that was created from the create-react-app command line tool.

It's set up with a CORS server for forwarding local requests to the local web server (needed to workaround browser CORS requirements for local development). This gets run behind the scenes with the npm start script, which also runs the react packager server (used for reloading the JS source in the browser and watching for file system changes to enable hot reloading).

## Back end

The backend is a collection of Azure Functions that you can run locally for development, but also get deployed to production.

The backing data storage for these Azure functions is an Azure Cosmos DB

## Website content

Content comes from a Github repository and gets downloaded in raw markdown form at runtime.

# Running the website for local development

## 1. Get access to Azure resources

If you are granted access to the "iletthedawgsout-static-web-app" Azure resource group, you should then automatically have access to the resources inside of it.

- Azure Cosmos DB Account (iletthedawgsout)
- Static Web App (iletthedawgsout-static-web-app)

## 2. Install required software

The following software needs to be installed in order to contribute to this project

1. Latest VS Code
2.  Google Chrome
3. [node.js](https://nodejs.org/en/download/) - Luis tested against node@12.18.4, but probably newer versions of node would work too. Make sure node and npm are accessible from the command line.
4. git 

## 3. Clone the repository

```git clone https://github.com/iletthedawgsout/iletthedawgsout.com.git```

## 4. Open the project workspace in Visual Studio Code

This project has a VS Code workspace file that is configured to organize the project into folders and provide useful debugging configurations.

The first time you open the workspace, do this:
1. Open VS Code
2. File => Open workspace
3. Open the workspace file in the .vscode/ folder (this folder lives in the repository root).

The next time you open the workspace, it will be a little bit easier to open the workspace
1. Open VS Code
2. Select the workspace from your recently opened projects

## 5. Setup Visual Studio Code extensions

### Install the extensions for Visual Studio Code.

The first time you open the workspace, Visual Studio Code will automatically prompt you to install recommended extensions for this workspace.

In case you accidentally skipped it, you can manually install the following extensions listed [here](https://github.com/iletthedawgsout/iletthedawgsout.com/blob/master/.vscode/extensions.json).

### Configure the Azure Static Webapps extension

1. Click on the Azure Static Webapps extension for Visual Studio Code and sign in
2. Create an empty local.settings.json file in the backend folder. This filename will be ignored by git.
3. Add the following to that file

```
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "CosmosDBConnection": "",
  }
}
```
4. Fill in the value for the "CosmosDBConnection" string. You can get this in Azure Portal by navigating to the Static Web App (iletthedawgsout-static-web-app) and then go to Settings => Configuration (copy to clipboard). Paste that string as-is. This will allow you to interact with the database in your local environment.

## 6. Run the project locally

Once you've opened the project workspace in VS Code and you've installed and configured all of the pre-requisite software, you should be able to run the project easily through VS Code.

1. Go top debug pane in VS Code (click the triangle and bug icon on the left pane)
2. Make sure that "Launch backend and frontend dev server" is selected in the drop down
3. Click the play button (or press F5 on your keyboard)

This will kick off a series of build steps that will result in the frontend and the backend being run in debug mode on your machine.

Once that is running, you will need to do one more step before you can interact with the web site

1. Select "Launch Chrome Debugger" from the debugging dropdown down
2. Hit F5 again.

This will open Chrome (if it's not already open) and take you to the localhost url where you will see the local version of your website. The website will be making network requests to the azure functions that are also deployed locally on your machine.

You should be able to view logs in realtime in VS Code, as well as set breakpoints for debugging your code.

# Deploying your changes to production

1. (Optional) Make sure that unit tests, lintint, and typescript all pass locally. Run ```npm run validate``` in the frontend and backend folders and make sure all of the processes terminate with exit code 0 (success).
2. Open a PR against the master branch. This will result in a temporary staging URL being created where you can test your changes in an integration environment for validation purposes. If you skipped the first step and it turns out there were errors, they should be caught in this step in the form of the staging environment failing and blocking your PR.
3. Once you're ready to deploy to prod, just complete your PR. The Github actions will automatically handle deployment.
4. Monitor for issues