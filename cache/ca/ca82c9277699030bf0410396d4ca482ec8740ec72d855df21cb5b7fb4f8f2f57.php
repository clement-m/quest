<?php

/* loader.twig.html */
class __TwigTemplate_f5ee0a64789759e1336560c081915f4d4d9c06ff6ad00363aeb5e59b9fffd8be extends Twig_Template
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
        echo "<script type=\"text/javascript\" src=\"src/js/ClassUnit.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassUnits.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassBall.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassKeyboard.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassSkeleton.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassPlayer.js\"></script>
<script type=\"text/javascript\" src=\"src/js/ClassGame.js\"></script>
<script type=\"text/javascript\" src=\"quest.js\"></script>";
    }

    public function getTemplateName()
    {
        return "loader.twig.html";
    }

    public function getDebugInfo()
    {
        return array (  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "loader.twig.html", "D:\\Xampp\\htdocs\\github\\quest\\views\\loader.twig.html");
    }
}
