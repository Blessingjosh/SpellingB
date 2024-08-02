let word;
const words = ["Leviticus", "Uzziah", "Deuteronomy", "Chronicles", "Philemon", "Corinthians", "Revelation", "Ecclesiastes", "Colossians", "Zephaniah", "Zechariah", "Timothy", "Jehoiakim", "Hoshea", "Jeroboam", "Manasseh", "Nadab", "Zachariah", "Rehoboam", "Uzziah", "Jehoshaphat", "Omri", "Jehoahaz", "Pekahiah", "Jotham", "Zedekiah", "Jehoiachin", "Bathsheba", "Jehoaddan", "Mehetabel", "Michaiah", "Vashti", "Jerusha", "Naamah", "Jecoliah", "Jehoaddan", "Jezebel", "Nehushta", "Tahpenes", "Esther", "Azubah", "Antelope", "Behemoth", "Buzzard", "Camel", "Chameleon", "Cormorant", "Cricket", "Crane", "Gazelle", "Gecko", "Leviticus", "Grasshopper", "Heron", "Hoopoe", "Hyena", "Leech", "Leopard", "Leviathan", "Maggot", "Ostrich", "Partridge", "Peacock", "Pigeon", "Quail ", "Raven", "Scorpion", "Sparrow", "Turtledove", "Worm", "Heron", "Viper", "Abanah", "Euphrates", "Gihon", "Habor", "Jordan", "Kishon", "Pharpar", "Pishon", "Shihor", "Tigris", "Ulai", "Othniel", "Ehud", "Shamgar", "Deborah", "Gideon", "Abimelech", "Jephthah", "Ibzan ", "Elon", "Abdon", "Samson", "Eli ", "Reuben", "Simeon", "Ephraim", "Judah", "Issachar", "Zebulun", "Dan", "Naphtali", "Gad", "Asher", "Manasseh", "Benjamin", "Gad", "Gad", "Gad", "Gad", "Gad", "Gad"]
document.getElementById('btn').addEventListener('click', function () {
button1()


  num = Math.floor(Math.random() * (103))
  word = words[num]
  let voice = new SpeechSynthesisUtterance()
  voice.text = word
  speechSynthesis.speak(voice)
})
document.getElementById('sub').addEventListener('click', function () {
  if (document.getElementById('inp').value == word) {
    document.querySelector('.dec')
      .innerHTML = "Correct"
    score.correct += 1
    alert(`CORRECT!!! 
    Correct:${score.correct}, Incorrect:${score.incorrect}`)
    
  } else {
    document.querySelector('.dec')
      .innerHTML = 'Incorrect'
    score.incorrect += 1

    alert(`INCORRECT \n It was ${word}
      Correct:${score.correct}, Incorrect:${score.incorrect}`)
  }
  document.getElementById('inp').value = ''

  up()
  update()

})
document.getElementById('speak').addEventListener('click', function () {

  let voice = new SpeechSynthesisUtterance()
  voice.text = word
  speechSynthesis.speak(voice)
})
  const score = {
    correct: 0,
    incorrect: 0
}
function up() {
  // let score = ''
  document.querySelector('.finalScore')
    .innerHTML = `${score.correct} /10`
    
}
var x = 0;
document.getElementById('z').innerHTML = x;
function button1() {
  
  const stop =document.getElementById('z').innerHTML = ++x;
  if (stop == 6){
    window.open("gameover.html", "_self")
    
    // speechSynthesis.speak(voice)
  }
}

update()
function update(){
  document.querySelector('.score')
  .innerHTML = `Correct:${score.correct}, Incorrect:${score.incorrect}`
}
function enter(){
  window.open("score.html", "_self")

}


var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 2)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = 
  minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    // window.open('gameover.html', '_self')
    console.log('Expired')
  }
}, 1000);
