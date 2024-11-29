function toggleSection(element) {
    const ul = element.nextElementSibling;
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  }
  