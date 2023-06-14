function showLoveNote() {
  var loveNote = document.getElementById("love-note");
  loveNote.classList.toggle("hidden");

  var loveButton = document.getElementById("love-button");
  if (loveNote.classList.contains("hidden")) {
    loveButton.innerHTML = "Buka Pesan Cinta";
  } else {
    loveButton.innerHTML = "Tutup Pesan Cinta";
  }
}
