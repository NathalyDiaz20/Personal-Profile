document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const html = document.documentElement;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      html.classList.toggle('light', !isDark);
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  document.querySelectorAll('[data-action="play"]').forEach((button) => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('.material-symbols-outlined');
      if (!icon) return;

      const isPaused = icon.textContent.trim() === 'pause';
      icon.textContent = isPaused ? 'play_arrow' : 'pause';
      icon.setAttribute('data-icon', isPaused ? 'play_arrow' : 'pause');
      button.setAttribute('aria-pressed', String(isPaused));
    });
  });
});
