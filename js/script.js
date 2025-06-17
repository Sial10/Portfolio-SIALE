document.addEventListener("DOMContentLoaded", function () {
  // --- Formulaire contact ---
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nom = form.querySelector("#nom")?.value.trim() || "";
      const prenom = form.querySelector("#prenom")?.value.trim() || "";
      // On teste deux id possibles email et emailContact
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
      // On cherche un élément texte-cache dans le précédent sibling
      const texteCache = button.previousElementSibling?.querySelector(".texte-cache");
      if (!texteCache) return;

      const isActive = texteCache.classList.toggle("active");
      button.textContent = isActive ? "Voir moins" : "Voir plus";
    });
  });

  // --- Slider images ---
  const images = [
    "img/service.png",
    "img/codage.jpg",
    "img/info.avif"
  ];

  let currentIndex = 0;
  const heroImg = document.getElementById("heroImg");

  // Temps en ms, ici 3000 = 3 secondes (tu peux changer à 5000 pour 5 secondes)
  const intervalTime = 3000;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;  // passe à l'image suivante, puis revient au début
    heroImg.src = images[currentIndex];
  }, intervalTime);
});
