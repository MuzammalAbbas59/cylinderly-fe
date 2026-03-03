/**
 * Theme Configuration
 * Centralized theme management for Cylinderly
 * Future-proof for multi-theme support
 */

export const themes = {
  skyBlue: {
    name: 'Sky Blue',
    colors: {
      primary: '#5AB8FF',
      accent: '#3C7DD9',
      background: '#F7F9FF',
      text: '#222222',
    },
  },
  // Future themes can be added here
  // dark: { ... },
  // green: { ... },
} as const;

export type ThemeName = keyof typeof themes;

export const defaultTheme: ThemeName = 'skyBlue';

export function getTheme(themeName: ThemeName = defaultTheme) {
  return themes[themeName];
}
