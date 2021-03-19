const DARK_MODE_LOCAL_STORAGE_KEY = "app_theme"

export enum AppThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

export default {
  applyTheme(theme: AppThemes) {
    const body = document.querySelector("body");
    if (!body) return null

    if (theme === AppThemes.DARK) {
      return body.classList.add("dark");
    }
    return body.classList.remove("dark");
  },
  getOSTheme() {
    const darkModeEnabledInOS = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return darkModeEnabledInOS ? AppThemes.DARK : AppThemes.LIGHT;
  },
  getTheme(): AppThemes {
    const storedAppTheme = localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) as AppThemes
    if (!storedAppTheme) return this.getOSTheme()

    return storedAppTheme
  },
  storeThemeValueLocally(theme: AppThemes) {
    return localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, theme)
  }
}