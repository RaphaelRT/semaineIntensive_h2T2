<?php
include 'database.php';
include 'rate.php'; 

$query = $pdo->query('SELECT ROUND(AVG(rate),1) AS rate FROM `rating`');
$rating = $query->fetchAll();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <title>Comments</title>
</head>
<body>

<!-- All includes and php -->

<?php include 'infos.php'; 

    foreach($alerts['error'] as $_alerts): ?>
        <div class="alert error">
            <?= $_alerts ?>
        </div>
    <?php endforeach; ?>

    <?php foreach($alerts['success'] as $_alerts): ?>
        <div class="alert success">
            <?= $_alerts ?>
        </div>
    <?php endforeach; ?>

<!-- Html -->

<!-- Form -->
<div class="container">
    <h1>Add a comment :</h1>
        <form action="#" method="post">
            <div>
                <input type="text" required name="input1" placeholder="Name"/>
            </div>
            <div>
                <textarea required name="input2" cols="40" rows="5" placeholder="Comment"></textarea>
            </div>
            <input type="submit">
        </form>

        <form action="#" method="post">
            <div class="field">
                Rate
                <?php foreach($rate as $_rate): ?>
                    <br>
                    <label>
                        <input
                            type="radio"
                            required name="input3"
                            value="<?= $_rate ?>"
                        >
                        <?= $_rate ?>
                    </label>
                <?php endforeach; ?>
            </div>
            <input type="submit">
        </form>
</div>

<!-- Result -->
    <?= $rating[0]->rate ?>
    <h2>Comments</h2>
        <?php foreach($returnedData as $_returnedData): ?>
        <div class="comments">
            <div class="comments__title">
                <strong><?= $_returnedData->user ?></strong>
                <?= $_returnedData->date ?>
            </div>
            <div class="comments__content">
                <?= $_returnedData->message ?>
            </div>
        </div>
        <?php endforeach; ?>
    </body>
</html>