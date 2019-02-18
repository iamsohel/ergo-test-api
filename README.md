
## Setup

Make sure to follow all these steps exactly as explained below.

### Install MongoDB

Once you install MongoDB, make sure it's running. You will find database file in database_file folder

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm install

### Start the Server

    node index.js

This will launch the Node server on port 3000.

Open up your postman and head over to:

http://localhost:3000/api/users -->POST, parameters(name, latitude, longitude)

http://localhost:3000/api/restaurants -->POST, parameters(name, address latitude, longitude)

http://localhost:3000/api/users/:user_id -->GET, (mongodb generated _id)

