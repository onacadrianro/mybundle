<?php

namespace App\Library;

class Router
{
    /** @var array $routes */
    private $routes = [];

    /**
     * @param $config
     */
    public function __construct($config)
    {
        $this->baseUrl = rtrim($config['base_url'], '/');
    }

    /**
     * @param $route
     * @param $handler
     * @return void
     */
    public function add($route, $handler)
    {
        $this->routes[$route] = $handler;
    }

    /**
     * @param $requestUri
     * @param $routes
     * @return void
     */
    public function dispatch($requestUri, $routes)
    {
        // Strip query string from the URI
        if (($pos = strpos($requestUri, '?')) !== false) {
            $requestUri = substr($requestUri, 0, $pos);
        }

        // Remove the base path from the request URI
        $requestPath = str_replace($this->baseUrl, '', $requestUri);

        // Match the route
        if (array_key_exists($requestPath, $routes)) {
            $route = $routes[$requestPath];
            $controllerName = 'App\\Controller\\' . $route['controller'];
            $actionName = $route['action'];

            // Instantiate the controller
            $controller = new $controllerName();

            // Call the action method
            if (method_exists($controller, $actionName)) {
                $controller->$actionName();
            } else {
                // Handle 404 - Action method not found
                http_response_code(404);
                echo '404 - Not Found';
            }
        } else {
            // Handle 404 - Route not found
            http_response_code(404);
            echo '404 - Not Found';
        }
    }
}
