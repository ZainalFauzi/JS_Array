let kelompok = [
    "Krisna Firdaus",
    "Muhammad Yogi",
    "Zainal Fauzi"
];
kelompok.forEach(Element => {
    console.log("Boss " + kelompok);
});

let yorozuya = [
    "Sakata Gintoki",
    "Shimura Shinpachi",
    "Kagura"
];
yorozuya.forEach(Element => {
    console.log("Yorozuya " + yorozuya)
});


document.getElementById("kel1").innerHTML = kelompok[0];
document.getElementById("kel2").innerHTML = kelompok[1];
document.getElementById("kel3").innerHTML = kelompok[2];
document.getElementById("yor1").innerHTML = yorozuya[0];
document.getElementById("yor2").innerHTML = yorozuya[1];
document.getElementById("yor3").innerHTML = yorozuya[2];