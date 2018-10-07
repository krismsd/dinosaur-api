# Dinosaur API
This is a simple CRUD API for managing dinosaur data

## Running with Docker Compose
It is assumed that you have checked out this repo and are in its directory and that your are running Docker Engine `v18.06.0` or above. To start:
```bash
docker-compose up
```

This will bring up the API exposed on port 3333 alongside a MongoDB instance. It will set the admin password to `letmein`

## Running Manually
Assuming your running a MongoDB instance accessible on `localhost` and you are running Node `v8` or above. To start:
```bash
ADMIN_PASSWORD=letmein npm start
```
This will start the server with the admin password set to `letmein`

## Routes
The API routes are described by the swagger file: `swagger.yaml`

### Admin routes
POST/PUT/DELETE operations are protected behind Basic HTTP auth. The username is `admin` and password `letmein` (when running with the above commands) 

## Things to Improve
* Currently any error results in a generic problem error message. Better error messages should be returned and errors inspected to determine server or request fault. 
* Logging should be abstracted a bit. Everything talks directly to Winston. 
