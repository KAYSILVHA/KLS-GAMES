// $(document).ready(function () {
//     $('#searchInput').on('keypress', function (event) {
//         if (event.key === 'Enter') {
//             searchItems();
//         }
//     });

//     function searchItems() {
//         const filter = $('#searchInput').val().toLowerCase();
//         const elements = $('div, p, span, h2, h3, h4, h5, section, main, header, body, footer'); // Adicione mais seletores conforme necessário

//         let firstMatch = null;

//         elements.each(function () {
//             const text = $(this).text().toLowerCase();
//             if (text.includes(filter)) {
//                 $(this).addClass('highlight');
//                 if (!firstMatch) {
//                     firstMatch = $(this);
//                 }
//             } else {
//                 $(this).removeClass('highlight');
//             }
//         });

//         if (firstMatch) {
//             $('html, body').animate({
//                 scrollTop: firstMatch.offset().top
//             }, 1000);
//         }
//     }
// });