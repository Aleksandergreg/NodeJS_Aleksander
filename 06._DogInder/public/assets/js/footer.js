
  const footerYear = document.querySelectorAll(".year");
  footerYear.forEach(copyright => {
    copyright.textContent = new Date().getFullYear();
  });
