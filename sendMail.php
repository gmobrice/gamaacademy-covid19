<?php

if (isset($_POST))
{   
    $post = file_get_contents("php://input");

    $cURLConnection = curl_init("https://prod-26.brazilsouth.logic.azure.com:443/workflows/958a2d35ad634c259b02013c0d2d2063/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AD1NYWFlmHRUe_tURXIFIzzEg8sHnrZuFehAZhU6VRM");
    curl_setopt($cURLConnection, CURLOPT_POSTFIELDS, $post);
    curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

    $apiResponse = curl_exec($cURLConnection);
    curl_close($cURLConnection);
}

?>