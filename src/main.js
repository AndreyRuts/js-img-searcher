import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchData } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const requestValue = event.target.elements.request.value;
  if (requestValue === "") {
    return;
  }
  gallery.innerHTML = "";
  loader.style.display = "block";

  fetchData(requestValue)
    .then((data) => {
      const prepPic = data.hits;   
      if (prepPic.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      }
      loader.style.display = "none";
      renderData(data.hits);
      document.querySelector(".form").reset();
    })
    .catch((data) => {
      console.log(data);
    })
}
