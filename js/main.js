window.addEventListener('load', function(e){

    const photoList = Array.from(document.querySelector(".row:nth-child(2)").children);
    document.querySelector('#filter').addEventListener('input', onSearch)

    function onSearch(e) {
        let searchValue = e.currentTarget.value.trim().toLowerCase();
        const tags = document.querySelectorAll('.tags');
        const reset = document.querySelectorAll('.reset');

        // hides images:
        photoList.forEach(photo=>{
            photo.style.display = 'none'
        })

        // filters images:
        tags.forEach(tags=>{
            // photoList.forEach(photo=>{
            if(searchValue.length !== 0 && tags.textContent.toLowerCase().includes(searchValue)){
                photoList.forEach(photo=>{
                    if(tags.textContent.toLowerCase().includes(photo.querySelector('.tags').textContent)){
                        photo.style.display = 'inline-block'
                    }
                })
            } 
        })

        // RESET
        reset.forEach(reset=>{
            // hides/shows reset button:
            if(searchValue.length !== 0){
                reset.style.visibility = 'visible'
                } else {
                    reset.style.visibility = 'hidden'
                }
            // reset event listener - shows all images, hides button, clears search value: 
            reset.addEventListener('click', function(e){
                reset.style.visibility = 'hidden'
                photoList.forEach(photo=>{
                    photo.style.display = 'inline-block'
                })
                document.querySelector('#filter').value = ''
            })
        })

    }

})