window.onload = function () {
    const container = document.getElementById("knowledgebase-sidenav");
    const targetElement = document.getElementById("knowledgebase-sidenav-active");
    container.scrollTop = targetElement.offsetTop;
};