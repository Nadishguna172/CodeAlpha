document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");
    const galleryImages = document.querySelectorAll(".gallery-image");
    const close = document.querySelector(".close");
  
    galleryImages.forEach(image => {
      image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
        caption.textContent = image.alt;
      });
    });
  
    close.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  