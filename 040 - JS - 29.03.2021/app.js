document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  // Or with jQuery

//   $(document).ready(function(){
//     $('.modal').modal();
//   });

const url = 'https://jsonplaceholder.typicode.com/users';
const container = document.querySelector('.posts');

// let response = await fetch(url, {
//     method: 'GET',
//     body: JSON.stringify(user)
//   });
  
//   let result = await response.json();

//   console.log(result);

function deleteData(url){
    fetch(url,{
        method:'DELETE'
    })
}

fetch (url)
    .then(response => response.json())
    .then(json => {

        
        console.log(json)

        json.forEach((item) => {
            let urlPost = `https://jsonplaceholder.typicode.com/posts/${item.id}`;



            let post = document.createElement('div');
            post.innerHTML += `
            <ul id="${'id'+item.id}">
                <li>${'id'+item.id} ${item.name}</li>
                <li>${item.website}</li>
                <li><a class="modal-trigger" href="#modal1">Edit Post</a></li>
                <li><a class="modal-trigger delete" href="#modal2">Delete Post</a></li>
            </ul>
            `;

            container.appendChild(post);
            let deleteBtn = document.querySelector(`#${'id'+item.id} .delete`);
            let ul = document.querySelector(`#${'id'+item.id}`);
            deleteBtn.addEventListener('click',(e)=>{
                deleteData(urlPost);
                ul.remove();
            })

            fetch(urlPost)
            .then(response => response.json())
            .then(json => {
                let singlePost = document.createElement('p');
                singlePost.innerHTML = json.body;
                post.appendChild(singlePost);
            });

            
        })
    })




//POST
    // let postUrl = 'https://jsonplaceholder.typicode.com/todos';
    // let newPost={
    //     userId: 1,
    //     title: 'some title',
    //     completed: false
    // }

    // fetch(postUrl, {
    //     method:'POST',
    //     body: JSON.stringify(newPost),
    //     headers:{
    //         "Content-type":"application/json; charset=UTF-8"
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))


//PUT для изменения данных

// fetch('https://jsonplaceholder.typicode.com/todos/5',{
//     method:'PUT',
//     body:JSON.stringify({
//         userId:1,
//         id:5,
//         title:"heelo",
//         completed:false
//     }),

//     headers:{
//         "content-type":"application/json; charset=UTF-8"
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

// //PATCH
// fetch('https://jsonplaceholder.typicode.com/todos/5', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         isAdmin:true
//     }),
//     headers:{
//         "content-type":"application/json; charset=UTF-8"
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

// //DELETE

// fetch('https://jsonplaceholder.typicode.com/todos/5',{
//     method:'DELETE',
// })