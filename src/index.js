
import './styles/main.scss'
import keyword from './assets/keyword.jpg'
import result from './keywordMine';
import asyncFuncition from './keywordMine';

const laughImg = document.getElementById("laughImg")
laughImg.src = keyword;
const mainText = document.getElementById("textMain")
let setKeywords = async( ) => {
    let result =  await asyncFuncition()
    if(result.length >= 0)
    mainText.innerHTML = result;
}

const analyzeBtn = document.getElementById("analyzeBtn")
analyzeBtn.addEventListener('click',e => {
    console.log("hahahah")
    setKeywords()
    mainText.innerHTML = result
})



