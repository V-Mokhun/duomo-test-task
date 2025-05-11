# Duomo App

This project consists of a backend API (Express) and a frontend (React) application.

## Prerequisites

- pnpm [https://pnpm.io/installation](https://pnpm.io/installation)

## Backend Setup

1. Navigate to the backend directory:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Copy the environment file:

   ```sh
   cp .env .env.local
   ```

4. Start the development server:

   ```sh
   pnpm run dev
   ```

5. Run tests:
   ```sh
   pnpm run test
   ```

## Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Copy the environment file:

   ```sh
   cp .env .env.local
   ```

4. Start the development server:
   ```sh
   pnpm run dev
   ```

## Docker Setup

To run the backend in Docker:

1. Build and start the container:
   ```sh
   docker-compose up
   ```

## Notes

- Ensure you copy `.env` to `.env.local` in both the backend and frontend projects to set up your environment variables.
- The backend API runs on port 8000 by default.
- The frontend development server runs on port 5173 by default.
