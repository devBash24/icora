export const iconLibraries = {
  fa: "Font Awesome",
  ai: "Ant Design Icons",
  bs: "Bootstrap Icons",
  bi: "BoxIcons",
  cg: "CSS.gg Icons",
  ci: "Circum Icons",
  di: "DevIcons",
  fi: "Feather Icons",
  fc: "Flat Color Icons",
  gi: "Game Icons",
  go: "GitHub Octicons Icons",
  gr: "Grommet-Icons",
  hi: "Hero Icons",
  im: "IcoMoon Free",
  io: "IonIcons (version 4)",
  io5: "IonIcons (version 5)",
  md: "Material Design Icons",
  ri: "Remix Icon",
  si: "Simple Icons",
  sl: "Simple Line Icons",
  tb: "Tabler Icons",
  ti: "TypIcons",
  vsc: "VS Code Icons",
  wi: "Weather Icons"
} as const;

export type IconLibrary = keyof typeof iconLibraries; 