<?php
//     $url='https://opendata.paris.fr/api/datasets/1.0/sanisettesparis';
//     $data= file_get_contents($url);
//     $sanisettes= json_decode($data);
//    for ($i=0; $i < sizeof($sanisettes->metas->geographic_area->coordinates[0]); $i++) { 
//        $sanisettesCoords[]=$sanisettes->metas->geographic_area->coordinates[0][$i];
       
//    };
  
//    echo json_encode($sanisettesCoords);
    $url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=sanisettesparis&rows=500&facet=arrondissement&facet=horaires_ouverture';
    $data = file_get_contents($url);
    $data = json_decode($data);
    $toilets = [];
    for ($i=0; $i < sizeof($data->records); $i++) {
        $toilet = [];
        $toilet['id'] = $data->records[$i]->recordid;
        $toilet['coordinates'] = $data->records[$i]->fields->geom_x_y;
        $toilet['address'] = [empty($data->records[$i]->fields->numero_voie) ?'':$data->records[$i]->fields->numero_voie, $data->records[$i]->fields->nom_voie, $data->records[$i]->fields->arrondissement];
        $toilet['schedules'] = $data->records[$i]->fields->horaires_ouverture;
        $toilet['id'] = $data->records[$i]->recordid;

        $toilets[] = $toilet;
    }

    die(json_encode($toilets));





