# SpaceX Launch Browser

A React based web app that utilizes the fabulous [SpaceX-API](https://github.com/r-spacex/SpaceX-API) to search and display details from past and upcoming SpaceX launch events.

## Requirements

* node `^8.0.0`
* yarn (or npm)

## Installation

Install project dependencies via

```bash
$ yarn
```

## Running the Project

```bash
$ yarn dev
```

Starts a local development server and loads the app on [http://localhost:8080/](http://localhost:8080/)

## Live Development

The following scripts are available to aid local development.

| `yarn <script>`  | Description                                        |
| ---------------- | -------------------------------------------------- |
| `clean`          | Removes `./dist` folder                            |
| `lint`           | Lints the project for potential errors             |
| `lint:fix`       | Lints the project and fixes all correctable errors |
| `test`           | Runs unit tests with Jest                          |
| `test:watch`     | Run tests when underlying code changes             |
| `test:cov`       | Runs `test` and produces coverage report           |
| `test:cov:watch` | Updates coverage report when code changes          |
| `test:cov:open`  | Launches coverage report in browser                |

## Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn dev`).

## Testing

To add a unit test, create a `*.test.js` file anywhere inside of the root `__tests__` folder.
To run the tests and also generate the coverage report, use:

```bash
$ yarn test
```

It is assumed you have `jest` installed globally in order to use its CLI.

## Deployment

Deployment is simple and all the files are static. To generate the build, use:

```bash
$ yarn build
```

All assets are automatically hashed based on file contents.
