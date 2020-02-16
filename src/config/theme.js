import ColorConfig, { color } from './color'
import SpacingConfig, { spacing } from './spacing'
import TypographyConfig, { typography } from './typography'

// @TODO use this.
// eslint-disable-next-line no-unused-vars
const defaultTheme = {
  ...color,
  ...spacing,
  ...typography,
}

// const defaultTheme = {
//   color: {
//     // mode: MODE_DEFAULT,
//     // pallet: {
//     //   primary: basePallet.primary,
//     //   secondary: basePallet.secondary,
//     //   tertiary: basePallet.tertiary,
//     //   light: basePallet.white,
//     //   neutral: basePallet.gray,
//     //   dark: basePallet.black,
//     //   success: basePallet.green,
//     //   info: basePallet.blue,
//     //   warning: basePallet.orange,
//     //   danger: basePallet.red,
//     //   prominent: basePallet.primary,
//     // },
//     // factors: {
//     //   alpha: 0.3,
//     //   dark: {
//     //     min: 0.08,
//     //     less: 0.15,
//     //     more: 0.2,
//     //     max: 0.5,
//     //   },
//     //   light: {
//     //     min: 0.2,
//     //     less: 0.5,
//     //     more: 25,
//     //     max: 50,
//     //   },
//     // },
//   },
//   spacing: {
//     min: '0',
//     tiny: '2px',
//     xxSmall: '4px',
//     xSmall: '8px',
//     small: '12px',
//     medium: '16px',
//     large: '24px',
//     xLarge: '32px',
//     xxLarge: '48px',
//     giant: '64px',
//     max: '88px',
//   },
//   grid: {
//     gap: 'medium',
//     columnMin: '280px',
//     breakpoints: {
//       min: '320px',
//       small: '480px',
//       mobile: '480px',
//       medium: '768px',
//       large: '992px',
//       container: '1200px',
//       max: '1200px',
//     },
//   },
//   radius: {
//     size: 'tiny',
//     corners: {
//       topLeft: 'tiny',
//       topRight: 'tiny',
//       bottomRight: 'tiny',
//       bottomLeft: 'tiny',
//     },
//   },
//   borders: {
//     width: 'tiny',
//     style: 'solid',
//     structures: false,
//     elements: false,
//     controls: true,
//     buttons: false,
//   },
//   typography: {
//     families: {
//       primary: {
//         base: 'Helvetica',
//         fallback: 'sans-serif',
//         kerning: '', // letter-spacing
//         tracking: '', // word-spacing
//       },
//       secondary: {
//         base: 'Times New Roman',
//         fallback: 'serif',
//         kerning: '',
//         tracking: '',
//       },
//       tertiary: {
//         base: 'Monaco',
//         fallback: 'monospace',
//         kerning: '',
//         tracking: '',
//       },
//     },
//     weights: {
//       base: 400,
//       lighter: 100,
//       light: 200,
//       semiBold: 600,
//       bold: 700,
//       bolder: 900,
//     },
//     sizes: {
//       base: 'inherit',
//       small: '0.75em',
//       large: '1.5em',
//       // Min and max are used for body font size scaling with all other sizes being calculated from that using ems.
//       min: '12px',
//       max: '16px',
//       h1: '3.21em',
//       h2: '2.36em',
//       h3: '1.64em',
//       h4: '1.29em',
//       h5: '1.15em',
//       h6: '1em',
//     },
//     // margin; space before and after the text
//     spacing: {
//       base: '0',
//       paragraph: '1em 0',
//       heading: '1.25em 0 1em 0',
//     },
//     // line-height
//     leading: {
//       base: '1.6em',
//       min: '1em',
//       max: '2em',
//     },
//     indent: '1em',
//     hyphenation: {
//       wrap: 'normal',
//       break: 'normal',
//     },
//     styles: {
//       paragraph: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'base',
//         size: 'base',
//         align: 'justify',
//         justify: 'auto',
//         transform: 'none',
//         decoration: 'none',
//         // these are modifiers for the base value provided by the typeface.
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       heading: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'bold',
//         // Size is intentionally commented out; heading size is set based on the level prop.
//         // size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'min',
//       },
//       quote: {
//         family: 'primary',
//         style: 'italic',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       text: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       label: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'bold',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'min',
//       },
//       message: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       button: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'bold',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       link: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//         hover: {
//           decoration: 'underline',
//         },
//         active: {
//           decoration: 'underline',
//         },
//       },
//       caption: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'light',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       legal: {
//         family: 'secondary',
//         style: 'italic',
//         weight: 'base',
//         size: 'small',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       code: {
//         family: 'tertiary',
//         style: 'normal',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       emphasized: {
//         family: 'primary',
//         style: 'italic',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       strong: {
//         family: 'primary',
//         style: 'normal',
//         weight: 'bold',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//       variable: {
//         family: 'tertiary',
//         style: 'italic',
//         weight: 'base',
//         size: 'base',
//         align: 'left',
//         justify: 'none',
//         transform: 'none',
//         decoration: 'none',
//         kerning: 'base',
//         tracking: 'base',
//         leading: 'base',
//       },
//     },
//   },
//
//   // Component configuration.
//   links: {
//     base: 'primary',
//     hover: 'secondary',
//     active: 'tertiary',
//     visited: 'tertiary',
//     disabled: 'neutral',
//   },
//   buttons: {
//     spacing: {
//       x: 'medium',
//       y: 'small',
//     },
//   },
//   navItems: {
//     spacing: {
//       x: 'small',
//       y: 'small',
//     },
//     paginationSpacing: {
//       x: 'xSmall',
//       y: 'xSmall',
//     },
//     current: {
//       effect: 'line|background|color',
//       background: 'primary',
//       color: 'primary',
//       lineColor: 'primary',
//       lineSize: 'tiny',
//     },
//   },
// }

class Theme {
  constructor(config = {}) {
    this.name = config.name || 'horns-theme'

    // Theme
    this.color = new ColorConfig(config.color)
    this.typography = new TypographyConfig(config.typography)
    this.spacing = new SpacingConfig(this.typography, config.spacing)
    this.grid = {}
    this.radius = {}
    this.borders = {}

    // Components
    this.links = {}
    this.buttons = {}
    this.navItems = {}
    // etc.
  }
}

export default Theme
