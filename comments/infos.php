<?php

$title = 'My Website';

// Error and success messages
$alerts = [
    'error' => [],
    'success' => [],
];

if(!empty($_POST))
    {
        // enter the data from your POST here
        $data = [
            // Setup of the data of the form
            'user' => htmlspecialchars($_POST['input1']),
            'message' => htmlspecialchars($_POST['input2']),
        ];
        $text = $data['message'];
        $checkurl = "http://api1.webpurify.com/services/rest/?method=webpurify.live.replace&api_key=ca5a643c6ef65b1e3d833b798d2f9130&text=$text&replacesymbol=*&format=json".urlencode('test test test');
        $data['message'] = simplexml_load_file($checkurl,'SimpleXMLElement', LIBXML_NOCDATA);
        // Setup of conditions in case of errors
        if(empty('user'))
        {
            $alerts['error'][] = 'Missing name';
        }
        else if(strlen('user') < 2)
        {
            $alerts['error'][] = 'Name too short';
        }

        if(empty('message'))
        {
            $alerts['error'][] = 'Missing comment';
        }

        // Include in the database
        $prepare = $pdo->prepare('
            INSERT INTO
                comments (user, message)
            VALUES
                (:user, :message)
        ');
        $prepare->bindValue('user', $data['user']);
        $prepare->bindValue('message', $data['message']->text);
        $prepare->execute();

        $alerts['success'][] = 'User registered';
    }

    // Query the data
    $query = $pdo->query('SELECT user,message, DATE_FORMAT(date,\'Le %d/%m à %hh%i\') AS date FROM comments');
    $returnedData = $query->fetchAll();