let depth = 0;
document.addEventListener('click', () => document.documentElement.style.setProperty("--depth", `${depth++/3}px`));