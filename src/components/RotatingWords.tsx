import React from 'react';
import TextLoop from "react-text-loop"


interface Props {
  reverse?: boolean
}

export const RotatingWords = (props: Props) => {

  const words = props.reverse ? ["tuddu", "cavallo"].reverse() : ["tuddu", "cavallo"]

  return (
    <TextLoop children={words} />
  )
}

