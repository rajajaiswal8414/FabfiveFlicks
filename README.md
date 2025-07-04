# FabfiveFlicks

A full-stack movie booking application built with React, Node.js, Express, and MongoDB.

## Features

- User registration and login
- Movie listing and search
- Book movie shows
- Admin panel for managing movies and theatres
- JWT-based authentication
- Responsive UI

## Project Structure

```
FabfiveFlicks-main/
  ├── client/   # React frontend
  └── server/   # Node.js/Express backend
```

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository

```
git clone https://github.com/rajajaiswal8414/FabfiveFlicks.git
cd FabfiveFlicks-main
```

### 2. Install dependencies

```
cd server
npm install
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file in the **project root** with the following content:

```
mongo_url=your_mongodb_connection_string
jwt_secret=your_jwt_secret
stripe_key=your_stripe_secret_key
PORT=6000
NODE_ENV=development
```

- Replace `your_mongodb_connection_string` with your MongoDB URI.
- Replace `your_jwt_secret` and `your_stripe_secret_key` with your own secrets.

### 4. Run the Application

#### Start the backend:

```
cd server
npm start
```

#### Start the frontend:

```
cd ../client
npm start
```

- Frontend runs at [http://localhost:3000](http://localhost:3000)
- Backend runs at [http://localhost:6000](http://localhost:6000)

## Default Admin Login

- **Email:** pankaj123@gmail.com
- **Password:** 123456

## Usage

- Visit the home page to browse and search movies.
- Use the "Go to Admin" button on the home page to access the admin panel.
- Book shows as a user, or manage movies/theatres as an admin.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
