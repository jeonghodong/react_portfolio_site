function openBg(bg) {
  bg.current.animate([{ opacity: "0" }, { opacity: "1" }], {
    delay: 0,
    duration: 1000,
    easing: "ease",
    iterations: 1,
    fill: "forwards",
  });
}

export default openBg;
