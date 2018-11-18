<?php

require_once 'vendor/autoload.php';

$loader = new Twig_Loader_Array();
$loader = new Twig_Loader_Filesystem('views');
$twig = new Twig_Environment($loader);
//$twig = new Twig_Environment($loader, array(
//    'cache' => 'cache',
//));
echo $twig->render('game.twig.html');