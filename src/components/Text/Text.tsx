import React, { HTMLAttributes } from 'react'

const Text: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div {...props}>{props.children}</div>
}

export default Text
