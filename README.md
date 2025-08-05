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
- Data aggregation from multiple external APIs:
  - [Date.nager.at API](https://date.nager.at/Api) - Country metadata and border information
  - [CountriesNow API](https://countriesnow.space/) - Population statistics and flag images

## Technology Stack

- **Backend**: NestJS framework (Node.js)
- **HTTP Client**: @nestjs/axios for API integrations
- **Linting**: ESLint with TypeScript and NestJS plugins
- **Code Style**: Prettier

## Setup Instructions

### Prerequisites

- Node.js (v16 or newer)
- npm (v8 or newer)

### Installation

1. Clone this repository
   ```bash
   git clone <repository-url>
   cd "Test country task"
   ```

2. Install dependencies
   ```bash
   cd task/server
   npm install
   ```

3. Run the development server
   ```bash
   npm run start:dev
   ```

### Available Scripts

- `npm run start` - Start the server in production mode
- `npm run start:dev` - Start the server in development mode with hot-reload
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run the test suite
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
