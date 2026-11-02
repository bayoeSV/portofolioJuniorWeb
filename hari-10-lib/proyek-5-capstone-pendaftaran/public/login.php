<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/bootstrap.php';

// Jika sudah login, langsung diarahkan ke halaman admin
if (!empty($_SESSION['admin_login'])) {
    redirect('admin.php');
}

$pdo = getConnection();
$galat = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    cekCsrf();
    
    // 1. Ambil input username dan password dari form
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    // 2. Cari data admin di database berdasarkan username
    // Pastikan Anda membuat fungsi ini di bootstrap/fungsi database Anda.
    // Contoh query di dalamnya: SELECT * FROM admin WHERE username = :username
    $admin = ambilAdminByUsername($pdo, $username);

    // 3. Verifikasi: cek apakah user ditemukan DAN password cocok dengan hash
    if ($admin && password_verify($password, $admin['password_hash'])) { 
        $_SESSION['admin_login'] = true;
        $_SESSION['admin_id'] = $admin['id']; // Opsional: simpan ID untuk sesi
        $_SESSION['username'] = $admin['username'];
        redirect('admin.php');
    } else {
        // Pesan disamarkan agar tidak memberi tahu apakah username yang salah atau password yang salah
        $galat['umum'] = 'Username atau Password salah.';
    }
}

$judul = 'Login Admin';
require __DIR__ . '/../templates/header.php';
?>
<h2>Login Admin</h2>

<?php $flash = ambilFlash(); if ($flash): ?>
    <p style="color: blue;"><?= e($flash) ?></p>
<?php endif; ?>
<?php if (isset($galat['umum'])): ?>
    <p style="color: red;"><?= e($galat['umum']) ?></p>
<?php endif; ?>

<form method="post">
    <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
    
    <!-- Tambahkan input untuk Username -->
    <p>
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" required autofocus>
    </p>

    <p>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" required>
    </p>
    <button type="submit">Login</button>
</form>

<?php require __DIR__ . '/../templates/footer.php'; ?>