<?php

    include 'database.php';
 
    $id = empty($_GET['id']) ? '' : $_GET['id'];

    // Query the data
    // $query = $pdo->prepare("SELECT user,message, DATE_FORMAT(date,\'Le %d/%m à %hh%i\') AS date ,id_marker FROM comments WHERE id_marker = :id_marker");
    $query = $pdo->prepare("SELECT user,message,date FROM `comments` WHERE id_marker = :id_marker");
    $query->bindValue('id_marker', $id);
    $query->execute();
    
    $returnedData = $query->fetchAll();
    die(json_encode($returnedData));
   
    