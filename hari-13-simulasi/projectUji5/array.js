function bandingkanArray(array1, array2) {
    // Periksa apakah panjang kedua array sama
    if (array1.length !== array2.length) {
        return false;
    }

    // Bandingkan setiap elemen
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    // Jika semua elemen sama
    return true;
}

// Contoh pengujian
console.log(bandingkanArray([1, 2, 3], [1, 2, 3]));
console.log(bandingkanArray([1, 2, 3], [1, 2, 4]));
console.log(bandingkanArray([1, 2], [1, 2, 3]));