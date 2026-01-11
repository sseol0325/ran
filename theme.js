// theme.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Toggle Button if it doesn't exist (optional, but good for consistency)
  // For now, we assume the button exists in HTML or we can create it dynamically.
  // Let's assume the button with id="theme-toggle" is present in the HTML.
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // If button doesn't exist, we might want to create it or just return (if page doesn't support it)
  if (!themeToggleBtn) return;

  const themeIcon = themeToggleBtn.querySelector('.material-symbols-rounded');

  // 2. Check for saved user preference
  const currentTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      if (themeIcon) themeIcon.textContent = 'light_mode';
    } else if (theme === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.textContent = 'dark_mode';
    } else {
      // System default
      if (systemPrefersDark) {
        if (themeIcon) themeIcon.textContent = 'light_mode';
      } else {
        if (themeIcon) themeIcon.textContent = 'dark_mode';
      }
    }
  }

  // Initial Apply
  if (currentTheme) {
    applyTheme(currentTheme);
  } else {
    // If no preference, we don't add classes, letting media query take over.
    // But we still need to set the icon correctly.
    if (systemPrefersDark) {
      if (themeIcon) themeIcon.textContent = 'light_mode';
    } else {
      if (themeIcon) themeIcon.textContent = 'dark_mode';
    }
  }

  // 3. Toggle Event Listener
  themeToggleBtn.addEventListener('click', function() {
    let isDark = document.body.classList.contains('dark-mode');
    let isLight = document.body.classList.contains('light-mode');
    
    // Determine current effective state
    let currentlyDark = isDark || (!isLight && systemPrefersDark);

    if (currentlyDark) {
      // Switch to Light
      applyTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to Dark
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});
