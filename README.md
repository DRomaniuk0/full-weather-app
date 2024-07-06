
# Weather Application

This project is a weather application built with a React frontend and a NestJS backend. It fetches weather data from the OpenWeatherMap API and displays it to the user.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Features

- Display current weather information for a given city
- List of previous weather requests
- Responsive design
- Navigation bar for easy access to different sections

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- OpenWeatherMap API key

## Installation

1. Clone the repository:

    ```sh
    HTTPS - git clone https://github.com/DRomaniuk0/full-weather-app.git
    SSH - git clone git@github.com:DRomaniuk0/full-weather-app.git
    cd weather-app
    ```

2. Create a `.env` file in the project root directory and set the required environment variables (see [Environment Variables](#environment-variables) section).

## Running the Application

### Development Environment

To build and start the application in development mode, run the following commands in the project root directory:

```sh

cd/rootFolder yarn dev:services:build
cd/rootFolder yarn dev:services -- to start database

cd/client && yarn dev
cd/server && yarn start:dev

```

To stop the development environment, run:

```sh
cd/client && CTRL + C
cd/server && CTRL + C
cd/rootFolder yarn dev:services:clean
```

### Production Environment

To build and start the application in production mode, run the following commands in the project root directory:

```sh
cd/rootFolder yarn services:build
cd/rootFolder yarn services
```

To stop the production environment, run:

```sh
cd/rootFolder yarn services:clean
```

Open your browser and navigate to `http://localhost:8080` to view the application.

## Environment Variables

Create a `.env` file in the project root directory and add the following environment variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=beverly_hills
DB_NAME=weather_app
OPEN_WEATHERMAP_API_KEY=a2cbf6e830ad7617b647a16b12b96710
```

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Material-UI
  - Axios

- **Backend:**
  - NestJS
  - TypeORM
  - PostgreSQL
  - Axios

- **Others:**
  - Docker
  - Docker Compose

## Project Structure

```
.
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   └── index.tsx
│   └── Dockerfile
├── server
│   ├── src
│   │   ├── weather
│   │   ├── app.module.ts
│   │   ├── main.ts
│   └── Dockerfile
├── .env
├── docker-compose.yml
└── README.md
```
