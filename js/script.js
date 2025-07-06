document.addEventListener("DOMContentLoaded", function () {
  // --- Formulaire contact ---
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nom = form.querySelector("#nom")?.value.trim() || "";
      const prenom = form.querySelector("#prenom")?.value.trim() || "";
      const email = form.querySelector("#email")?.value.trim() || form.querySelector("#emailContact")?.value.trim() || "";
      const sujet = form.querySelector("#sujet")?.value.trim() || "";
      const message = form.querySelector("#message")?.value.trim() || "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nom || !prenom || !email || !sujet || !message) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          alert("Message envoyé avec succès !");
          form.reset();
        } else {
          alert("Erreur lors de l'envoi du message. Réessayez.");
        }
      } catch (error) {
        alert("Erreur réseau, veuillez réessayer plus tard.");
      }
    });
  }

  // --- Boutons "Voir plus" ---
  document.querySelectorAll(".voir-plus-btn").forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.closest('.description, .projet-description');
      const texteCache = parent?.querySelector('.texte-cache');
      if (!texteCache) return;

      const isActive = texteCache.classList.toggle("active");
      button.textContent = isActive ? "Voir moins" : "Voir plus";
    });
  });

  // --- Slider images ---
  const images = [
    "img/service.jpg",
    "img/codage.jpg",
    "img/info.avif"
  ];
 function redirigerContact(event) {
    event.preventDefault(); // Empêche le lien de s'exécuter normalement

    alert("Pour obtenir mon CV, merci de me contacter via le formulaire de contact.");

    // Scroll vers la section Contact
    const sectionContact = document.getElementById("contact");
    if (sectionContact) {
      sectionContact.scrollIntoView({ behavior: "smooth" });
    }
  }
  let currentIndex = 0;
  const banguiImg = document.getElementById("banguiImg");
  const intervalTime = 3000; // 3 secondes

  if (banguiImg) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      banguiImg.src = images[currentIndex];
    }, intervalTime);
  }
});
