/**
 * LUXURY CONVERSATION CANVAS - DESIGN TOKENS
 * 
 * A comprehensive design system for the premium AI concierge interface
 * Following strict brand palette and conversation-centric paradigm
 */

// ===== BRAND PALETTE (STRICT) =====
export const colors = {
  // Primary Canvas
  canvas: '#E3DCD4',        // White - Primary background, message bubbles
  canvasLight: '#E3DCD4',   // Same as canvas (no variations)
  canvasDark: '#E3DCD4',    // Same as canvas (no variations)
  
  // Structural Depth
  navy: '#222635',          // Navy Blue - Text, structural elements, user messages
  navyLight: 'rgba(34, 38, 53, 0.8)',   // Navy with 80% opacity
  navyMedium: 'rgba(34, 38, 53, 0.6)',  // Navy with 60% opacity
  navySubtle: 'rgba(34, 38, 53, 0.4)',  // Navy with 40% opacity
  navyFaint: 'rgba(34, 38, 53, 0.2)',   // Navy with 20% opacity
  navyGhost: 'rgba(34, 38, 53, 0.1)',   // Navy with 10% opacity
  navyWhisper: 'rgba(34, 38, 53, 0.05)', // Navy with 5% opacity
  
  // Accent & Indicators
  sand: '#957D65',          // Sand - Accents, chips, indicators, Memory panel
  sandLight: 'rgba(149, 125, 101, 0.8)',   // Sand with 80% opacity
  sandMedium: 'rgba(149, 125, 101, 0.6)',  // Sand with 60% opacity
  sandSubtle: 'rgba(149, 125, 101, 0.4)',  // Sand with 40% opacity
  sandFaint: 'rgba(149, 125, 101, 0.2)',   // Sand with 20% opacity
  sandGhost: 'rgba(149, 125, 101, 0.1)',   // Sand with 10% opacity
  sandWhisper: 'rgba(149, 125, 101, 0.05)', // Sand with 5% opacity
  
  // Contextual States (derived from brand palette)
  success: '#957D65',       // Use sand for positive states
  warning: 'rgba(149, 125, 101, 0.8)',  // Sand light for warnings
  error: 'rgba(34, 38, 53, 0.8)',       // Navy light for errors
  info: 'rgba(149, 125, 101, 0.6)',     // Sand medium for info
} as const;

// ===== TYPOGRAPHY SCALE =====
export const typography = {
  // Font Families
  serif: "'Crimson Text', serif",      // Editorial serif for conversational headings
  sans: "'Inter', sans-serif",         // Modern sans for UI and body text
  
  // Font Sizes (Large, airy scale)
  sizes: {
    xs: '0.75rem',      // 12px - Timestamps, metadata
    sm: '0.875rem',     // 14px - Secondary text, captions
    base: '1rem',       // 16px - Body text, conversation content
    lg: '1.125rem',     // 18px - Emphasized text
    xl: '1.25rem',      // 20px - Card titles
    '2xl': '1.5rem',    // 24px - Section headings
    '3xl': '1.875rem',  // 30px - Page titles
    '4xl': '2.25rem',   // 36px - Hero text
  },
  
  // Font Weights
  weights: {
    light: 300,         // Light text, elegant feel
    normal: 400,        // Regular body text
    medium: 500,        // Emphasized text
    semibold: 600,      // Strong emphasis
    bold: 700,          // Headers, important text
  },
  
  // Line Heights (Generous for elevated feel)
  lineHeights: {
    tight: 1.25,        // Compact text
    normal: 1.5,        // Regular body text
    relaxed: 1.625,     // Comfortable reading
    loose: 2,           // Very spacious
  },
  
  // Letter Spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',    // For uppercase labels
  },
} as const;

// ===== SPACING SYSTEM =====
export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
} as const;

// ===== ELEVATION SYSTEM =====
export const shadows = {
  // Soft shadows for tactility without clutter
  sm: '0 1px 2px 0 rgba(34, 38, 53, 0.05)',
  base: '0 1px 3px 0 rgba(34, 38, 53, 0.1), 0 1px 2px 0 rgba(34, 38, 53, 0.06)',
  md: '0 4px 6px -1px rgba(34, 38, 53, 0.1), 0 2px 4px -1px rgba(34, 38, 53, 0.06)',
  lg: '0 10px 15px -3px rgba(34, 38, 53, 0.1), 0 4px 6px -2px rgba(34, 38, 53, 0.05)',
  xl: '0 20px 25px -5px rgba(34, 38, 53, 0.1), 0 10px 10px -5px rgba(34, 38, 53, 0.04)',
  '2xl': '0 25px 50px -12px rgba(34, 38, 53, 0.25)',
  
  // Colored shadows for brand elements
  sandSm: '0 1px 2px 0 rgba(149, 125, 101, 0.1)',
  sandBase: '0 1px 3px 0 rgba(149, 125, 101, 0.2), 0 1px 2px 0 rgba(149, 125, 101, 0.12)',
  sandLg: '0 10px 15px -3px rgba(149, 125, 101, 0.2), 0 4px 6px -2px rgba(149, 125, 101, 0.1)',
} as const;

