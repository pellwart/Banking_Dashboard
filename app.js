
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});


document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  // document.getElementById("menu-bg").classList.toggle("change-bg");
}
  var options = {
    width: 800,
    height: 250
  };

  new Chartist.Bar('.ct-chart',  {
    labels: ['10 Oct 2023', '12 Oct 2023', '15 Oct 2023', '20 Oct 2023', '23 Oct 2023', '26 Oct 2023'],
    series: [
    //   [800000, 1200000, 1400000, 1300000],
    //   [200000, 400000, 500000, 300000],
      [200, 100, 150, 100, 50, 40]
    ]
  }, options, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 10000) + 'k';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px' 
       
      });
    }
  });