
function recursiveWord(event) {
    if (event) event.preventDefault();

    let input = document.getElementById('txt_input').files[0]; //to get first selected file
    let output = document.getElementById('output');

    if (input) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const words = content.split(/\s+/);

            console.log(words);

            const result = firstRecurringChar(words)

            output.innerHTML = result;

        }

        reader.readAsText(input)

    } else {
        console.error('No file Selected or File input is Empty');
    }
}

function firstRecurringChar(words) {
 
    let str = "";
    let ind = [];

    for (let i = 0; i < words.length; i++) {

        let text = words[i].toString();
        for (let j = 0; j < text.length; j++) {
            let val = j + 1;
            for (let k = val; k < text.length; k++) {
                if (text[j] == text[k]) {
                    str += text[j] ;
                    ind.push(j,k);
                    console.log(text[j]+j,text[k]+k);
                }
            }
        }
    }

    // let str1 = str.toString();
    console.log(ind);
    // console.log(str1);  
    console.log(str);  
    return `${str[0]} [ ${ind[0]} , ${ind[1]} ] <br> ${str[1]} [ ${ind[2]} , ${ind[3]} ] <br> ${str[2]} [ ${ind[4]} , ${ind[5]} ] <br> ${str[3]} [ ${ind[6]} , ${ind[7]} ] <br> ${str[4]} [ ${ind[8]} , ${ind[9]} ]`;
    
}