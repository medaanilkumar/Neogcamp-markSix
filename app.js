first=document.querySelector('#first')
but=document.querySelector('button')
output=document.querySelector('#second')
but.addEventListener('click',translate)

function translate(){
    url='https://api.funtranslations.com/translate/minion.json'+"?"+"text="+first.value
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(data=>output.value=data.contents.translated)
    .catch(console.error("server is busy"))
}