// ===== BORDER RADIUS =====
export const borderRadius = {
  none: '0',
  sm: '0.125rem',      // 2px
  base: '0.25rem',     // 4px
  md: '0.375rem',      // 6px
  lg: '0.5rem',        // 8px
  xl: '0.75rem',       // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px',      // Fully rounded
} as const;

// ===== COMPONENT TOKENS =====

// Chat Message Bubbles
export const chatBubble = {
  user: {
    background: colors.navy,
    text: colors.canvas,
    padding: `${spacing[4]} ${spacing[6]}`,
    borderRadius: borderRadius['2xl'],
    maxWidth: '32rem', // 512px
    shadow: shadows.base,
  },
  concierge: {
    background: 'rgba(255, 255, 255, 0.6)',
    text: colors.navy,
    padding: `${spacing[4]} ${spacing[6]}`,
    borderRadius: borderRadius['2xl'],
    maxWidth: '32rem', // 512px
    shadow: shadows.base,
    border: `1px solid ${colors.sandFaint}`,
    backdropBlur: 'blur(12px)',
  },
} as const;

// Service Cards
export const serviceCard = {
  background: 'rgba(255, 255, 255, 0.8)',
  border: `1px solid ${colors.sandFaint}`,
  borderRadius: borderRadius.xl,
  padding: spacing[6],
  shadow: shadows.sm,
  hover: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: `1px solid ${colors.sandSubtle}`,
    shadow: shadows.md,
    transform: 'scale(1.01)',
  },
} as const;

// Context Panels
export const contextPanel = {
  memory: {
    background: colors.sand,
    text: colors.canvas,
    width: '20rem', // 320px
    shadow: shadows['2xl'],
  },
  inspiration: {
    background: colors.navy,
    text: colors.canvas,
    width: '20rem', // 320px
    shadow: shadows['2xl'],
  },
} as const;

// Interactive States
export const interactiveStates = {
  // Focus rings (Navy for accessibility)
  focusRing: `0 0 0 2px ${colors.navyFaint}`,
  focusRingVisible: `0 0 0 2px ${colors.navySubtle}`,
  
  // Hover states
  hover: {
    scale: 'scale(1.02)',
    scaleSmall: 'scale(1.01)',
    scaleLarge: 'scale(1.05)',
  },
  
  // Active states
  active: {
    background: colors.sandFaint,
    border: `1px solid ${colors.sandSubtle}`,
  },
  
  // Disabled states
  disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
} as const;

// Animation Durations
export const animations = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
  
  // Easing functions
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
} as const;

// Breakpoints for responsive design
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// ===== ACCESSIBILITY TOKENS =====
export const a11y = {
  // Minimum contrast ratios (WCAG AA/AAA compliant)
  contrast: {
    aa: 4.5,      // WCAG AA standard
    aaa: 7,       // WCAG AAA standard
  },
  
  // Focus indicators
  focusWidth: '2px',
  focusStyle: 'solid',
  focusColor: colors.navySubtle,
  
  // Screen reader text
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
} as const;

// ===== COMPONENT SPECIFICATIONS =====

/**
 * CONVERSATION CANVAS SPECIFICATIONS
 * 
 * Main chat interface with asymmetric layout and layered cards
 */
export const conversationCanvas = {
  maxWidth: '64rem', // 1024px - Optimal reading width
  padding: `${spacing[6]} ${spacing[8]}`,
  messageSpacing: spacing[6],
  
  // Message alignment
  userMessageAlign: 'flex-end',
  conciergeMessageAlign: 'flex-start',
  
  // Service card specifications
  serviceCardSpacing: spacing[3],
  serviceCardMaxWidth: '100%',
  
  // Suggestion chips
  suggestionChip: {
    background: colors.sandGhost,
    text: colors.sand,
    border: `1px solid ${colors.sandFaint}`,
    borderRadius: borderRadius.full,
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
  },
} as const;

/**
 * INPUT AREA SPECIFICATIONS
 * 
 * Contextual input with predictive suggestions and quick actions
 */
export const inputArea = {
  background: 'rgba(255, 255, 255, 0.3)',
  backdropBlur: 'blur(12px)',
  border: `1px solid ${colors.sandFaint}`,
  padding: spacing[6],
  
  // Input field
  input: {
    background: 'rgba(255, 255, 255, 0.6)',
    border: `1px solid ${colors.sandFaint}`,
    borderRadius: borderRadius['2xl'],
    padding: `${spacing[4]} ${spacing[6]}`,
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.light,
    
    focus: {
      outline: 'none',
      ring: `2px solid ${colors.navyFaint}`,
      border: `1px solid ${colors.navySubtle}`,
    },
  },
  
  // Quick action buttons
  quickAction: {
    background: colors.sandGhost,
    text: colors.sand,
    borderRadius: borderRadius.full,
    padding: spacing[3],
    
    hover: {
      background: colors.sandFaint,
      transform: interactiveStates.hover.scaleLarge,
    },
  },
} as const;

// Export all tokens as default
export default {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  chatBubble,
  serviceCard,
  contextPanel,
  interactiveStates,
  animations,
  breakpoints,
  zIndex,
  a11y,
  conversationCanvas,
  inputArea,
} as const;