// ✅ Envío del formulario a Google Sheets con feedback de éxito/error
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const estado = document.getElementById("mensaje-estado");
  const submitBtn = form.querySelector("button[type='submit']");

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  fetch("https://script.google.com/macros/s/AKfycbzmmDJbqZ0LfcKud9-gDNs3Pi1lMDoTp7grZUgYPljWk_S5_24WpnY1uD2AsEbaiCes6g/exec", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      estado.textContent = "Consulta enviada con éxito.";
      estado.className = "mensaje-ok";
      form.reset();
    })
    .catch(error => {
      estado.textContent = "Error al enviar consulta.";
      estado.className = "mensaje-error";
      console.error("Error:", error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar Consulta";
    });
});

// ✅ Menú responsive
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

// ✅ Ocultar navbar al hacer scroll hacia abajo
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Bajando
    navbar.style.top = "-100px";
  } else {
    // Subiendo
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Cambiar fondo del hero cada 5 segundos
const hero = document.querySelector('.hero');

const heroImages = [
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80'
];

let currentHeroIndex = 0;

setInterval(() => {
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
}, 5000);
