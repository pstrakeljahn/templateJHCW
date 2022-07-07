<?php
if (isset($_GET['clientID'])) {
   $test = null;
   // VERNÜNFRIGE CONDITION
   if(strlen($_GET['clientID']) > 3) {
      $test = $_GET['clientID'];
   }
}

// SÄMTLICHE LOGIK BRAUCHEN WIR HIER!
?>

<!-- HIER BRAUCHEN WIR EINE SCHÖNE ÜBERSICHT -->
<br>
<b>HIER DIE ID: </b><?php echo $test ?? '-' ?>