# Build Your Own Bundle

1. Simplified "Build Your Own Bundle" Interface (Total Time: 1 Hour)
   ● Objective: Implement a basic "Build Your Own Bundle" feature using HTML,
   CSS, and JavaScript/TypeScript.
   ● Tasks:
   ● Design Implementation (20 Minutes): Create a simple HTML page that
   mimics the basic layout of the Figma design, create about 4 medal
   cards only.
   ● JavaScript/TypeScript Functionality (40 Minutes): Write scripts to allow
   users to select items for their bundle. This could be as simple as
   clicking items to add them to a list.

● Deliverables: A single HTML page with embedded CSS and
JavaScript/TypeScript that demonstrates the bundle selection process.

2. Order Summary Page (Total Time: 30 Minutes)
   ● Objective: Generate a basic order summary based on user selections.
   ● Tasks:
   ● HTML/CSS Page (10 Minutes): Create a simple page layout for
   displaying order summaries.

● JavaScript/TypeScript Logic (20 Minutes): Script to calculate and
display the order summary, including items selected and total cost.

● Deliverables: An HTML page with order summary functionality.

3. Responsiveness Check (Total Time: 30 Minutes)
   ● Objective: Ensure the created pages are responsive and display correctly on
   different screen sizes.
   ● Tasks:
   ● Use CSS media queries to adjust layouts for mobile and desktop views.
   ● Test the pages on different screen sizes to ensure usability.
   ● Deliverables: The same HTML pages, verified to be responsive.


This project is a PHP application following the MVC (Model-View-Controller) architecture. It includes HTML, CSS, and JavaScript/TypeScript features for creating a web application.


## Introduction

This project is a PHP web application built with the MVC architecture. It provides a structured approach to developing web applications, separating concerns into Model, View, and Controller components. The project includes HTML templates, CSS stylesheets, and JavaScript/TypeScript scripts for creating dynamic and interactive user interfaces.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Set up a web server (e.g., Apache, Nginx) to serve the project files from the `public` directory.
4. Configure the web server to route requests through the `public/index.php` file.
5. Ensure PHP is installed and configured on your system.
6. Run `composer install` to install PHP dependencies. (composer autoloader)
7. Compile TypeScript files to JavaScript using `tsc` command if necessary.
8. In config/config.php set base_url
9. Access the application in your web browser.


## Implementation Details

### HTML

The HTML templates are located in the `src/View/templates` directory. They represent the various views of the application, including the main index page, summary page, and any other pages. Each HTML file contains the necessary structure and placeholders for dynamic content rendering.

### CSS

CSS stylesheets are located in the `public/frontend/css` directory. They provide styling for the HTML elements, ensuring a visually appealing and responsive user interface. The CSS follows best practices and may include custom styles as well as styles from external libraries or frameworks.

### JavaScript/TypeScript

JavaScript/TypeScript scripts provide interactivity and dynamic behavior to the application. They are located in the `public/frontend/js` directory. JavaScript scripts handle user interactions, form validations, dynamic content updates, and other client-side functionality. TypeScript is a superset of JavaScript that offers static typing and other advanced features for larger applications.
The TypeScript scripts in this project utilize the browser's local storage for managing the cart items. When a user adds or removes items from the cart, the changes are reflected in the local storage. This ensures that the cart state persists even when the user navigates to different pages or refreshes the browser.