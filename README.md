# Source code for www.iletthedawgsout.com

## Project structure

This repository contains two separate but dependent projects (front end and back end).

The frontend is in the frontend/ folder and the backend is in the backend/ folder. Each project has its own node_modules and package.json with its own npm scripts.

## Development and deployment workflow

The idea is that you will run both projects locally on your machine for development. When you open a PR, the Github actions will create a temporary pre-production website where you can verify that your changes behave the way you expect in a production environment. Once your commit lands in the master branch, the Github actions will automatically re-deploy the front end and the back end to production.

## Front end

The frontend/ folder of this repository contains a react single page application that was created from the create-react-app command line tool

## Back end

Azure Function /api

Azure Cosmos DB

Github markdown blog post content
