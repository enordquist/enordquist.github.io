document.addEventListener("DOMContentLoaded", function() {
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach(t => {
    t.addEventListener("click", () => {
      const nested = t.nextElementSibling;
      if (nested) nested.classList.toggle("active");
      t.classList.toggle("expanded");
    });
  });
});

