const chatForm = document.querySelector("#chat-form");

if (chatForm) {
  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("#chat-message");
    const chatWindow = document.querySelector("#chat-window");
    const status = document.querySelector("#chat-status");

    const newMessage = document.createElement("div");
    newMessage.className = "message sent";

    const name = document.createElement("strong");
    name.textContent = "You";

    const messageText = document.createElement("p");
    messageText.textContent = input.value;

    const time = document.createElement("span");
    time.textContent = "Now";

    newMessage.appendChild(name);
    newMessage.appendChild(messageText);
    newMessage.appendChild(time);

    chatWindow.appendChild(newMessage);

    status.textContent = "Your message was added to the chat.";
    input.value = "";
  });
}
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");

let previousImage;

if (
  galleryImages.length > 0 &&
  lightbox &&
  lightboxImage &&
  lightboxCaption &&
  lightboxClose
) {
  function openLightbox(image) {
    previousImage = image;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    const figure = image.closest("figure");
    const caption = figure.querySelector("figcaption");

    lightboxCaption.textContent = caption.textContent;
    lightbox.hidden = false;
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;

    if (previousImage) {
      previousImage.focus();
    }
  }

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      openLightbox(image);
    });

    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}