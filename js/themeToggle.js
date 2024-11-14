const getThemePreference = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('theme') ?? 'auto'
  }
  return 'auto'
}

const updateTheme = () => {
  const themePreference = getThemePreference()
  const isDark =
    themePreference === 'dark' ||
    (themePreference === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  // Update the color-scheme property
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'

  document.body.classList.toggle('dark-mode', isDark)
  document.body.classList.toggle('light-mode', !isDark)

  document.getElementById('theme-select').value = themePreference
}

document.getElementById('theme-select').addEventListener('change', event => {
  const newTheme = event.target.value
  localStorage.setItem('theme', newTheme)
  updateTheme()
})

updateTheme()
