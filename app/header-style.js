export const intersectionHeader = () => {
  
  const handleIntersection = (entries, observer) => {
      const header = document.querySelector(".header");
      const headerButton = document.getElementById("header_download_button");

      entries.forEach(entry => {
          if (entry.isIntersecting) {
              header.classList.add('header_black');
              headerButton.classList.replace('button_secondary', 'button_primary');
          } else {
              header.classList.remove('header_black');
              headerButton.classList.replace('button_primary', 'button_secondary');
          }
      });
  };

  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // umbral
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  const targetElement = document.querySelector("#gallery_container");

  observer.observe(targetElement);

  window.addEventListener("resize", () => {
      observer.disconnect(); 
      observer.observe(targetElement); 
  });
};