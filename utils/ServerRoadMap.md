This Readme file describe the project's server folder structure:

# Server:

- package.json - all the dependencies and packages there are in use (do not touch!).
- package-lock.json - configuration (do not touch!).
- index.js - centralizer the whole logic from all directories. and run the DB
- .env - Store the secrets of this app- not include in the git commits.
- uploads - Store the product's photos links.
- routes - connect between route and their controllers.
- node_modules - do not touch!
- mode`ls - all the MongoDB schema's models.
- middleware - all the middleware that are in use on the various routes.
- logs - 3 folders, that gather information records about every request.
- controllrs - include the whole server side logic for the different routes.
