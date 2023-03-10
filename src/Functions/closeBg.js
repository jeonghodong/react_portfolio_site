function closeBg(bg) {
  // FadeOut 효과
  bg.current.animate(
    [
      { transform: "translateY(0px)", opacity: "1" },
      { transform: "translateY(-600px)", opacity: "0" },
    ],
    {
      delay: 0,
      duration: 700,
      easing: "ease",
      iterations: 1,
      fill: "forwards",
    }
  );
}

export default closeBg;
