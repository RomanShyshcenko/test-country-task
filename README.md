# Country Information API

## Overview

This project provides a RESTful API service for retrieving detailed information about countries, including:

- List of available countries
- Detailed country information:
  - Border countries
  - Population statistics over time
  - Country flag

## Features

- Get list of available countries
- Retrieve detailed country information by country code
- Add national holidays to a user's calendar
- User management (registration, retrieval)
- Data aggregation from multiple external APIs:
  - [Date.nager.at API](https://date.nager.at/Api) - Country metadata, border information, and public holidays
  - [CountriesNow API](https://countriesnow.space/) - Population statistics and flag images
  

## Technology Stack

- **Backend**: NestJS framework (Node.js)
- **HTTP Client**: @nestjs/axios for API integrations
- **Database**: SQL database with TypeORM
- **Linting**: ESLint with TypeScript and NestJS plugins
- **Code Style**: Prettier
- **API Documentation**: Swagger/OpenAPI

## Setup Instructions

### Prerequisites

- Node.js (v16 or newer)
- npm (v8 or newer)

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/country-info
   DATE_NAGER_API_URL=https://date.nager.at/api/v3
   COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1
   ```

4. Run the development server
   ```bash
   npm run start:dev
   ```

### Available Scripts

- `npm run start` - Start the server in production mode
- `npm run start:dev` - Start the server in development mode with hot-reload
- `npm run lint` - Run ESLint to check code quality
- `npm run build` - Build the application for production

## API Endpoints

### Get Available Countries

```
GET /country-info/available
```

Returns a list of available countries with their names and country codes.

### Get Detailed Country Information

```
GET /country-info/:countryCode
```

Returns detailed information about a specific country, including:
- Border countries
- Population statistics
- Flag URL

### Add Holidays to User's Calendar

```
POST /users/:userId/calendar/holidays
```

Request Body:
```json
{
  "countryCode": "US",
  "year": 2025,
  "holidays": ["New Year's Day", "Independence Day"]
}
```

Adds the specified national holidays of a country to the user's calendar. If no specific holidays are provided, all national holidays are added.

## Database Schema

The application uses MongoDB with the following main collections:

- **Users**: Stores user information
- **CalendarEvents**: Stores holiday events for users

## Error Handling

The API includes proper error handling for:
- External API failures
- Invalid country codes
- Network issues

## Dependencies

- @nestjs/common, @nestjs/core - NestJS framework
- @nestjs/axios - HTTP client for API requests
- rxjs - Reactive programming library for handling asynchronous operations

## Development

The project uses ESLint with NestJS-specific plugins to ensure code quality and adherence to best practices.
