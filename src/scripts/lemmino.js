// LEMMiNO runtime (LEMMINO-THEME.md §5), adapted to the site's Astro View
// Transitions lifecycle. Runs on every `astro:page-load` (first load and after
// each client-side navigation) so the injected overlays survive body swaps. It
// injects the film grain and vignette so no page template is restructured, and
// flags dense pages (project detail routes, the certifications section) as
// toned-down. Scroll reveals and the hero entrance are handled by the existing
// consolidated script in Base.astro, so they are intentionally not duplicated.

function lemminoSetup() {
  const body = document.body;
  if (!body) return;

  // Inject grain + vignette once per document (body is swapped on navigation).
  if (!body.querySelector(":scope > .lemmino-grain")) {
    const grain = document.createElement("div");
    grain.className = "lemmino-grain";
    grain.setAttribute("aria-hidden", "true");
    body.appendChild(grain);
  }
  if (!body.querySelector(":scope > .lemmino-vignette")) {
    const vignette = document.createElement("div");
    vignette.className = "lemmino-vignette";
    vignette.setAttribute("aria-hidden", "true");
    body.appendChild(vignette);
  }

  // Toned-down on dense pages: project detail routes + the certifications section.
  if (/^\/projects\/[^/]+\/?$/.test(location.pathname)) {
    body.classList.add("toned-down");
  }
  const certs = document.getElementById("certifications");
  if (certs) certs.classList.add("toned-down");
}

document.addEventListener("astro:page-load", lemminoSetup);
