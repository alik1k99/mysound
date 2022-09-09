const myMusicList = [
  "Love in the Dark - Adele",
  "I'm so Paid - Akon",
  "Un-thinkable - Alicia Keys ",
  "Stand By Me - Ben E. King",
  "Song Cry - Jay Z",
  "Teardrops on my Guitar - Taylor Swift",
  "Rebel - Shenseea",
  "NY State of Mind - Nas",
  "shot for Me - Drake"
];
const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");
//create the remove/hide functionality when clicking the button
button.addEventListener("click", function () {
mySongs(myMusicList);
mixList.classList.remove("hide");
button.classList.add("hide");
});
total.innerText = `My current top ${myMusicList.length} songs :musical_note:`;
//function that turns the array into html list elements
const mySongs = function (songs) {
//this is how we are able to access each string in the list we made
songs.forEach(function (song, index) {
  let li = document.createElement("li");
  li.classList.add("song");
  li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
  mixList.append(li);
});
};
















