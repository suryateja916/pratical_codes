<!-- <?php
// Database connection
$con = mysqli_connect("localhost","root","","hrui_20");

if($_POST['type'] == "insert_data"){
    // Name
    $name = $_POST['name'];
    // Email
    $email = $_POST['email'];
    // Mobile
    $mobile = $_POST['mobile'];
    // Password
    $passs = $_POST['password'];
    echo $name;

   
    $insert_query = mysqli_query($con,"insert into users(name,mobile,email,password) values('$name','$mobile','$email','$passs')");

    if($insert_query){
        
        echo "Data inserted";
        
    }

}

?> -->
<?php
// Database connection
$con = mysqli_connect("localhost","root","","practise");

if($_POST['type'] == "insert_data"){
    // Name
    $nam = $_POST['name'];

    // email
    $emai = $_POST['email'];

    // password
    $pas = $_POST['pass'];
   
    echo $nam;
    echo $emai;
    echo $pas;
   
    $insert_query = mysqli_query($con,"insert into data_user(name,email,password) values('$nam','$emai','$pas')");

 
    if($insert_query){
        
        echo "Data inserted";
        
    }

}

?>