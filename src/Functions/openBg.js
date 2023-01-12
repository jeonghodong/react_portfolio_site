function openBg(bg) {
  // FadeIn 효과
  bg.current.animate(
    [
      { transform: "translateY(-500px)", opacity: "0" },
      { transform: "translateY(0px)", opacity: "1" },
    ],
    {
      delay: 0,
      duration: 1300,
      easing: "ease",
      iterations: 1,
    }
  );
}

export default openBg;
