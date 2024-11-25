document.addEventListener('DOMContentLoaded', function () {
  let typingSpan = 120
  startWriting('header-type-writer')

  function startWriting(divId) {
    let divLength = document.getElementById(divId).innerHTML.length;
    let spans = document.getElementById(divId).getElementsByTagName('span')
    typeWriter(spans)
    setInterval(typeWriter, divLength * typingSpan, spans)
  }

  function typeWriter(spans) {
    let setTimeoutTime = 0
    for (const span of spans) {
      let text = span.innerHTML
      span.innerHTML = ''
      setTimeout(writing, setTimeoutTime, span, text)
      setTimeoutTime += typingSpan * text.length
    }
  }

  function writing(span, text, i = 0) {
    if (i < text.length) {
      span.innerHTML += text.charAt(i)
      i++
      setTimeout(writing, typingSpan, span, text, i)
    }
  }

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

