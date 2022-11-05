// 1) Fruit exercise ********************************************
const fruitList = ['apple', 'banana', 'tomato' ]
const ul = document.querySelector('ul')
fruitList.forEach((value) => {
    const li = document.createElement("li")
    li.textContent = value
    ul.appendChild(li)

})
// 2) Crocoder logo *********************************************
const div = document.querySelector('div')
const image = document.createElement('img')
const imageSrc = 'https://crocoder.dev/icon.png';
image.src = imageSrc
div.appendChild(image)

// 3) Change first and last item from an unordered list *********
const first = [...document.querySelectorAll('ul > li:first-child')]
const last = [...document.querySelectorAll('ul > li:last-child')]
first.forEach(li => {
    li.textContent = "first"
})
last.forEach(li => {
    li.textContent = "last"
})