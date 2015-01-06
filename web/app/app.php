<?php require_once '../vendor/autoload.php'; ?>


<?php

//we create a loader object to which we pass the path to the folder that contains our template files

$loader = new Twig_Loader_Filesystem('../views/'); ?>


<?php

// We create an environment object that stores configuration

$twig = new Twig_Environment($loader);

?>


<?php

    class Box
    {

        public $shape = 'square';

        public function displayShape() {
            return $this->shape;
        }
    }
    // Render method of the environment object
    // loads the template file passed as the first argument
    // and renders it with variables passed as the second argument.

    echo $twig->render('signin.html.twig',

    array('text' => 'Hello world!'));


?>