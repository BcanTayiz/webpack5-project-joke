
const cheerio = require('cheerio');
const keyword_extractor = require("keyword-extractor");
import axios from 'axios';

let keywordCount = async (list) => {
    var words = [];
    var counts = [];
    calculate(list);
    calculate(list);
    console.log(words);
    console.log(counts);

    function calculate(result) {
        for (var i=0; i<result.length; i++) {
            if (array_contains(words, result[i])) {
                counts[result[i]]++;
            } else {
                words.push(result[i]);
                counts[result[i]] = 1;
            }
        }
    }

    function array_contains(array, value) {
        for (var i=0; i<array.length; i++)
            if (array[i] == value)
                return true;
        return false;
}

    return [words,counts]
}


let asyncFuncition = async () => {
    let url = document.getElementById("urlText").value
    if(url.length <= 10){
        alert("enter a url")
        return "enter a url"
    }
    else{
        console.log(url)
    let pageResponse = await axios({
        method: 'get',
        url: url,
        withCredentials: false,
        params: {
          access_token: "a0sd9aksd09j1290dja8s9dah98jas98dakjsd9j",
        },
      });

    let body = cheerio.load(pageResponse.data,{ ignoreWhitespace: true })
    let text = body('p').text()
    console.log(text)

    const extraction_result =  keyword_extractor.extract(text,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: true
    });

    console.log(keywordCount(extraction_result))
    return keywordCount(extraction_result)
    }
    
}

export default asyncFuncition;



