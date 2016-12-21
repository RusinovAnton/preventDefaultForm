import React, { PropTypes } from 'react'


const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const PreventDefaultForm = ({ children, submitLabel, onSubmit, buttonProps, ...props }) => (
  <form onSubmit={ preventDefault(onSubmit) } { ...props }>
    { children }
    <button type="submit" { ...buttonProps }>{ submitLabel || 'Submit' }</button>
  </form>
)

PreventDefaultForm.propTypes = {
  buttonProps: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
}

export default PreventDefaultForm
