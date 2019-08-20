import React from "react"
import TooltipTrigger from "react-popper-tooltip"
import "./tooltip.scss"

const Tooltip = ({ children, tooltip, hideArrow, id, ariaLabelledby, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
      <div
        id={id}
        aria-labelledby={ariaLabelledby}
        {...getTooltipProps({ ref: tooltipRef, className: "tooltip-container" })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: "tooltip-arrow",
              "data-placement": placement,
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span {...getTriggerProps({ ref: triggerRef, className: "tooltip-trigger" })}>
        {children}
      </span>
    )}
  </TooltipTrigger>
)

export default Tooltip
