// eslint-disable-next-line import/prefer-default-export
export const handleProps = (
  { className: propsClassName, ...others },
  className = ''
) => ({
  className: [className, propsClassName].join(' ').trim(),
  ...others,
})

export const isUndefined = val => {
  return typeof val === 'undefined'
}

export const isArray = arr => {
  return arr.constructor === Array
}
