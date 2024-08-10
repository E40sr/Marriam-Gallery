document.addEventListener("DOMContentLoaded", function() {
  let pics = document.querySelectorAll('.pic');

  pics.forEach(function (pic, index) {
    let row = Math.floor(index / 3);

    let column = index % 3;

    let left = (column / 2) * 100 + "%";

    let top = ( row / 2) * 100 + "%";

    pic.style.transformOrigin = left + " " + top;

    pic.addEventListener('click', function(){
      pics.forEach( function(p){
        p.classList.toggle('away')
        p.classList.remove('active')
      })
      pic.classList.remove('away')
      pic.classList.toggle('active')
    })
  })
})
