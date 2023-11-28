# Calculator
A progressive web app that allows you to calculate percentage, convert units (metric/imperial), and calculate elapsed and future time. The UI is built with React.js and React Router, the layout is fully responsive, and the app is optimized to work equally well as a web app and a PWA on touch devices.


## In this document:
1. [App URL](#app-url)
2. [Technologies used](#technologies-used)
3. [Accessibility considerations](#accessibility-considerations)
4. [Stumbling and learning points](#stumbling-and-learning-points)
5. [Future additions](#future-additions)


## App URL
[https://calculator-ajo-b.netlify.app/](https://calculator-ajo-b.netlify.app/)


## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/)


## Accessibility considerations
1. All colors pass a WCAG AAA contrast check with a contrast ratio of at least 7:1.
2. All icons that serve as links/buttons have aria-labels in order to provide technologies such as screen readers with textual information about the functionality of the icon in question.
3. Most labels on form elements are visually hidden but accessible to screen readers and similar technologies. These visually hidden label texts provide explicit and exact information about the functionality of the form element in question. Visible on the screen are shorter texts in <p> tags giving the necessary information to any user navigating effortlessly with their vision.
4. Keyboard navigation is possible on all devices, including touch devices.


## Stumbling and learning points
1. Writing clean and reusable code:
The code of this app is like a puzzle, and each part of the app is built of several reusable components that are put together in different ways depending on the desired UI. Futhermore, the majority of the calculations are performed in utility functions that are reused for several different calculations. A few highlights of my leaning points:
- I created my own component library containing both form element and calculator/converter element components.
- I created a number of utility fuctions; some handle state management of form data and the calculations performed based on user input; others are used for e.g. capitalizing first letter in a string, formatting results of the calculations and limiting the number of decimal places, tracking the user's window width and changing the UI accordingly.
- I managed to write less than 500 lines of CSS! A few classes defining various base layouts are reused across components/elements and combined with each other to achieve the desired layout of each component/element. This ensures a good readability and maintainability of the CSS code.

2. Turning a web app into a PWA:
This is my very first Progressive Web App. Turning the initial web app into a PWA required a lot of hard work. Along the way, I've struggled with and learned how to e.g.:
- Create a sitemap
- Create a web manifest
- Create a robots.txt file
- Generate custom fav icons
- Set the PWA theme_color and update it according to the user's choice of color mode, fetch either from the user's OS or from their previous selection stored in local storage


## Future additions
Now that this app is up and running, it is time to consider what could be improved or added to the app in the future
- Custom form elements in order to allow even better custom styling of these elements
- Adding week number to the time calculators