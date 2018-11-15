<?php

/* master.twig.html */
class __TwigTemplate_ca444e2f2e5b2bb1409808f3ee0ff24d505059974b60cb47465de9fa3e499bdf extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
            'game' => array($this, 'block_game'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
\t<title>Quest</title>
\t";
        // line 5
        $this->loadTemplate("lib.twig.html", "master.twig.html", 5)->display($context);
        // line 6
        echo "\t";
        $this->loadTemplate("src.twig.html", "master.twig.html", 6)->display($context);
        // line 7
        echo "\t";
        $this->loadTemplate("loader.twig.html", "master.twig.html", 7)->display($context);
        // line 8
        echo "</head>
<body>
\t";
        // line 10
        $this->displayBlock('game', $context, $blocks);
        // line 11
        echo "</body>
</html>";
    }

    // line 10
    public function block_game($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "master.twig.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  49 => 10,  44 => 11,  42 => 10,  38 => 8,  35 => 7,  32 => 6,  30 => 5,  24 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "master.twig.html", "D:\\Xampp\\htdocs\\github\\quest\\views\\master.twig.html");
    }
}
