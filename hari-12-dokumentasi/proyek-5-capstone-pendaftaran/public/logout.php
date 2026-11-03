<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';

unset($_SESSION['username']);
unset($_SESSION['admin_id']);
setFlash('Anda berhasil logout.');
redirect('login.php');