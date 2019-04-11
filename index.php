<?php 
    include 'database.php';
    include 'new-comments.php'
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, 
      width=device-width" />
    <link rel="stylesheet" href="style/reset.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://js.api.here.com/v3/3.0/mapsjs-ui.css" />
    <link rel="stylesheet" type="text/css" href="style/style.css" />
    <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js" type="text/javascript" charset="utf-8"></script>
    <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js" type="text/javascript" charset="utf-8"></script>
    <title>Poop Advisor</title>
</head>

<body>
    <div class="loading">
        <img src="img\Spinner-1s-200px.gif" alt="">
    
    </div>
    <div class="mapContainer"></div>
    <div class="infoContainer">
        <div class="littleInfo">
            <div class="close">
                <span></span>
                <span></span>
            </div>
            <div class="content">
                <div class="left">
                    <p class="distance"></p>
                    <p class="adress"></p>
                    <p class="open"></p>
                </div>
                <div class="right">
                    <p class="grade"></p>
                    <a class="go">GO</a>
                </div>
            </div>
            <div class="moreInfoContainer">
                <a class="moreInfo">
          <button class="moreInfo">Plus d'informations</button>
        </a>
            </div>
        </div>
    </div>
    <div class="addComment">
            <div class="closeComment">
                <span></span>
                <span></span>
            </div>

        <h1 class="addComment__title">Add a comment :</h1>
        <div class="addComment__form">
            <form action="#" method="post">
                <div>
                    <input type="text" required name="input1" placeholder="Name" class="addComment__txt" />
                </div>
                <div>
                    <textarea required name="input2" cols="40" rows="5" placeholder="Comment" class="addComment__txt"></textarea>
                </div>
                <div class="hidden">
                    <input class="hiddenInput" type="text" required name="input3" />
                </div>
                <input type="submit" class="addComment__submit">
            </form>
        </div>
    </div>
    <div class="infoContainerComplete">
        <div class="header">
            <h3>PoopAdvisor</h3>
                <div class="close closeInfoContainer">
                    <span></span>
                    <span></span>
                </div>
        </div>
        
        <p class="adress"></p>
        <p class="open"></p>
        <a class="go">GO</a>
        <div class="rate">
        </div>
        
        <div class="rating">
            <input name="stars" id="e5" type="radio"><label class='js-5' for="e5">☆</label>

            <input name="stars" id="e4" type="radio"><label class='js-4' for="e4">☆</label>

            <input name="stars" id="e3" type="radio"><label class='js-3' for="e3">☆</label>

            <input name="stars" id="e2" type="radio"><label class='js-2' for="e2">☆</label>

            <input name="stars" id="e1" type="radio"><label class='js-1' for="e1">☆</label>
        </div>
        <button class="addCommentButton">Commenter</button>
        <h2>Comments</h2>
        <div class="comments">

        </div>

    </div>




    <script src="http://js.api.here.com/v3/3.0/mapsjs-ui.js" type="text/javascript" charset="utf-8"></script>
    <script src="http://js.api.here.com/v3/3.0/mapsjs-mapevents.js" type="text/javascript" charset="utf-8"></script>
    <script src="index.js" type="text/javascript" charset="utf-8"></script>
</body>

</html>