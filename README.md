# JS Image Searcher 🔍🖼️

A lightweight **vanilla‑JS** web app that lets you search photos via the Pixabay
REST API, browse them in a responsive Masonry‑style gallery, open them in a
lightbox, and progressively load more results.

**Live demo →** <https://andreyruts.github.io/js-img-searcher/>

---

## 🚀 Tech Stack

| Purpose             | Library / Tool                               |
| ------------------- | -------------------------------------------- |
| Build / Dev server  | **Vite 5**                                   |
| Post‑build CSS pass | **PostCSS 8** + `postcss-sort-media-queries` |
| HTTP requests       | **Axios 1**                                  |
| Notifications       | **IziToast 1.4**                             |
| Gallery lightbox    | **SimpleLightbox 2**                         |
| Styling             | Pure CSS (mobile‑first)                      |

---

## 🎯 Core Features

| Feature                  | Details                                                                          |
| ------------------------ | -------------------------------------------------------------------------------- |
| 🖼 **Responsive Gallery** | Cards display thumbnail + stats (likes, views, comments, downloads).             |
| 💡 **Lightbox Preview**  | Click any image to view a high‑resolution version in **SimpleLightbox**.         |
| ➕ **Load More**         | “Load More” button fetches the next page, inserts new cards, and smooth‑scrolls. |
| 🔔 **User Feedback**     | **IziToast** shows notifications (no results, end of collection, errors).        |
| ⏱ **Loader Indicator**   | Minimal spinner while fetching data.                                             |

---
