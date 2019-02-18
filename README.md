
## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

Once you install MongoDB, make sure it's running.

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

