const args = process.argv.slice(2)
const depth = ['colors', 'shades', 'variants', 'swatches'].includes(args[0])
  ? args[0]
  : 'swatches'
const depthMap = {
  colors: 1,
  shades: 2,
  variants: 3,
  swatches: 4,
}
const level = depthMap[depth]

const colors = [
  'primary',
  'secondary',
  'tertiary',
  'light',
  'neutral',
  'dark',
  'success',
  'info',
  'warning',
  'danger',
]
const shades = level > 1 ? ['base', 'darker', 'dark', 'light', 'lighter'] : []
const variants = level > 2 ? ['base', 'hover', 'active'] : []
const swatches =
  level > 3 ? ['base', 'readable', 'border', 'alpha', 'negative'] : []

let msg = ''
colors.forEach(c => {
  msg += `'${c}',\n`
  shades.forEach(s => {
    msg += `'${c}.${s}',\n`
    variants.forEach(v => {
      msg += `'${c}.${s}.${v}',\n`
      swatches.forEach(w => {
        msg += `'${c}.${s}.${v}.${w}',\n`
      })
    })
  })
})
console.log(msg)
