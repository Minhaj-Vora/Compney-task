
function recursiveWord(event){
    if(event) event.preventDefault();

    let input = document.getElementById('txt_input').files[0]; //to get first selected file
    let output = document.getElementById('output')

    if(input){
        const reader = new FileReader();

        reader.onload = function(e){
            const content = e.target.result;
            const words = content.split(/\s+/);

            const result = firstRecurringChar(words)

            output.innerHTML = result;
            
        }

        reader.readAsText(input)
        
    }else{
        console.error('No file Selected or File input is Empty');
    }
}

function firstRecurringChar(words){
    const seen = new Map();
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (seen.has(word)) {
            return {
                word,
                firstIndex: seen.get(word),
                nextIndex: index
            };
        }
        seen.set(word, index);
    }
    return null;
}