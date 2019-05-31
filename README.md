# factcheck-io
A mystery side-project


## Environment Variables
This project requires a number of environment variables in order to run correctly. 

### Database
The most important are the database variables, which allow you to specify what database you wish to use to store application data. They include:

- *DB_HOST* (the hostname of your database)
- *DB_PORT* (the port the database can be found on)
- *DB_NAME* (the name of the database)
- *DB_USER* (the username of an account with adequate permissions to do CRUD operations on the database)
- *DB_PASS* (the password assocated with the above DB_USER)

If running locally, it may be easiest to create an `env.sh` script with these variables and source it before running the dev application. By default this file is added to `.gitignore`, along with `env-prod.sh` and `env-dev.sh`, in case they are needed.

If running in production, there is generally a way to configure environment variables on your server. Be careful to do so.

### Production Flag
In addition to the database variables, there is a *NODE_ENV* variable that is used by the server script to determine whether or not the application is running in production mode. To run in production mode, this variable must be set to `'production'`; not setting a flag or setting it to anything else will result in the application being run in development mode.

*Note: The "start" script has an shell command built in that will set this flag automatically. The other scripts do not, however.*


## Initialization Scripts
In addition to the "start" script discussed above, there are a number of other scripts defined in the package.json that are available for use in development. These include the following:

- `"lint"`: Starts ESLint and lints the Javascript files in the project according to AirBnB's standards. Fixes any linting errors that can be fixed automatically.
- `"client:dev"`: Uses Webpack Dev Server to host the React application in a state that allows live-reloading without creating files in the `/dist/` folder. When running the client in development mode, React pages are served on port 3000. The Express server will not run with this command, and errors in the application may arise due to an inability to contact it.
- `"server:dev"`: Starts the Express server on port 8080. No client-side bundles generated. Runs with nodemon, for hot reloading.
- `"server:prod"`: Starts the Express server on port 8080. No client-side bundles generated. Runs with node ONLY. 
- `"dev"`: Starts the Express server in development mode, and then uses Webpack Dev Server to host the React pages separately. Express server runs on port 8080, and React application runs on port 3000. Webpack is configured to proxy the back-end API routes, so that they can be accessed from port 3000 without disabling CORS protection.
- `"build:dev"`: Generates a webpack bundle in the `/dist/` folder with an `index.html` file and `bundle.js` file that can be used to test the react application without running on a dev server. Hot-reloading is enabled. The Express server will not run with this command, and errors in the application may arise due to an inability to contact it.
- `"build:prod"`: Generates a webpack bundle in the `/dist/` folder with an `index.html` file and `bundle.js` file that can be used to run the react application without a dev server. Hot-reloading is disabled. The Express server will not run with this command, and errors in the application may arise due to an inability to contact it.
- `"test"`: Currently only runs an isolated mocha test script, but will eventually be updated to start the server and then run tests on the API routes using Chai.
- `"start"`: Sets the *NODE_ENV* variable to `production`, and then generates a production build of the client-side application and starts the node server in  producition mode. The generated client-side scripts will be run in static HTML files served from the Express server on port 8080. Hot-reloading is disabled.
