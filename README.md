# Calculator
This is a Progressive Web App that allows you to calculate percentage, convert units (metric/imperial), and calculate elapsed and future time. The UI is built with React.js and React Router, the layout is fully responsive, and the app is optimized to work equally well as a web app and a PWA on touch devices.


## In this document:
1. [App URL](#app-url)
2. [App screenshots](#screenshots)
3. [Technologies used](#technologies-used)
4. [Accessibility considerations](#accessibility-considerations)
5. [Stumbling and learning points](#stumbling-and-learning-points)
6. [Future additions](#future-additions)


## App URL
[https://calculator-ajo-b.netlify.app/](https://calculator-ajo-b.netlify.app/)


## App screenshots
![Percentage calculation route](/src/assets/percentage-calculation-route.png)
*The percentage calculation route, showing two of the four calculators.*

![Unit conversion route](/src/assets/unit-conversion-route.png)
*The unit conversion route, showing the length conversion element.*

![Time calculation route](/src/assets/time-calculation-route.png)
*The time calculation route, showing the elapsed time calculator and the detailed result, i.e. the passed time in years, months and days and the weekday of the date selected by the user.*

## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/)


## Accessibility considerations
1. All colors pass a WCAG AAA contrast check with a contrast ratio of at least 7:1.
2. All icons that serve as links/buttons have aria-labels in order to provide technologies such as screen readers with textual information about the functionality of the icon in question.
3. Most labels on form elements are visually hidden but accessible to screen readers and similar technologies. These visually hidden label texts provide explicit and exact information about the functionality of the form element in question. Visible on the screen are shorter texts giving the necessary information to any user navigating effortlessly with their vision.
4. Keyboard navigation is possible on all devices, including touch devices.


## Stumbling and learning points
### Writing clean and reusable code:
The code of this app is like a puzzle, and each part of the app is built with several reusable components that are put together in different ways depending on the desired UI. Futhermore, the majority of the calculations are performed in utility functions that are reused for several different calculations. A few highlights of my leaning points:
- I created my own component library containing both form element and calculator/converter element components.
- I created custom hooks to handle conditional rendering based on window width and enable the closing of the hamburger menu on click anywhere outside the menu itself
- I created a number of utility fuctions; some handle state management of form data and the calculations performed based on user input; others are used for e.g. capitalizing first letter in a string, formatting results of the calculations and limiting the number of decimal places, tracking the user's window width and changing the UI accordingly.
- I managed to write less than 500 lines of CSS! A few classes defining various base layouts are reused across components/elements and combined with each other to achieve the desired layout of each component/element. This ensures a good readability and maintainability of the CSS code.

### Working with the JavaScript Date constructor
In order to build accurate time calculators for both elapsed and future time, I've worked with the JS Date constructor. Calculating the elapsed/future time in years, based on user input and with today's date as the starting point, is manageable with the right documentation at hand. Though, getting the months and days correct as well is far more challenging. While working on this project, I've dealt with e.g.:
- Various getter and setter functions native to the Date constructor
- A JS quirk that results in all positive two digit years being converted to a 20th century year. For instance, the year 75 is converted to 1975, yet -75 stays -75. The calculation of elapsed time takes this into account and, through various workarounds, allows the user to accurately calculate elapsed time also from the years 0-99 up till today

### Turning a web app into a PWA:
This is my very first Progressive Web App. Turning the initial web app into a PWA required a lot of hard work. Along the way, I've struggled with and learned how to e.g.:
- Create a sitemap
- Create a web manifest
- Create a robots.txt file
- Generate custom fav icons and ensure that icons of different sizes are available for various devices and types of OS
- Set the PWA theme color and update it according to the user's choice of color mode, fetched either from the user's OS or from their previous selection stored in local storage


## Future additions
Now that this app is up and running, here are some of my ideas to future improvements and additions:
- Custom form elements that allow even better custom styling of these elements
- Adding week numbers to the time calculators; displaying the week number of the selected date in the detailed result