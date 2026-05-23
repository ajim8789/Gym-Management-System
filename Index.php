<?php
session_start();
include('dbcon.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Gym System Admin</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
    <link rel="stylesheet" href="css/matrix-style.css">
    <link rel="stylesheet" href="css/matrix-login.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="font-awesome/css/all.min.css">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">

    <style>
        body {
            background: linear-gradient(135deg, #111, #1f1f1f);
        }

        #loginbox {
            width: 400px;
            margin: 100px auto;
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .normal_text {
            background: #0d6efd;
            padding: 20px;
            text-align: center;
        }

        .normal_text img {
            width: 90px;
        }

        .main_input_box {
            display: flex;
            align-items: center;
            margin: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }

        .main_input_box span {
            padding: 12px;
            color: #fff;
        }

        .bg_lg {
            background: #198754;
        }

        .bg_ly {
            background: #dc3545;
        }

        .main_input_box input {
            border: none;
            width: 100%;
            padding: 12px;
            outline: none;
        }

        .form-actions {
            padding: 20px;
        }

        .btn-info {
            background: #0d6efd;
            border: none;
            padding: 12px;
            font-size: 16px;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn-info:hover {
            background: #084298;
            transform: scale(1.02);
        }

        .alert {
            width: 400px;
            margin: 20px auto;
        }
    </style>
</head>

<body>

<div id="loginbox">

    <form id="loginform" method="POST" class="form-vertical" action="">

        <div class="control-group normal_text">
            <h3>
                <img src="img/icontest3.png" alt="Logo">
            </h3>
        </div>

        <!-- Username -->
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="bg_lg">
                        <i class="fas fa-user"></i>
                    </span>

                    <input type="text" name="user" placeholder="Username" required>
                </div>
            </div>
        </div>

        <!-- Password -->
        <div class="control-group">
            <div class="controls">
                <div class="main_input_box">
                    <span class="bg_ly">
                        <i class="fas fa-lock"></i>
                    </span>

                    <input type="password" name="pass" placeholder="Password" required>
                </div>
            </div>
        </div>

        <!-- Login Button -->
        <div class="form-actions center">
            <button type="submit"
                    class="btn btn-block btn-large btn-info"
                    name="login">
                Admin Login
            </button>
        </div>

    </form>
</div>

<?php

if (isset($_POST['login'])) {

    $username = mysqli_real_escape_string($con, $_POST['user']);
    $password = mysqli_real_escape_string($con, $_POST['pass']);

    // MD5 Password
    $password = md5($password);

    $query = mysqli_query(
        $con,
        "SELECT * FROM admin 
         WHERE username='$username' 
         AND password='$password'"
    );

    $row = mysqli_fetch_array($query);

    $num_row = mysqli_num_rows($query);

    if ($num_row > 0) {

        $_SESSION['user_id'] = $row['user_id'];

        echo "
        <script>
            alert('Login Successful');
            window.location='admin/index.php';
        </script>
        ";

    } else {

        echo "
        <div class='alert alert-danger alert-dismissible fade show' role='alert'>
            <strong>Invalid Username or Password!</strong>

            <button type='button'
                    class='btn-close'
                    data-bs-dismiss='alert'>
            </button>
        </div>
        ";
    }
}
?>

<!-- JS -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

</body>
</html>