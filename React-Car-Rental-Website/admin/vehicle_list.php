<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

?>

<?php
include('vendor/inc/config.php');

$sql = "SELECT * FROM tms_vehicle";

$result = $mysqli->query($sql);

$dataset = [];

while ($row = $result->fetch_assoc()) {
    $dataset[] = $row;
}

echo json_encode($dataset);


?>