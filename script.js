// VALIDACIJA FORME
document.getElementById("forma")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let ime = document.getElementById("ime").value;
    let email = document.getElementById("email").value;

    if (ime === "" || email === "") {
        alert("Popuni sva polja!");
        return;
    }

    // spremanje u localStorage
    localStorage.setItem("ime", ime);
    localStorage.setItem("email", email);

    alert("Podaci spremljeni!");
});

// KONVERZIJA € -> kn (simulacija API-ja)
let tecaj = 7.53450;

document.querySelectorAll("table tr").forEach((row, i) => {
    if (i === 0) return;

    let euro = row.children[1].innerText;
    row.children[2].innerText = (euro * tecaj).toFixed(2);
});