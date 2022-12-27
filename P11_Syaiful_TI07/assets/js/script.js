// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
  // jika di klik akan menjalankan fungsi computerChoice
  a.addEventListener("click", (element) => {
    computerChoice(element);
  })
);
function computerChoice(element) {
  // tangkap pilihan user
  let pilihanUser = element.target.innerText;

  // menangkap element result dengan queryselector untuk menampung nilai hasil dari game
  let pilihanComputer = document.querySelector("#result");

  // buat array pilihan untuk computer
  let choices = ["Rock", "Paper", "Scissors"];

  // pilihan random untuk computer
  pilihanComputer.innerHTML =
  choices[Math.round(Math.random() * choices.length)];
  pilihanComputer = pilihanComputer.innerHTML;

  // jika pilihan computer dan user sama (draw)
  if (pilihanUser == pilihanComputer) {
    alert("DRAW!");
  }

  // jika pilihan user menang
  if  (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
    alert("You Win!");
  }else if  (pilihanUser == "Paper" && pilihanComputer == "Rock") {
    alert("You Win!");
  }else if  (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
    alert("You Win!");
  }

  // jika pilihan computer menang
  if (pilihanComputer == "Rock" && pilihanUser == "Scissors") {
    alert("Computer Win!");
  }else if (pilihanComputer == "Paper" && pilihanUser == "Rock") {
    alert("Computer Win!");
  }else if (pilihanComputer == "Scissors" && pilihanUser == "Paper") {
    alert("Computer Win!");
  }

}
