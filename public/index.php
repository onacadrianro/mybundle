<?php

require '../vendor/autoload.php';

use App\Library\Router;

// Set error reporting
error_reporting(E_ERROR | E_PARSE); // Report only critical errors and parse errors
ini_set('display_errors', 10); // Do not display errors to users
ini_set('log_errors', 1); // Log errors to a file
ini_set('error_log', '/var/log/error.log'); // Specify the error log file path

// Custom error handler
set_error_handler(function($err_no, $err_str, $err_file, $err_line) {
    error_log("Error: [$err_no] $err_str in $err_file on line $err_line");
    return true; // Prevent the default PHP error handler from running
});
try {
    // Load routes from config
    $routes = require_once __DIR__ . '/../config/routes.php';

    // Load configuration
    $config = require_once __DIR__ . '/../config/config.php';

    // Define routes
    $router = new Router($config);

    // Get the requested URI
    $requestUri = $_SERVER['REQUEST_URI'];

    // Dispatch the request
    $router->dispatch($requestUri, $routes);

} catch (Exception $e) {
    error_log("Exception caught in index.php: " . $e->getMessage());
    // Display user-friendly error page
    header("HTTP/1.1 500 Internal Server Error");
    echo "An error occurred. Please try again later.";
}