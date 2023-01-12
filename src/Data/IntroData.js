const SkillData = [
  {
    name: "HTML",
    skills: ["HTML 5, XHTML 마크업", "웹 표준 / 접근성 준수"],
  },
  {
    name: "CSS",
    skills: ["CSS 3", "반응형 웹 (Media Query)", "Sass / Scss", "Css in Js (Styled Component)"],
  },
  {
    name: "Javascript",
    skills: ["Vanilla javascript", "Typescript", "ES 6 활용", "React 활용"],
  },
];

const ContactData = [
  { id: 1, icon: <i className="fa-solid fa-envelope"> </i>, value: "fire13764@gmail.com" },
  {
    icon: <i className="fa-solid fa-phone"> </i>,
    value: "010-3145-4110",
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-house"> </i>,
    value: (
      <a href="https://jeonghodong.tistory.com" target="_blank" rel="noreferrer">
        Blog Account
      </a>
    ),
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-n"> </i>,
    value: (
      <a href="https://www.notion.so/b8063fdda72e43d0b3c240ae82b5dc51" target="_blank" rel="noreferrer">
        Notion Account
      </a>
    ),
  },
  {
    id: 4,
    icon: <i className="fa-brands fa-github"> </i>,
    value: (
      <a href="https://github.com/jeonghodong" target="_blank" rel="noreferrer">
        GitHub Account
      </a>
    ),
  },
];

export { SkillData, ContactData };
