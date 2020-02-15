export const MODE_LIGHT = 'light'
export const MODE_DARK = 'dark'
export const MODE_DEFAULT = MODE_LIGHT

export const basePallet = {
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  cyan: '#17a2b8',
  teal: '#009999',
  green: '#28a745',
  yellow: '#ffc107',
  tangerine: '#ffaa00',
  mustard: '#aa7700',
  orange: '#fd7e14',
  red: '#dc3545',
  white: '#ffffff',
  gray: '#7f7f7f',
  black: '#010101',
}

export default {
  mode: MODE_DEFAULT,
  prominent: 'primary',
  pallet: {
    primary: basePallet.tangerine,
    secondary: basePallet.blue,
    tertiary: basePallet.teal,
    light: basePallet.white,
    neutral: basePallet.gray,
    dark: basePallet.black,
    success: basePallet.green,
    info: basePallet.cyan,
    warning: basePallet.yellow,
    danger: basePallet.red,
  },
  factors: {
    alpha: 0.3,
    darker: {
      min: 0.08,
      max: 0.155,
    },
    dark: {
      min: 0.2,
      max: 0.47,
    },
    light: {
      min: 0.22,
      max: 0.55,
    },
    lighter: {
      min: 25,
      max: 40,
    },
  },
}
