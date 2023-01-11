function closeBg(bg) {
  bg.current.animate([{ opacity: "1" }, { opacity: "0" }], {
    delay: 0,
    duration: 1000,
    easing: "ease",
    iterations: 1,
    fill: "forwards",
  });
}

export default closeBg;
