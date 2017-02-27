import React from 'react'

const withDefaultName = (name, Component) => {
  return (props) => {
    return <Component name={name} {...props} />
  }
}

export default withDefaultName
