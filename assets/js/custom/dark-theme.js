const defaultTheme = [...document.styleSheets].find((style) =>
  /(main.css)$/.test(style.href)
);
const darkTheme = [...document.styleSheets].find((style) =>
  /(main_dark.css)$/.test(style.href)
);

const toggleThemeBtn = document.getElementById("toggle-theme-pc");
const toggleThemeBtnMobile = document.getElementById("toggle-theme-mobile");

const toLight = () => {
  const sunIcon = `<i class="fa-solid fa-sun"></i>`;
  if(toggleThemeBtn) toggleThemeBtn.innerHTML = sunIcon;
  if(toggleThemeBtnMobile) toggleThemeBtnMobile.innerHTML = sunIcon;

  defaultTheme.disabled = false;
  darkTheme.disabled = true;
  localStorage.setItem("theme", "default");
};

const toDark = () => {
  const moonIcon = `<i class="fa-solid fa-moon"></i>`;
  if(toggleThemeBtn) toggleThemeBtn.innerHTML = moonIcon;
  if(toggleThemeBtnMobile) toggleThemeBtnMobile.innerHTML = moonIcon;

  defaultTheme.disabled = true;
  darkTheme.disabled = false;
  localStorage.setItem("theme", "dark");
};

const currentTheme = () => localStorage.getItem("theme");

const setDarkMode = (isDark) => {
  if (isDark) {
    toLight();
  } else {
    toDark();
  }
};

if (darkTheme) {
  let isDarkMode = false;
  if (currentTheme() === "dark") {
    isDarkMode = true;
  } else if (currentTheme() === "default") {
    isDarkMode = false;
  } else {
    isDarkMode = matchMedia("(prefers-color-scheme: dark)").matches;
  }

  if (toggleThemeBtn) {
    if (isDarkMode) {
      toDark();
    } else {
      toLight();
    }
  }

  const changeTheme = () => {
    setDarkMode(currentTheme() === "dark");
  };

  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", changeTheme);
  }
  if (toggleThemeBtnMobile) {
    toggleThemeBtnMobile.addEventListener("click", changeTheme);
  }
}
