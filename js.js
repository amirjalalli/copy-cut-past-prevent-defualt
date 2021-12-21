// let $ = document
let editorElem = document.getElementById('editor')
function copyHandeler (event) {
    // console.log('copy')
    event.preventDefualt()
}
editorElem.addEventListener('copy',copyHandeler)