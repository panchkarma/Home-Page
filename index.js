const editableText = document.getElementById('editable-text');

if (localStorage.getItem('savedText')) {
    editableText.textContent = localStorage.getItem('savedText');
}
else {
    editableText.textContent = 'Coding is Love ❤️'
}

editableText.addEventListener('input', function () {

    localStorage.setItem('savedText', this.textContent);
})

const editableText1 = document.getElementById('editable-text1');

if (localStorage.getItem('savedText1')) {
    editableText1.textContent = localStorage.getItem('savedText1');
}
else {
    editableText1.textContent = 'Type Name'
}

editableText1.addEventListener('input', function () {

    localStorage.setItem('savedText1', this.textContent);
})

let reader = new FileReader();
file = document.getElementById('dp')
choose = document.getElementById('file1')
file.addEventListener('click', () => {
    choose.click()
})
choose.onchange = () => {
    files = choose.files[0]
    if (files) {
        const reader = new FileReader();
        reader.readAsDataURL(files)
        reader.addEventListener('load', () => {
            localStorage.setItem('profile', reader.result)
        })
        location.reload()
    }
}
