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

let page = 1;
let tempReqValue = "";
const per_page = 15;

async function loadMore(event) {
  event.preventDefault();
  page += 1;
  await handleRequest();

  const card = document.querySelector(".list-item");
  const cardHeight = card.getBoundingClientRect().height;
  
  window.scrollBy({
    left: 0,
    top: cardHeight * 2,
    behavior: "smooth"
}) 
}

function handleSubmit(event) {
  event.preventDefault();
  const requestValue = event.target.elements.request.value;

  if (requestValue === "") {
    return;
  }

  page = 1;
  tempReqValue = requestValue;
  gallery.innerHTML = "";
  handleRequest();
}

async function handleRequest() {
  loadMoreBtn.style.display = "none";
  loader.style.display = "block";
  const data = await fetchData(tempReqValue, page)
  const prepPic = data.hits;

  if (prepPic.length === 0) {
    loadMoreBtn.style.display = "none";
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
    });
  }
  if (page >= (data.totalHits / per_page)) {
    iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    loadMoreBtn.style.display = "none";
    loader.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
    loader.style.display = "none";
    renderData(data.hits);
    document.querySelector(".form").reset();
}
