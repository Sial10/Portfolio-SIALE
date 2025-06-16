document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (nom === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs.");
  } else {
    alert("Merci pour votre message !");
    this.reset();
  }
});
document.querySelectorAll('.voir-plus-btn').forEach(button => {
  button.addEventListener('click', () => {
    const texteCache = button.previousElementSibling.querySelector('.texte-cache');
    if (!texteCache) return;

    if (texteCache.classList.contains('active')) {
      texteCache.classList.remove('active');
      button.textContent = 'Voir plus';
    } else {
      texteCache.classList.add('active');
      button.textContent = 'Voir moins';
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const btnVoirPlus = document.querySelector(".voir-plus-btn");
  const texteCache = document.querySelector(".texte-cache");

  btnVoirPlus.addEventListener("click", function() {
    if (texteCache.style.display === "none" || texteCache.style.display === "") {
      texteCache.style.display = "block";
      btnVoirPlus.textContent = "Voir moins";
    } else {
      texteCache.style.display = "none";
      btnVoirPlus.textContent = "Voir plus";
    }
  });
});
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Message envoyé avec succès !");
    form.reset();
  } else {
    alert("Erreur lors de l'envoi du message. Réessayez.");
  }
});
