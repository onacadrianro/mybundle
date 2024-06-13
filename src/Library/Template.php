<?php

namespace App\Library;

class Template
{
    /**
     * @param $template
     * @param $data
     * @return false|string
     * @throws \Exception
     */
    public function render($template, $data = [])
    {
        $templatePath = __DIR__ . '/../View/templates/' . $template . '.php';
        if (file_exists($templatePath)) {
            ob_start();
            extract($data);
            include $templatePath;
            return ob_get_clean();
        }

        throw new \Exception("Template {$template} not found!");
    }
}
