const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#book-list');


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == ''){
        alert("Please Input Data");
    }else{
        const newRow = document.createElement('tr');

        //Creating New Title 
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = '';
        
        //Creating New Author 
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        author.value = '';
        
        //Creating New Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        // Append Tr 
        booklist.appendChild(newRow);

      
    }
    
});

