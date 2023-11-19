const codPINCorect = "1234"; // Setează codul PIN dorit

function verificaPIN() {
    const inputPIN = document.getElementById("pinInput").value;
    const rezultatDiv = document.getElementById("rezultat");

    if (inputPIN === codPINCorect) {
        rezultatDiv.innerHTML = "<h2>Cod PIN corect!</h2><img src='imagine.jpg' alt='Imagine cadou'><p>  Cred ca imaginea asta este destul de sugestiva ca sa iti dai seama unde trebuie sa ajungem </p>";
    } else {
        rezultatDiv.innerHTML = "<p>Cod PIN incorect. Te rog încearcă din nou.</p>";
    }
}