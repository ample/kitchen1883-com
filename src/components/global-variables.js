export const fonts = {
  serif: "vollkorn, serif", // 400, 700
  sans: "montserrat, sans-serif", // 400, 700
}

export const colors = {
  white: "#ffffff",
  gray100: "#f9f9f9",
  gray200: "#dfdfdf",
  gray400: "#8f8f8f",
  gray800: "#404040",
  gray900: "#272727",
  black: "#000000",
  cream: "#f6f7ea",
  olive500: "#8f8c36",
  olive700: "#737128",
  navy: "#2f3f51",
}

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const screen = {
  min: {
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
  },
  max: {
    sm: `(max-width: ${breakpoints.sm - 1}px)`,
    md: `(max-width: ${breakpoints.md - 1}px)`,
    lg: `(max-width: ${breakpoints.lg - 1}px)`,
    xl: `(max-width: ${breakpoints.xl - 1}px)`,
  },
}
