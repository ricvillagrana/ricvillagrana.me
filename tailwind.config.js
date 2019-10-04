module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      white: '#fff',

      primary: {
        white: '#e6f0ff',
        100: '#67a5ff',
        200: '#4d96ff',
        300: '#3387ff',
        400: '#1a78ff',
        500: '#0069ff',
        600: '#005fe6',
        700: '#0054cc',
        800: '#004ab3',
        900: '#003f9a',
      },
      success: {
        white: '#e5fcf1',
        100: '#59eea5',
        200: '#43ec98',
        300: '#2ce98c',
        400: '#17e47f',
        500: '#15cd72',
        600: '#13b665',
        700: '#109f58',
        800: '#0e884b',
        900: '#0c713f',
      },
      warning: {
        white: '#fff8de',
        100: '#ffde67',
        200: '#ffd94d',
        300: '#ffd333',
        400: '#ffce1a',
        500: '#ffc800',
        600: '#e6b400',
        700: '#cca000',
        800: '#b38c00',
        900: '#9a7800',
      },
      danger: {
        white: '#fdeae6',
        100: '#f59f8f',
        200: '#f38b78',
        300: '#f17761',
        400: '#ef6349',
        500: '#ed4f32',
        600: '#eb3b1b',
        700: '#d93213',
        800: '#c22c11',
        900: '#ab270f',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      black: '#303030',
    },
    fontFamily: {
      sans: [
        'Poppins',
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Ubuntu',
        'Monaco',
        'Menlo',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
