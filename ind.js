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

    alert(`INCORRECT \n It is ${word}
      Correct:${score.correct}, Incorrect:${score.incorrect}`)
  }
  document.getElementById('inp').value = ''

  up()
  update()
  show()

})


document.getElementById('speak').addEventListener('click', function () {

  let voice = new SpeechSynthesisUtterance()
  voice.text = word
  speechSynthesis.speak(voice)
})
function show(){
  let j =document.getElementById('dee').innerHTML += word + '<br/>'
  localStorage.setItem('eee', j)

  }
  const score = {
    correct: 0,
    incorrect: 0
}
function up() {
  let sock = 
  document.querySelector('.finalScore')
    .innerHTML = `${score.correct} /10`
    localStorage.setItem('my', sock)
    eat()
}
up()
function eat(){
  if(score.correct>1){
let t =document.getElementById('r').innerHTML="PASS"
localStorage.setItem('mylife', t)

  }else{
let he =document.getElementById('r').innerHTML="FAIL"
localStorage.setItem('mylife', he)
    
  }

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
  window.open("gameover.html", "_self")

}

var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
    window.open('gameover.html', '_self')

  }
}, 1000);
