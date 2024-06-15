const siteTitle = "A Fabulous Company";

const routes = {
  404: {
    page: "/pages/404.html",
    title: "404 | " + siteTitle,
    description: "Page not found",
  },
  "/": {
    page: "/pages/home.html",
    title: "Home | " + siteTitle,
    description: "Home Page",
  },
  "/picturedetails": {
    page: "/picturedetails/picturedetails.html",
    title: "About Us | " + siteTitle,
    description: "About Us",
  },
  "/services": {
    page: "/pages/services.html",
    title: "Our Services | " + siteTitle,
    description: "Our Services",
  },
  "/contact": {
    page: "/pages/contact.html",
    title: "Contact Us | " + siteTitle,
    description: "Contact Us",
  },
};

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    useRoute();
  }
});

const useRoute = (e) => {
  e = e || window.event;
  e.preventDefault();
  window.history.pushState(
    { page: window.location.pathname },
    "",
    e.target.href
  );
  renderPage();
};

const renderPage = async () => {
  const location = window.location.pathname;
  const route = routes[location] || routes[404];
  const response = await fetch(route.page);
  const data = await response.text();
  document.querySelector("#root").innerHTML = data;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = renderPage;
window.useRoute = useRoute;
renderPage();
