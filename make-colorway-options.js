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
const shades = ['base', 'darker', 'dark', 'light', 'lighter']
const variants = ['base', 'hover', 'active']
const swatches = ['base', 'readable', 'border', 'alpha', 'negative']

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


/*



 */
