<html>
<body>

<?php
  $name = test($_GET["clientname"])
  $email = test($_GET["clientemail"])
  $phone = test($_get["clientnumber"])

  
  function test($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>

Welcome <?php echo $name ?><br>
Your email address is: <?php echo $email ?><br>
your phone number is: <?php echo $phone ?>

</body>
</html>