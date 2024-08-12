let serachInput = document.querySelector('#serach');

let text = document.querySelector('#text');


serachInput.addEventListener('input' , function(){

    let UserSearch = serachInput.value.toLowerCase();

    let regex = new RegExp(`(${UserSearch})` , 'gi');


    text.innerHTML = text.textContent.replace(regex , `<span id='find'>$1</span>`)

});
