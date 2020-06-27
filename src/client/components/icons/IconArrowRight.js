import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ fill, ...others }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...others}>
    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z" fill={fill} />
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z" fill={fill} />
  </svg>
)

Icon.defaultProps = {
  fill: 'black',
}

Icon.propTypes = {
  fill: PropTypes.string,
}

export default Icon
