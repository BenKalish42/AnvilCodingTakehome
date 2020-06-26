import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ fill, ...others }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...others}>
    <path d="M9.75,9.75 L9.75,15.775 C9.75,15.8992641 9.64926407,16 9.525,16 L6.475,16 C6.35073593,16 6.25,15.8992641 6.25,15.775 L6.25,9.75 L0.225,9.75 C0.100735931,9.75 0,9.64926407 0,9.525 L0,6.475 C0,6.35073593 0.100735931,6.25 0.225,6.25 L6.25,6.25 L6.25,0.225 C6.25,0.100735931 6.35073593,-1.22617396e-15 6.475,-1.2490009e-15 L9.525,-8.8817842e-16 C9.64926407,-9.11005359e-16 9.75,0.100735931 9.75,0.225 L9.75,6.25 L15.775,6.25 C15.8992641,6.25 16,6.35073593 16,6.475 L16,9.525 C16,9.64926407 15.8992641,9.75 15.775,9.75 L9.75,9.75 Z" fill={fill} />
  </svg>
)

Icon.defaultProps = {
  fill: 'black',
}

Icon.propTypes = {
  fill: PropTypes.string,
}

export default Icon