# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a Typescript template.

## Steps to run application.
1. Steps (frontend)
   * cd `frontend`
   * run yarn
   * yarn start

2. Unit Tests
    * run `yarn test`

Due to time constraints the app would require the following, improvements

### Improvements
* Adding unit test for gif-container, components, etc.
* Implement ErrorBoundary for application
* Replacing carousel package with a custom page slider

### How the app works
* On starting the application it fetches a list of trending gif images with fetch limit set to 20
* Subsequently a search input exist, which allows searching of gif images against the API
* The search results is gradually rendered with an infinite scroll
* Each Gif image renders a modal when click
* The modal contains a slider which renders different renditions of the selected image
* There are no thumbnails-still-images for the list of trending image

### Architectural decision
* Styled-components with tailwind is used for UI design, twin-macro is used to combined both libraries efficiently
* Redux-ToolKit is used for state management due to simplicity and scalability.
* Alternatives include creating custom hooks.

### side notes
The API-key is stored in `.env` file which has been deliberately omitted from `.gitignore`
It took approx. 4 days to complete this task
