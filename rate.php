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


    // Query the data
    $query = $pdo->prepare("SELECT rate FROM `rating` WHERE id_marker = :id_marker");
    $query->bindValue('id_marker', $id);
    $query->execute();

    $returnedData = $query->fetchAll();
    $sum= [];

    for ($i=0; $i < sizeof($returnedData) ; $i++) { 
        
        $sum[] = $returnedData[$i]->rate;
    }
    
        $sumResult =array_sum($sum)/sizeof($sum);
        var_dump(json_encode($sumResult));
    
  

    die(json_encode($sumResult));