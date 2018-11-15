<?php

/* lib.twig.html */
class __TwigTemplate_e8b53872005b17af8132a99e9e095f498ae79b8247f1389d09077c67fe62ea0a extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<script type=\"text/javascript\" src=\"lib/js/jquery.js\"></script>
<script type=\"text/javascript\" src=\"lib/js/bootstrap.js\"></script>";
    }

    public function getTemplateName()
    {
        return "lib.twig.html";
    }

    public function getDebugInfo()
    {
        return array (  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "lib.twig.html", "D:\\Xampp\\htdocs\\github\\quest\\views\\lib.twig.html");
    }
}
