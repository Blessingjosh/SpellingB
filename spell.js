let word;
const words = ["Leviticus","Uzziah", "Deuteronomy", "Chronicles", "Philemon", " Corinthians", "Revelation", "Ecclesiastes", "Colossians", "Zephaniah", "Zechariah", "Timothy", "Jehoiakim","Hoshea","Jeroboam","Manasseh","Nadab","Zachariah","Rehoboam","Uzziah","Jehoshaphat","Omri","Jehoahaz","Pekahiah","Jotham","Zedekiah","Jehoiachin","Bathsheba","Jehoaddan","Mehetabel","Michaiah","Vashti","Jerusha","Naamah","Jecoliah","Jehoaddan","Jezebel","Nehushta","Tahpenes","Esther","Azubah","Antelope","Behemoth","Buzzard","Camel","Chameleon","Cormorant","Cricket","Crane","Gazelle","Gecko","Leviticus","Grasshopper", "Heron", "Hoopoe", "Hyena", "Leech", "Leopard", "Leviathan", "Maggot", "Ostrich", "Partridge", "Peacock", "Pigeon", "Quail ", "Raven", "Scorpion", "Sparrow", "Turtledove", "Worm", "Heron", "Viper", "Abanah", "Euphrates", "Gihon", "Habor", "Jordan", "Kishon", "Pharpar", "Pishon", "Shihor", "Tigris", "Ulai", "Othniel", "Ehud", "Shamgar", "Deborah", "Gideon", "Abimelech ", "Jephthah", "Ibzan ", "Elon", "Abdon", "Samson", "Eli ", "Reuben", "Simeon", "Ephraim", "Judah", "Issachar", "Zebulun", "Dan", "Naphtali","Gad","Asher","Manasseh","Benjamin","Gad","Gad","Gad","Gad","Gad","Gad"]
document.getElementById('btn').addEventListener('click', function () {
  num = Math.floor(Math.random() * (113))
  word = words[num]
  let voice = new SpeechSynthesisUtterance()
  voice.text = word
  speechSynthesis.speak(voice)
})

document.getElementById('sub').addEventListener('click', function () {

  if (document.getElementById('inp').value == word) {
    document.querySelector('.dec')
  .innerHTML = 'Correct'
    var snd = new
      Audio('Correct.mp3')
    snd.play()
    score.correct += 1

    // alert(`CORRECT!!! 
    // Correct:${score.correct}, Incorrect:${score.incorrect}`)

  } else {
    document.querySelector('.dec')
  .innerHTML = 'Incorrect'
    score.incorrect += 1
    alert(`INCORRECT \n It was ${word}
Correct:${score.correct}, Incorrect:${score.incorrect}
    `)
    var snd = new
      Audio('Wrong.mp3')
    snd.play()
  }
  document.getElementById('inp').value = ''
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
};
update()
function update(){
  document.querySelector('.score')
  .innerHTML = `Correct:${score.correct}, Incorrect:${score.incorrect}`
}
// up()
// function update(){
//   document.querySelector('.dec')
//   .innerHTML = `Correct:${score.correct}, Incorrect:${score.incorrect}`
// }