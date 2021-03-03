// $('#render').pagination({
//     dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
//     locator: 'items',
//     totalNumber: 120,
//     pageSize: 20,
//     ajax: {
//         beforeSend: function() {
//             $('.data-container').html('Loading data from flickr.com ...');
//         }
//     },
//     callback: function(data, pagination) {
//         let dataContainer = document.querySelector('.data-container');

//         dataContainer.innerHTML += `<ul>`;

//         data.forEach((item)=> {
//             dataContainer.innerHTML += `<li>${item.description}</li>`;
//             console.log(item);
//         })

//         dataContainer.innerHTML += `</ul>`;

//     }
// });



// let container = '123';

// (function(name){
//     let container = $('.pagination-'+name);
//     container.pagination({
//         dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
//         locator:'items',
//         totalNumbers:50,
//         pageSize:2,
//         showPageNumbers: true,
//         showPrevious: true,
//         showNext: true,
//         showNavigator: true,
//         ajax:{
//             beforeSend:function(){
//                 container.prev().html('Loading...');
//             }
//         },
//         callback: function(response, pagination){
//             console.log(pagination);
//             let dataHtml = 'ul';
//             $.each(response, function(index, item){
//                 dataHtml += '<li>' + item.title + '</li>'
//             });
//             container.prev().html(dataHtml);
//         }

//     })('demo2')
// }());


$( document ).ready(function() {
    $('#render').pagination({
        dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
        locator: 'items',
        totalNumber: 120,
        pageSize: 20,
        ajax: {
            beforeSend: function () {
                $('.data-container').html('Loading data from flickr.com ...');
            }
        },
        callback: function (data, pagination) {
            let dataContainer = document.querySelector('.data-container');
    
            data.forEach((item) => {
    
                dataContainer.innerHTML = `
    <li>${item.title}</li>
    <li>${item.description}</li>`
            })
        }
    });
  });






// $( document ).ready(function() {
    
//     let container = '123';

//     (function (name) {
//         let container = $('.pagination-' + name);
//         container.pagination({
//             dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
//             locator: 'items',
//             totalNumber: 50,
//             pageSize: 2,
//             showPageNumbers: true,
//             showPrevious: true,
//             showNext: true,
//             showNavigator: true,
//             ajax: {
//                 beforeSend: function () {
//                     container.prev().html('Loading...');
//                 }
//             },
//             callback: function (response, pagination) {
//                 console.log(pagination);
//                 let dataHtml = 'ul';
//                 $.each(response, function (index, item) {
//                    dataHtml += '<li>' + item.title + '</li>'
//                 });
//                 container.prev().html(dataHtml);
//             }

//         })('demo2')
// }());

//   });


