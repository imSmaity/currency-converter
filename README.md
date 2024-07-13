# Currency Converter Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies for the project.

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

## Project Requirements

### Features

1. **Conversion**: Convert an amount from one currency to another using real-time exchange rates.
2. **Currency List**: Display a list of available currencies for selection in both the source and target fields.
3. **Date Selection**: Allow the user to change the date for fetching historical exchange rates.

## Architecture

- **API**: Use the ExchangeRate API to get real-time and historical exchange rates.
- **Components**:
  - Input field
  - Date selector
  - Currency selector
  - Button
  - Text display
  - Loading
- **React States**: Manage the input data and API responses.

## Technology Stack

- HTML
- CSS
- Typescript
- React

## User Interface Design

- Single-page application with a home screen only.

## Non-functional Requirements

- **Performance**: Ensure fast load times.
- **Usability and Scalability**: Provide an intuitive user interface and allow for future feature expansions.

## Deployment Architecture

Deploy the application using GitHub Pages.

## Deployment Link

The application is deployed at [Currency Converter Application](https://imsmaity.github.io/currency-converter/).

## APIs

- **Get all currencies**: `https://v6.exchangerate-api.com/v6/API-KEY/codes`
- **Country flag**: `https://api.exchangerate-api.com/flag-images/AM.gif`
- **Get historical data**: `GET https://v6.exchangerate-api.com/v6/API-KEY/history/USD/YEAR/MONTH/DAY`
