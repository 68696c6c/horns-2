import PropTypes from 'prop-types'

import { navItemVariantProps } from './clickable'

// eslint-disable-next-line import/prefer-default-export
export const nav = {
  styles: () => [],
  propTypes: () => ({
    ...navItemVariantProps.propTypes(),
    currentPath: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.object),
      })
    ),
  }),
  defaultProps: () => ({
    ...navItemVariantProps.defaultProps(),
    currentPath: '',
    links: [],
  }),
}
