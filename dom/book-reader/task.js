const fonts = Array.from(document.querySelectorAll('.font-size'))
console.log(fonts)
const book = document.querySelector('.book')

for(let font of fonts){
	font.addEventListener('click', function(event){
		event.preventDefault()

		for (let f of fonts){
			f.classList.remove('font-size_active')
            book.classList.remove(`book_fs-big`,'book_fs-small') 
         
		}

        font.classList.add('font-size_active')
        if (font.classList.contains('font-size_small')){
         	book.classList.add('book_fs-small')
        } else if (font.classList.contains('font-size_big')){
         	book.classList.add('book_fs-big')
        }

	})
}