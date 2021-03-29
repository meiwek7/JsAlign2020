// $('#test').text('Test');
// let testDiv = $('#test');

// $('#test').html('<p>Test2</p>');

// $('#test').click((e)=>{
//     // this.fadeOut(1000);
//     testDiv.hide("slow", ()=>{
//         console.log("animate is completed");
//     })
// });//addEventListener('click',e=>{})

// const test = document.querySelector('#test');
// test.innerText = 'Test';

// function
// $('#clickMe').click((e)=>{
//     $('#image').toggle("slow", function(){
//         $('#image').css('background','black');
//     });
// });

// const btn = document.querySelector('#clickMe');
// btn.addEventListener('click', (e)=>{
//     let img = document.querySelector('#image');
//     if(img.style.display == 'block'){
//         img.style.display = 'none';
//         // img.classList.add('animate');
//     } else {
//         img.style.display = 'block';
//         img.style.backgroundColor = 'black';
//     }
// });

// const url = 'https://jsonplaceholder.typicode.com/posts';

// $.get( url, function( data ) {
//     $( ".result" ).html( data );
//     console.log(data);
//   });

//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));

// $('#image').css({
//     backgroundColor:'green',
//     borderRadius:"50%",
// });
// let img = $('#image');

// $("#clickMe").click(function () {
//     // $("#image").animate({
//     //     left: '100px',
//     // }, 2000, function () {
//     //     $('#image').animate({
//     //         top: '100px'
//     //     }, 2000, function () {
//     //         $('#image').animate({
//     //             left: 0
//     //         }, 2000, function () {
//     //             $('#image').animate({
//     //                 top: 0
//     //             }, 2000)
//     //         })
//     //     })
//     // });

//     animateElement(img, background, 'orange', 2000)
// });

// function animateElement(tag, vector, value, duration){
//     tag.animate({
//         vector: value
//     },duration )
// }

// function animateElement(tag, obj, duration) {
//     tag.animate(obj, duration);
//     // tag.delay(duration).css(propertyCss, valueCss);
// }

// $("#clickMe").click(function () {
//     let img = $('#image');
//     animateElement(img, {left:'100px'}, 2000);
//     animateElement(img, {top:'100px'}, 2000);
//     animateElement(img, {left:'0'}, 2000);
//     animateElement(img, {top:'0'}, 2000);
// });

let obj ={
    background:'black'
};

let test = localStorage.setItem('test', JSON.stringify(obj));

let test2 = JSON.parse(localStorage.getItem('test'));

// console.log(test);

console.log(test2);

$('#image').css(test2);