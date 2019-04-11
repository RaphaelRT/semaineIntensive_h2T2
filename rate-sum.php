<?php
    include 'database.php';
    $rate = empty($_GET['rate']) ? '' : $_GET['rate'];
    $id = empty($_GET['id']) ? '' : $_GET['id'];

    // Query the data
    $query = $pdo->prepare("SELECT rate FROM `rating` WHERE id_marker = :id_marker");
    $query->bindValue('id_marker', $id);
    $query->execute();

    $returnedData = $query->fetchAll();
    $sum= [];

    for ($i=0; $i < sizeof($returnedData) ; $i++) { 
        $sum[] = $returnedData[$i]->rate;
    }   
        $sumResult =[];
        if (array_sum($sum) == 0) {
            $sumResult['sum'] = 0;
        }
        else {
            $sumResult['sum'] = array_sum($sum)/sizeof($sum);
        }
        
        $sumResult['size'] = sizeof($returnedData)+1;
        $sumResult[]= $sumResult;
        
    die(json_encode($sumResult));