function activateGallery() {
  let mainImage = document.querySelector("#gallery-photo img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      //set clicked image as main gallery image
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newAlt = thumbnail.alt;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newAlt);

      //Change which image is current
      let currentClass = "current"
      document.querySelector(currentClass).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      //Update image info
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    })
  })
}
