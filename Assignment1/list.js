Pagination();

function Pagination(numPage) {
  const objJson = [
    { adName: "adName 1" },
    { adName: "adName 2" },
    { adName: "adName 3" },
    { adName: "adName 4" },
    { adName: "adName 5" },
    { adName: "adName 6" },
    { adName: "adName 7" },
    { adName: "adName 8" },
    { adName: "adName 9" },
    { adName: "adName 10" },
    { adName: "adName 11" },
    { adName: "adName 12" },
    { adName: "adName 13" },
    { adName: "adName 14" },
    { adName: "adName 15" },
    { adName: "adName 16" },
    { adName: "adName 17" },
    { adName: "adName 18" },
    { adName: "adName 19" },
    { adName: "adName 20" },
    { adName: "adName 21" },
    { adName: "adName 22" },
    { adName: "adName 23" },
    { adName: "adName 24" },
    { adName: "adName 25" },
    { adName: "adName 26" },
    { adName: "adName 27" },
    { adName: "adName 28" },
    { adName: "adName 29" },
    { adName: "adName 30" },
    { adName: "adName 31" },
    { adName: "adName 32" },
    { adName: "adName 33" },
    { adName: "adName 34" },
    { adName: "adName 35" },
    { adName: "adName 36" },
  ];

  const prevButton = document.getElementById("button_prev");
  const nextButton = document.getElementById("button_next");
  const firstButton = document.getElementById("button_first");
  const lastButton = document.getElementById("button_last");
  const setNumPage = document.getElementById("setNumPage");
  const clickPageNumber = document.querySelectorAll(".clickPageNumber"); 
  const buttonChange = document.getElementById("button_change");

  var numPage = setNumPage.value;
  var records_per_page;
  setNumPage.addEventListener('click',function() {
	passValue(this.value);
	changePage(current_page,this.value);
  });
  
  function passValue(x) {
	records_per_page=x;
  }


  let current_page = 1;

//   const records_per_page = x;

  this.init = function () {
    changePage(1);
    selectedPage();
    clickPage();
    addEventListeners();
    buttonchange();
  };

  let addEventListeners = function () {
    prevButton.addEventListener("click", prevPage);
    nextButton.addEventListener("click", nextPage);
    firstButton.addEventListener("click", firstPage);
	lastButton.addEventListener("click", lastPage);
	buttonChange.addEventListener("click",buttonchange);
	
  };
  let buttonchange = function(){
	  changePage(current_page,x);
  }

  let selectedPage = function () {
    let page_number = document
      .getElementById("page_number")
      .getElementsByClassName("clickPageNumber");
    for (let i = 0; i < page_number.length; i++) {
      if (i == current_page - 1) {
        page_number[i].style.opacity = "1.0";
      } else {
        page_number[i].style.opacity = "0.5";
      }
    }
  };

  let checkButtonOpacity = function () {
    current_page == 1
      ? prevButton.classList.add("opacity")
      : prevButton.classList.remove("opacity");
    current_page == numPages()
      ? nextButton.classList.add("opacity")
      : nextButton.classList.remove("opacity");
  };

  let changePage = function (page, records_per_page) {
    const listingTable = document.getElementById("listingTable");
console.log(records_per_page);
    if (page < 1) {
      page = 1;
    }
    if (page > numPages() - 1) {
      page = numPages();
    }

    listingTable.innerHTML = "";

    for (
      var i = (page - 1) * records_per_page;
      i < page * records_per_page && i < objJson.length;
      i++
    ) {
      listingTable.innerHTML +=
        "<div class='objectBlock'>" + objJson[i].adName + "</div>";
      let pageNumber = document.getElementById("page_number");
      pageNumber.innerHTML = "";

      pageNumber.innerHTML +=
        "<span class='clickPageNumber'>" + current_page + "</span>";
    }
    checkButtonOpacity();
    selectedPage();
  };

  let prevPage = function () {
    if (current_page > 1) {
      current_page--;
      changePage(current_page,records_per_page);
    }
  };

  let nextPage = function () {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page,records_per_page);
    }
  };
  let firstPage = function () {
    current_page = 1;
    changePage(1,records_per_page);
  };
  let lastPage = function () {
    current_page = Math.ceil(objJson.length / records_per_page);

    changePage(current_page,records_per_page);
  };
  let clickPage = function () {
    document.addEventListener("click", function (e) {
      if (
        e.target.nodeName == "SPAN" &&
        e.target.classList.contains("clickPageNumber")
      ) {
        current_page = e.target.textContent;
        changePage(current_page,records_per_page);
      }
    });
  };

  let numPages = function () {
    return Math.ceil(objJson.length / records_per_page);
  };
}
let pagination = new Pagination();
pagination.init();
