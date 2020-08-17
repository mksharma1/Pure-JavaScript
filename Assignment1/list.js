
 const studentDetailsArr = [
  { adName: "adName 1",
  roll: "1",
emailid:"example@example.com"  },
  { adName: "adName 2",
  roll: "2",
  emailid:"example@example.com" },
  { adName: "adName 3",
  roll: "3",
  emailid:"example@example.com" },
  { adName: "adName 4",
  roll: "4",
  emailid:"example@example.com" },
  { adName: "adName 5",
  roll: "5",
  emailid:"example@example.com" },
  { adName: "adName 6",
  roll: "6",
  emailid:"example@example.com" },
  { adName: "adName 7",
  roll: "7",
  emailid:"example@example.com" },
  { adName: "adName 8",
  roll: "8",
  emailid:"example@example.com" },
  { adName: "adName 9",
  roll: "9",
  emailid:"example@example.com" },
  { adName: "adName 10",
  roll: "10",
  emailid:"example@example.com" },
  { adName: "adName 11",
  roll: "11",
  emailid:"example@example.com" },
  { adName: "adName 12",
  roll: "12",
  emailid:"example@example.com" },
  { adName: "adName 13",
  roll: "13",
  emailid:"example@example.com" },
  { adName: "adName 14",
  roll: "14",
  emailid:"example@example.com" },
  { adName: "adName 15",
  roll: "15",
  emailid:"example@example.com" },
  { adName: "adName 16",
  roll: "16",
  emailid:"example@example.com" },
  { adName: "adName 17",
  roll: "17",
  emailid:"example@example.com" },
  { adName: "adName 18",
  roll: "18",
  emailid:"example@example.com" },
  { adName: "adName 19",
  roll: "19",
  emailid:"example@example.com" },
  { adName: "adName 20",
  roll: "20",
  emailid:"example@example.com" },
  { adName: "adName 21",
  roll: "21",
  emailid:"example@example.com" },
  { adName: "adName 22",
  roll: "22",
  emailid:"example@example.com" },
  { adName: "adName 23",
  roll: "23",
  emailid:"example@example.com" },
  { adName: "adName 24",
  roll: "24",
  emailid:"example@example.com" },
  { adName: "adName 25",
  roll: "25",
  emailid:"example@example.com" },
  { adName: "adName 26",
  roll: "26",
  emailid:"example@example.com" },
  { adName: "adName 27",
  roll: "27",
  emailid:"example@example.com" },
  { adName: "adName 28",
  roll: "28",
  emailid:"example@example.com" },
  { adName: "adName 29",
  roll: "29",
  emailid:"example@example.com" },
  { adName: "adName 30",
  roll: "30",
  emailid:"example@example.com" },
  { adName: "adName 31",
  roll: "31",
  emailid:"example@example.com" },
  { adName: "adName 32",
  roll: "32",
  emailid:"example@example.com" },
  { adName: "adName 33",
  roll: "33",
  emailid:"example@example.com" },
  { adName: "adName 34",
  roll: "34",
  emailid:"example@example.com" },
  { adName: "adName 35",
  roll: "37",
  emailid:"example@example.com" },
  { adName: "adName 37",
  roll: "38",
  emailid:"example@example.com" },
  { adName: "adName 38",
  roll: "39",
  emailid:"example@example.com" },
  { adName: "adName 39",
  roll: "40",
  emailid:"example@example.com" },
  { adName: "adName 40",
  roll: "41",
  emailid:"example@example.com" },
  { adName: "adName 41",
  roll: "41",
  emailid:"example@example.com" },
  { adName: "adName 42",
  roll: "42",
  emailid:"example@example.com" },
  { adName: "adName 43",
  roll: "43",
  emailid:"example@example.com" },

];


const prevButton = document.getElementById("button_prev");
const nextButton = document.getElementById("button_next");
const firstButton = document.getElementById("button_first");
const lastButton = document.getElementById("button_last");
const setRecordsPerPage = document.getElementById("setRecordsPerPage");
let current_page = 1;

//initialization of variables

pagination= new Pagination();
window.onload = function() {
  pagination.init();
}

// Initialization of Function onLoad


function Pagination() {
  var records_per_page;
  setRecordsPerPage.addEventListener('click',function() {
  passValue(this.value);
  current_page=1;
  changePage(1,this.value);
  });
  
  function passValue(numRecords) {
	records_per_page=numRecords;
  }
 
  this.init = function () {
    
    records_per_page=5;
    changePage(current_page,records_per_page);
    addEventListeners();

  };

  let addEventListeners = function () {
    prevButton.addEventListener("click", prevPage);
    nextButton.addEventListener("click", nextPage);
    firstButton.addEventListener("click", firstPage);
	  lastButton.addEventListener("click", lastPage);
	
  };
  

  let checkButtonOpacity = function () {
    current_page == 1
      ? prevButton.classList.add("opacity") 
      : prevButton.classList.remove("opacity");
      current_page == 1  
      ? firstButton.classList.add("opacity") 
      : firstButton.classList.remove("opacity");
    current_page == numPages()
      ? nextButton.classList.add("opacity")
      : nextButton.classList.remove("opacity");
      current_page == numPages()
      ? lastButton.classList.add("opacity")
      : lastButton.classList.remove("opacity");
  };

  let changePage = function (page, records_per_page) {
    const listingTable = document.getElementById("listingTable");

    if (page < 1) {
      page = 1;
    }
    if (page > numPages() - 1) {
      page = numPages();
    }

    listingTable.innerHTML = "";
    let initialPageNumber =(page - 1) * records_per_page;
    let isValidPageNumber = (page * records_per_page) ;
    for (let pageCounter = initialPageNumber; pageCounter < isValidPageNumber && (pageCounter < studentDetailsArr.length); pageCounter++) {
      listingTable.innerHTML +=
        "<tr class='objectBlock'><td>"+ studentDetailsArr[pageCounter].roll + "</td><td>" +studentDetailsArr[pageCounter].adName+ "</td><td>"+studentDetailsArr[page].emailid+" </td></tr>";
      let pageNumber = document.getElementById("page_number");
      pageNumber.innerHTML = "";

      pageNumber.innerHTML +=
        "<span class='clickPageNumber'>" + current_page + "</span>";
    }
    checkButtonOpacity();
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
    current_page = Math.ceil(studentDetailsArr.length / records_per_page);
    changePage(current_page,records_per_page);
  };
  
  let numPages = function () {
    return Math.ceil(studentDetailsArr.length / records_per_page);
};
}