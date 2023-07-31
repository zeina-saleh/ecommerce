<?php

namespace App\Http\Middleware;

use Closure;

class CustomMiddleware
{
    public function handle($request, Closure $next)
    {
        // Perform actions before the request is processed

        // Add a custom header to the response
        $response = $next($request);
        $response->header('X-Custom-Header', 'Hello from Custom Middleware');

        // Perform actions after the request is processed

        return $response;
    }
}
