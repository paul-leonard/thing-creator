# thing-creator
You have things? This React thing tracker may still not be too much help to you!

## Lab Submission Pull Requests
[Lab42: React 2](https://github.com/paul-leonard/thing-creator/pull/1)

## Release Info
**Author**: Paul Leonard
**Version**: 0.9.0

## Overview
This React developed webpage displays a list of things.  You can add more things to the list.  The total things counter will increase and your thing will also be shown on the list.

## Architecture
This webpage uses React to create a list of things and a count of those things.  It contains a form that is controlled by React.  When a new thing is entered in the form and the submit button is clicked, an even handler sets the new state and updates both the counter and the list.  The state of the things is stored in an array of JS objects within the App Component.  The state of things is passed to the Header and ThingList Components for usage.  The Footer Component is also called by the App Component and renders content, but receives no props.

## Change Log
**0.9.0** 1-5-2021 - Initial beta release
**1.0.0** 1-TBD-2021 - Initial release

## Credits and Collaborations
- collaborated with Mark Bell
- [React Forms Tutorial](https://reactjs.org/docs/forms.html)

## Required Features
- [x] Create a ReactJS web application that displays a list of things, and allows creating new things.
- [x] Create a web app with a top level App component
- [x] App component should…
- [x] have thingList data stored in its state.
- [x] render 3 nested components
- [x] Header
- [x] ThingList
- [x] Footer
- [x] thingList should be an array of plain old JavaScript objects (aka POJO) that represent a thing that has a name.
- [x] E.g. {name:’rake’}
- [x] Header component should…
- [x] receive a things count as a prop
- [x] display a heading
- [x] display the current count of things
- [x] ThingList component should…
- [x] receive a list of things as a prop
- [x] receive a function to call when a new thing is created.
- [x] Display an unordered list composed of ThingItem components
- [x] Display a form that allows creation of a thing
- [x] When user creates new thing the rest of application should update appropriately.
- [x] Header thing count should update
- [x] ThingList should add a new ThingItem to end of list
- [x] ThingItem component should…
- [x] receive a name as a prop
- [x] Footer component should…
- [x] Display some placeholder text (e.g. lorem ipsum)








***** **Below is React Readme Help** *****


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
