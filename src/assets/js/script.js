document.addEventListener('DOMContentLoaded', function () {
  // Select all nav-link elements and all tab-pane elements
  const navLinks = document.querySelectorAll(".nav-item-technology");
  const tabPanes = document.querySelectorAll(".tab-pane-technology");

  navLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      // Remove the 'active' class from all nav-links and tab-panes
      navLinks.forEach((item) => item.querySelector("a").classList.remove("active"));
      tabPanes.forEach((pane) => {
        pane.classList.add("d-none", "active")
        pane.classList.remove("show", "active")
      });

      navLinks[index].querySelector("a").classList.add("active");
      tabPanes[index].classList.remove("d-none");
      tabPanes[index].classList.add("show", "active");
    });
  });

  navLinks[0].querySelector("a").classList.add("active");
  tabPanes[0].classList.remove("d-none");
  tabPanes[0].classList.add("show", "active");
});

