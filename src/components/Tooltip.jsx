import { useState } from 'react'

import './tooltip.css'

export function Tooltip({ content, triggersOn, direction, children }) {
  const [active, setActive] = useState(false)

  const showTooltip = () => {
    setActive(true)
  };

  const hideTooltip = () => {
    setActive(false)
  };

  const toggleTooltip = () => {
    !active ? setActive(true) : setActive(false)
  }

  return (
    <div 
      id="tooltip-wrapper"
      onMouseEnter={!triggersOn ?? triggersOn == 'hover' ? showTooltip : undefined}
      onMouseLeave={!triggersOn ?? triggersOn == 'hover' ? hideTooltip : undefined}
      onClick={triggersOn == 'click' ? toggleTooltip : undefined}
    >
      {children}
      {active && <span className={`tooltip-tip ${direction ?? 'top'}`}>{content}</span>}
    </div>
  )
}