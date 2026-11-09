/*
 * Configuración de enlaces de la página.
 * Es la ÚNICA parte que hay que editar cuando existan los enlaces.
 * Si un valor está vacío (""), su botón se muestra como "Próximamente" y queda deshabilitado.
 */
const CONFIG = {
  prototipoUrl: "",          // enlace público al proyecto de Wokwi/Tinkercad
  prototipoEmbed: false,     // true para incrustarlo en un iframe si el enlace lo permite
  videoEntrevista: "https://www.youtube.com/watch?v=Y5393YsYWb8",
  videoPitch: ""             // opcional, cuando exista
};

(function () {
  "use strict";

  // Convierte un enlace de YouTube en su versión para incrustar sin cookies.
  function youtubeEmbed(url) {
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    return m ? "https://www.youtube-nocookie.com/embed/" + m[1] : "";
  }

  // Activa un enlace o lo deja como "Próximamente".
  function setLink(el, url, label) {
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
      el.removeAttribute("role");
      if (label) el.textContent = label;
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("role", "link");
      el.setAttribute("tabindex", "-1");
      el.textContent = el.dataset.soonLabel || (el.textContent.trim() + " · Próximamente");
    }
  }

  document.querySelectorAll('[data-link="prototipo"]').forEach(function (el) {
    el.dataset.soonLabel = "Prototipo · Próximamente";
    setLink(el, CONFIG.prototipoUrl, "Ver prototipo");
  });
  document.querySelectorAll('[data-link="pitch"]').forEach(function (el) {
    el.dataset.soonLabel = "Video pitch · Próximamente";
    setLink(el, CONFIG.videoPitch, "Ver video pitch");
  });
  document.querySelectorAll('[data-link="video"]').forEach(function (el) {
    if (CONFIG.videoEntrevista) el.href = CONFIG.videoEntrevista;
  });

  // El botón "Ver entrevista" del inicio siempre baja a la sección de Luz Mery (no se toca).

  // Video de la entrevista incrustado
  const iframe = document.getElementById("video-entrevista");
  const embed = youtubeEmbed(CONFIG.videoEntrevista);
  if (iframe && embed) iframe.src = embed;

  // Sección del prototipo
  const frame = document.getElementById("proto-frame");
  const status = document.getElementById("proto-status");
  if (CONFIG.prototipoUrl) {
    if (CONFIG.prototipoEmbed && frame) {
      const f = document.createElement("iframe");
      f.src = CONFIG.prototipoUrl;
      f.title = "Simulación del prototipo de FrescoAlerta en Wokwi";
      f.loading = "lazy";
      frame.innerHTML = "";
      frame.appendChild(f);
      frame.classList.add("is-live");
    } else if (status) {
      status.innerHTML = "<strong>Simulación disponible</strong><br>Ábrela con el botón «Ver prototipo».";
    }
  }
})();
