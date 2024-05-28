<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## SETUP

```bash
$ git clone https://github.com/akshansh-modi/cutoff-assignment.git
```

## Installation

```bash
$ npm install
```

##  setting up database
1)open psql

2)Create a Database: Create a new database named nest_db.
sql

```bash
CREATE DATABASE nest_db;
```

3)Create Tables: Create Users and WalletAddress tables.
sql

```bash
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);


CREATE TABLE WalletAddress (
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES Users(id),
    address VARCHAR(255)
);
```

Setting up app
change username and password in src/app.module.ts

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The application will start on `http://localhost:3000`.

## API Endpoints

### Users

- **GET /users**: Retrieve all users.
- **GET /users/:id**: Retrieve a user by ID.
- **POST /users**: Create a new user.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **PUT /users/:id**: Update a user by ID.
  - Request Body:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "password": "newpassword123"
    }
    ```
- **DELETE /users/:id**: Delete a user by ID.

### WalletAddress

- **GET /wallet-address**: Retrieve all wallet addresses.
- **GET /wallet-address/:id**: Retrieve a wallet address by ID.
- **POST /wallet-address**: Create a new wallet address.
  - Request Body:
    ```json
    {
      "userId": 1,
      "address": "0x1234567890abcdef"
    }
    ```
- **PUT /wallet-address/:id**: Update a wallet address by ID.
  - Request Body:
    ```json
    {
      "userId": 1,
      "address": "0xfedcba0987654321"
    }
    ```
- **DELETE /wallet-address/:id**: Delete a wallet address by ID.
