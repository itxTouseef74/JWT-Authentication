# JWT Authentication with Node.js

This repository demonstrates how to implement JWT authentication in a Node.js application using the Express framework.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/itxTouseef74/JWT-Authentication.git
   ```

2. Navigate to the project directory:

   ```bash
   cd JWT-Authentication
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

- **POST** `/api/login`: Log in with a registered user.
- **GET** `/api/profile`: Access a protected route (requires a valid JWT token).

## JWT Authentication

This application uses JSON Web Tokens (JWT) to handle user authentication. Here's a brief overview of how it works:

- When a user registers or logs in, a JWT is generated and sent back as a response.
- The client stores this JWT, usually in a cookie or local storage.
- For protected routes, the client sends the JWT in the `Authorization` header of the HTTP request.
- The server verifies the JWT's authenticity, expiration, and other claims before allowing access to the protected resource.

## Dependencies Used

- Express: Web framework for building APIs.
- Jsonwebtoken (JWT): For generating and verifying JWT tokens.

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was created to demonstrate how to implement JWT authentication in a Node.js application.
