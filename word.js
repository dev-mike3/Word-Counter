window.addEventListener('DOMContentLoaded', ()=>{
    const textArea = document.getElementById('input-text')
    const wordCount = document.getElementById('word-count')
    const characterCount = document.getElementById('character-count')
    const uniqueWords = document.getElementById('unique-words')


    textArea.addEventListener('input',()=>{
        const text = textArea.value.trim()
        const words = text === '' ? 0 : text.split(/\s+/).length
        const characters = text.length
        const uniqueWords = new Set(text.match(/\b\w+\b/g)).size

        // wordCountDisplay.textContent = `Word count: `
        wordCount.innerHTML = `word count: ${words}`
        characterCount.innerHTML = `CHaracter Count (Including spaces): ${characters}`
        uniqueWords.innerHTML = `Unique words: ${uniqueWords}`

    
    })  
})
   
// function wordCounter(){
//     const textArea = document.getElementById('input-text')
//     const wordcount = document.getElementById('word-count')
//     const characterCount = document.getElementById('character-count')
//     const uniquewords = document.getElementById('unique-words')


//     textArea.addEventListener('input',()=>{
//         console.log("HEllo World");
//     })


// }
   