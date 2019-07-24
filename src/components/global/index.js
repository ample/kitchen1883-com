import colors from "./ref/colors.scss"
import fonts from "./ref/fonts.scss"
import bp from "./ref/screen.scss"

export { colors }
export { fonts }
export default screen = {
  min: {
    sm: `(min-width: ${bp.sm}px)`,
    md: `(min-width: ${bp.md}px)`,
    lg: `(min-width: ${bp.lg}px)`,
    xl: `(min-width: ${bp.xl}px)`,
  },
  max: {
    sm: `(max-width: ${bp.sm - 1}px)`,
    md: `(max-width: ${bp.md - 1}px)`,
    lg: `(max-width: ${bp.lg - 1}px)`,
    xl: `(max-width: ${bp.xl - 1}px)`,
  },
}
