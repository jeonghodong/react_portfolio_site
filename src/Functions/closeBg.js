function closeBg(bg) {
  // FadeOut 효과
  bg.current.animate(
    [
      { transform: "translateY(0px)", opacity: ".9" },
      { transform: "translateY(-1000px)", opacity: "0" },
    ],
    {
      delay: 0,
      duration: 1100,
      easing: "ease",
      iterations: 1,
      fill: "forwards",
    }
  );
}

export default closeBg;
