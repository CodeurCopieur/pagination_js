let listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numberOfItems = 5;
let first = 0;
let actuelPage = 1;
let maxPages = Math.ceil(listLetters.length / numberOfItems);

const selectElement = (s) => document.querySelector(s);
selectElement('.btnNextPage').addEventListener('click', nextPage);
selectElement('.btnPrevious').addEventListener('click', previousPage)
selectElement('.btnFirstPage').addEventListener('click', firstPage)
selectElement('.btnLastPage').addEventListener('click', lastPage)

showList();

function firstPage() {
  first = 0;
  actuelPage = 1;
  showList();
}

function nextPage() {
  if(first + numberOfItems <= listLetters.length) {
    first+=numberOfItems;
    actuelPage++;
    showList();
  }
}

function previousPage() {
  if(first - numberOfItems >= 0) {
    first-=numberOfItems;
    actuelPage--;
    showList();
  }
}

function lastPage() {
  first = (maxPages * numberOfItems) - numberOfItems;
  actuelPage = maxPages;
  showList();
} 

//Afficher la liste

function showList() {
  let listLetter = '';
  for (let index = first; index < first + numberOfItems; index++) {
    if(index < listLetters.length) {
      listLetter+=`
        <li> ${listLetters[index]} </li>
      `
    }
  }

  selectElement('#listLetters').innerHTML = listLetter;
  showPageInfo()
}

function showPageInfo() {
  selectElement('#pageInfos').innerHTML = `Page ${actuelPage} / ${maxPages}`;
}