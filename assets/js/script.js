$(document).ready(function(){
  $('#carouselExample').carousel({
      interval: false
  });

  // Navegação manual de um slide por vez
  $('#carouselExample').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;

      var totalItems = $('.carousel-item').length;
      var slideTo = idx + itemsPerSlide;

      var increment = 1;

      if (slideTo >= totalItems) {
          slideTo = 0;
          increment = totalItems - idx;
      }

      for (var i = 0; i < increment; i++) {
          if (e.direction == "left") {
              $('.carousel-item').eq(slideTo - i).appendTo('.carousel-inner');
          } else {
              $('.carousel-item').eq(slideTo + i).appendTo('.carousel-inner');
          }
      }
  });
});


// function handleKeyPress(event) {
//   if (event.key === 'Enter') {
//       search();
//   }
// }

// function search() {
//   const query = document.getElementById('searchInput').value.toLowerCase();
//   const resultsContainer = document.getElementById('search-results');
  
//   // Limpar resultados anteriores
//   resultsContainer.innerHTML = '';

//   if (query.trim() !== '') {
//       // Exemplo de busca simulada - substitua com sua lógica de busca
//       const results = simulateSearch(query);

//       if (results.length > 0) {
//           results.forEach(result => {
//               const resultItem = document.createElement('div');
//               resultItem.className = 'highlight'; // Adiciona a classe highlight
//               resultItem.textContent = result;
//               resultsContainer.appendChild(resultItem);
//           });

//           // Rolar até o primeiro resultado encontrado
//           const firstResult = resultsContainer.querySelector('.highlight');
//           if (firstResult) {
//               firstResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
//           }
//       } else {
//           resultsContainer.innerHTML = '<div>Nenhum resultado encontrado.</div>';
//       }
//   } else {
//       resultsContainer.innerHTML = '<div>Digite algo para pesquisar.</div>';
//   }
// }