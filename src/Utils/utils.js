import React from 'react'

export function childrenWithProps(props) {
  let newProps = React.Children.map(props.children, child => {
    return React.cloneElement(child, { ...props })
  })
  return newProps
}