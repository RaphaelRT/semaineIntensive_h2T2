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
    <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js" 
      type="text/javascript" charset="utf-8"></script>
    <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js" 
      type="text/javascript" charset="utf-8"></script>
    
    <link rel="stylesheet" href="style/reset.css">
    <link rel="stylesheet" type="text/css" 
      href="http://js.api.here.com/v3/3.0/mapsjs-ui.css" />
      <link rel="stylesheet" type="text/css" 
      href="style/style.css" />
    <title>Document</title>
</head>
<body>

    <div  class="mapContainer"></div>
    <div class="infoContainer">
      <div class="littleInfo">
        <div class="close">
          <span></span>
          <span></span>
        </div>
        <div class="content">
          <div class="left">
            <p class="distance"></p>
            <br>
            <p class="adress"></p>
            <br>
            <p class="gender"></p>
            <br>
            <p class="open"></p>
            </div>
          <div class="right">
              <p class="grade">jsdhfjhsd</p>
          </div>
      </div>
      <div class="moreInfoContainer">
        <a class="moreInfo" >
          <button class="moreInfo">Plus d'informations</button>
        </a>
      </div>     
    </div>
    </div>
    <div class="addComment">
        
          <h1>Add a comment :</h1>
          <form action="#" method="post">
              <div>
                  <input type="text" required name="input1" placeholder="Name"/>
              </div>
              <div>
                  <textarea required name="input2" cols="40" rows="5" placeholder="Comment"></textarea>
              </div>
              <div class="hidden">
                  <input class="hiddenInput" type="text" required name="input3"/>
              </div>
              <input type="submit">
          </form>
      </div>
    <div class="infoContainerComplete">
      <div class="mapFocused"></div>
      <p class="adress"></p>
      <p class="open"></p>
        <div class="rating"><!--
        -->      <input name="stars" id="e5" type="radio"></a><label for="e5">☆</label><!--
              --><input name="stars" id="e4" type="radio"></a><label for="e4">☆</label><!--
              --><input name="stars" id="e3" type="radio"></a><label for="e3">☆</label><!--
              --><input name="stars" id="e2" type="radio"></a><label for="e2">☆</label><!--
              --><input name="stars" id="e1" type="radio"></a><label for="e1">☆</label>
          </div>
      <h2>Comments</h2>
      <div class="comments">

      </div>
     
    </div>
    


  
    <script src="http://js.api.here.com/v3/3.0/mapsjs-ui.js" 
      type="text/javascript" charset="utf-8"></script>
      <script src="http://js.api.here.com/v3/3.0/mapsjs-mapevents.js" 
     type="text/javascript" charset="utf-8"></script>
    <script src="index.js" 
    type="text/javascript" charset="utf-8"></script>
</body> 
</html>


