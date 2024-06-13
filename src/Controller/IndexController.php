<?php

namespace App\Controller;

use App\Library\Template;

/**
 * IndexController
 */
class IndexController
{
    /**
     * @return void
     * @throws \Exception
     */
    public function indexAction()
    {
        $template = new Template();
        echo $template->render('index', []);
    }
}
