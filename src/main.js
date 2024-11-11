import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchData } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more-btn");

form.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", loadMore);

let page = 30;
let tempReqValue = "";
const per_page = 15;

async function loadMore(event) {
  event.preventDefault();
  loadMoreBtn.style.display = "none";
  await handleRequest();
  page += 1;
  loadMoreBtn.style.display = "block";
}

function handleSubmit(event) {
  event.preventDefault();
  const requestValue = event.target.elements.request.value;
  if (requestValue === "") {
    return;
  }
  // page = 1;
  tempReqValue = requestValue;
  gallery.innerHTML = "";
  handleRequest();
  page += 1;
}

async function handleRequest() {
  loader.style.display = "block";
  const data = await fetchData(tempReqValue, page)
  console.log(data);

  console.log(page);
  
  console.log(data.totalHits / per_page);

  
  loadMoreBtn.style.display = "block";
  const prepPic = data.hits;
  if (prepPic.length === 0) {
    loadMoreBtn.style.display = "none";
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
    });
  } else if (page > data.totalHits / per_page){
    loadMoreBtn.style.display = "none";
    loader.style.display = "none";
  }
  loader.style.display = "none";
  renderData(data.hits);
  document.querySelector(".form").reset();
}
