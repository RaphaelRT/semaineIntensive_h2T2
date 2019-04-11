<?php


    include 'database.php';
    $rate = empty($_GET['rate']) ? '' : $_GET['rate'];
    $id = empty($_GET['id']) ? '' : $_GET['id'];



    // Include in the database
    $prepare = $pdo->prepare('
        INSERT INTO
            rating (rate,id_marker)
        VALUES
            (:rate,:id_marker)
        ');
    $prepare->bindValue('rate', $rate);
    $prepare->bindValue('id_marker', $id);
    $prepare->execute();


    
    $returnedData = $prepare->fetchAll();
    die(json_encode($returnedData));