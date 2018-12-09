export const variables = {
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  boxShadowHover: '0 2px 10px rgba(0,0,0,0.3)',
  transition: '.3s ease',
  transitionLarge: '1s ease',
  space: '16px',
  spaceSmall: '8px',
  spaceLarge: '32px',
  containerMaxWidth: '1000px',
  buttonPadding: '10px 15px',
  buttonBorderRadius: '18px',
  pageBg: '#dfdfdf',
  pageBgDark: '#151415',
  headerBg: '#282c34',
  headerBgDark: '#060009',
  headerColor: '#b7b7b7',
  headerColorDark: '#b7b7b7',
  headerColorHover: '#2c313d',
  headerColorDarkHover: '#dddddd',
}

export const dark = {
  page: {
    bg: '#151415',
  },
  header: {
    bg: variables.headerBgDark,
    color: variables.headerColorDark,
    hover: {
      bg: variables.headerBgDark,
      color: variables.headerColorDarkHover,
    }
  },
  box: {
    bg: '#232323',
    color: '#c2d0ec',
    icon: {
      color: '#ff5270',
    },
    border: {
      color: '#939393',
      radius: '6px'
    },
    alt: {
      bg: '#645d60',
    },
    error: {
      bg: '#3c181f',
      color: '#ff5386',
    }
  },
  link: {
    color: '#b579ff',
    bg: 'transparent',
    hover : {
      color: '#865bcc',
    },
    active: {
      bg: variables.headerBgDark,
      color: '#b579ff',
      hover: {
        color: '#865bcc',
      }
    }
  },
  button: {
    border: {
      radius: '18px',
    },
    bg: variables.headerBgDark,
    color: '#b7b7b7',
    padding: '10px 15px',
    hover: {
      color: '#dddddd'
    },
    alt: {
      bg: '#151415',
      color: '#676767',
      hover: {
        color: '#838189',
      },
    }
  },
  input: {
    bg: '#0a0a0a',
    color: '#949494',
  },
}

export const light = {
  page: {
    bg: variables.pageBg,
  },
  header: {
    bg: variables.headerBg,
    color: variables.headerColorDark,
    hover: {
      bg: '#2c313d',
      color: '#dddddd',
    }
  },
  box: {
    bg: '#ffffff',
    color: '#282c34',
    icon: {
      color: '#ff5270',
    },
    border: {
      color: '#939393',
      radius: '6px'
    },
    alt: {
      bg: '#e7e2e0',
    },
    error: {
      bg: '#ffdec9',
      color: '#cb7e7f',
    }
  },
  link: {
    color: '#6ba3ff',
    bg: 'transparent',
    hover : {
      color: '#4e86cc',
    },
    active: {
      bg: '#2c313d',
      color: '#b7b7b7',
      hover: {
        color: '#dddddd',
      }
    }
  },
  button: {
    border: {
      radius: '18px',
    },
    bg: '#282c34',
    color: '#b7b7b7',
    padding: '10px 15px',
    hover: {
      color: '#dddddd',
    },
    alt: {
      bg: '#b7b7b7',
      color: '#282c34',
      hover: {
        color: '#3f4653',
      },
    }
  },
  input: {
    bg: '#dfdfdf',
    color: '#21252e',
  },
}

export const style = {
  themes: {
    dark,
    light,
  },
}