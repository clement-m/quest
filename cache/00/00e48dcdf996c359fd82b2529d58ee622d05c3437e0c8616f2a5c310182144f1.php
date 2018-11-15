<?php

/* game.twig.html */
class __TwigTemplate_be47c6e2432b85db1fec6d41043bf8d979b376d80ed6020bf340bd5e75ab0642 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("master.twig.html", "game.twig.html", 1);
        $this->blocks = array(
            'game' => array($this, 'block_game'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "master.twig.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_game($context, array $blocks = array())
    {
        // line 4
        echo "\t";
        echo twig_escape_filter($this->env, ($context["name"] ?? null), "html", null, true);
        echo "
\t<div class=\"wrapper\">
\t\t<canvas id=\"canvas\" class=\"canvas\" height=\"700px\" width=\"1900px\">Error</canvas>
\t</div>
";
    }

    public function getTemplateName()
    {
        return "game.twig.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 4,  32 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "game.twig.html", "D:\\Xampp\\htdocs\\github\\quest\\views\\game.twig.html");
    }
}
