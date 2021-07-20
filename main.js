function toggleDarkMode() {
  var bodyElement=document.getElementById("mainBackground")
  var subheader=document.getElementById("subheader")
  var fact=document.getElementById("important-fact")
  var intro=document.getElementById("intro")
  var definition=document.getElementById("definition")
  var importantToShare=document.getElementById("important-to-share")
  var socialChallenges=document.getElementById("social-challenges")
  var footer=document.getElementById("footer")
  var button=document.getElementById("darkmode")
  if (bodyElement.style.background=="black"){
  bodyElement.style.background="#e9c46a"
  subheader.style.color="black"
  fact.style.color="black"
  intro.style.color="black"
  bodyElement.style.color="black"
  definition.style.color= "black"
  importantToShare.style.color="black"
  socialChallenges.style.color="black"
  footer.style.color="black"
  button.style.background="lightgrey"
} else {
  bodyElement.style.background="black"
  subheader.style.color="white"
  fact.style.color="white"
  intro.style.color="white"
  bodyElement.style.color="white"
  definition.style.color= "#e9c46a"
  importantToShare.style.color="white"
  socialChallenges.style.color="white"
  footer.style.color="white"
  button.style.background="#2a9d8f"
}

}
