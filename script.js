function toggleMenu() {
  const container = document.getElementById("container");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    container.style.top = "unset"
  } else {
    mobileMenu.style.display = "flex";
    container.style = `
    position: relative;
    top: 266px;
    `;
  }
}
