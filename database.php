<?php

<<<<<<< HEAD
define('DB_HOST', 'localhost');
define('DB_PORT', '3308');
define('DB_NAME', 'poop_advisor');
define('DB_USER', 'root');
define('DB_PASS', 'root');

try {
    $pdo = new PDO(
        'mysql:dbname=' . DB_NAME . ';host=' . DB_HOST . ';port=' . DB_PORT,
        DB_USER,
        DB_PASS
    );

    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
} catch (PDOException $e) {
    die('Cannot connect');
}
=======
    define('DB_HOST', 'localhost');
    define('DB_PORT', '3308');
    define('DB_NAME', 'poop_advisor');
    define('DB_USER', 'root');
    define('DB_PASS', '');

    try
    {
        $pdo = new PDO(
            'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT,
            DB_USER,
            DB_PASS
        );

        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    }
    catch(PDOException $e)
    {
        die('Cannot connect');
}
>>>>>>> 92e8adf3a95f3d9e10fb66f394573cb100c55f68
