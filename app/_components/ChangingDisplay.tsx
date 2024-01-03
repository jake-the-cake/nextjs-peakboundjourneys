'use client'
import { useState } from "react"

export default function ChangingDisplay() {
  const [currentDisplay, setCurrentDisplay] = useState<JSX.Element>(<>Display</>)  
  return <>{ currentDisplay }</>
}