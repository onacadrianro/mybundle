<?php

namespace App\Controller;

use App\Library\Template;

/**
 * OrderSummaryController
 */
class OrderSummaryController
{
    /**
     * @return void
     * @throws \Exception
     */
    public function indexAction()
    {
        $template = new Template();
        echo $template->render('summary', []);
    }
}
