<?php

// Error and success messages
$alerts = [
    'error' => [],
    'success' => [],
];

// Rating
$rate = [
    '1',
    '2',
    '3',
    '4',
    '5',
];

// Default rating


if(!empty($_POST))
    {
        // enter the data from your POST here
        $data = [
            // Setup of the data of the form
            'rate' => $_POST['input3'],
        ];

        // Include in the database
        $prepare = $pdo->prepare('
            INSERT INTO
                rating (rate)
            VALUES
                (:rate)
        ');

        $prepare->execute($data);

        $alerts['success'][] = 'Thanks for rating';
    }
    else
    {
        $_POST['rate'] = '';
    }

    // Query the data
    $query = $pdo->query('SELECT rate FROM rating');
    $returnedData = $query->fetchAll();