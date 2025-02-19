import { Platform } from 'react-native';
import { Colors, getColors } from '../colors';

const fontFamily = (type) => {
  if (Platform.OS === 'web') return 'Open Sans';
  return 'OpenSans-' + type;
};

const _fontFamily = (type, theme) => {
  if (Platform.OS === 'web') return 'Open Sans';
  switch (theme) {
    case 'gogood':
      return 'OpenSans-' + type;
    case 'dasa':
      return 'DasaSans-' + type;
    case 'sesi':
      return 'Lato-' + type;
    default:
      return 'OpenSans-' + type;
  }
};

const dasaWeight = (weight) => {};

export const getFonts = (theme) => {
  const colors = getColors(theme);
  const darkGray = colors('gray.100');
  const white = colors('singleton.white');
  const sesiLightGray = colors('gray.60');
  const fonts = {
    gogood: {
      bodyLarge: {
        fontSize: 16,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      bodyLargeBold: {
        fontSize: 16,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      h1: {
        fontSize: 32,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      h2: {
        fontSize: 24,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      h3: {
        fontSize: 20,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      h4: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      subtitle: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      menuTextBold: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      menuText: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
      },
      leftMenuTextBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      leftMenuText: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
      },
      placeholder: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      placeholderBold: {
        fontSize: 14,
        color: colors('gray.80'),
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      regular: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      regularBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
        fontStyle: 'normal',
      },
      small: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      small2: {
        fontSize: 10,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      smallBold: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
    },
    dasa: {
      bodyLarge: {
        fontSize: 16,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
        textAlign: 'left',
      },
      bodyLargeBold: {
        fontSize: 16,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      h1: {
        fontSize: 32,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      h2: {
        fontSize: 24,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      h3: {
        fontSize: 20,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      h4: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      subtitle: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
        textAlign: 'left',
      },
      menuTextBold: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
      },
      menuText: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
      },
      leftMenuTextBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
      },
      leftMenuText: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
      },
      placeholder: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
        textAlign: 'left',
      },
      placeholderBold: {
        fontSize: 14,
        color: colors('gray.80'),
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
      regular: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
        textAlign: 'left',
      },
      regularBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
        fontStyle: 'normal',
      },
      small: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: dasaWeight('400'),
        textAlign: 'left',
      },
      small2: {
        fontSize: 10,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
      },
      smallBold: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: dasaWeight('700'),
        textAlign: 'left',
      },
    },
    sesi: {
      bodyLarge: {
        fontSize: 16,
        color: white,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      bodyLargeBold: {
        fontSize: 16,
        color: white,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      h1: {
        fontSize: 32,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: 'Aleo-Bold',
        textAlign: 'left',
      },
      h2: {
        fontSize: 23,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: 'Aleo-Bold',
        textAlign: 'left',
      },
      h3: {
        fontSize: 20,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: 'Aleo-Bold',
        textAlign: 'left',
      },
      h4: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        // fontFamily: _fontFamily('Bold', theme),
        fontFamily: 'Aleo-Bold',
        fontWeight: '400',
        textAlign: 'left',
      },
      subtitle: {
        fontSize: 18,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      menuTextBold: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      menuText: {
        fontSize: 8,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
      },
      leftMenuTextBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      leftMenuText: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
      },
      placeholder: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      placeholderBold: {
        fontSize: 14,
        color: colors('gray.80'),
        letterSpacing: 0,
        fontStyle: 'italic',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
      regular: {
        fontSize: 14,
        color: sesiLightGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      regularBold: {
        fontSize: 14,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
        fontStyle: 'normal',
      },
      small: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Regular', theme),
        fontWeight: '400',
        textAlign: 'left',
      },
      small2: {
        fontSize: 10,
        color: darkGray,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
      },
      smallBold: {
        fontSize: 12,
        color: darkGray,
        letterSpacing: 0,
        fontFamily: _fontFamily('Bold', theme),
        fontWeight: '700',
        textAlign: 'left',
      },
    },
  };

  return fonts[theme || 'gogood'];
};

export const Fonts = {
  bodyLarge: {
    fontSize: 16,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
    textAlign: 'left',
  },
  bodyLargeBold: {
    fontSize: 16,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  h1: {
    fontSize: 32,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  h2: {
    fontSize: 24,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  h3: {
    fontSize: 20,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  h4: {
    fontSize: 18,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
    textAlign: 'left',
  },
  menuTextBold: {
    fontSize: 8,
    color: Colors.dark_gray,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
  },
  menuText: {
    fontSize: 8,
    color: Colors.dark_gray,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
  },
  leftMenuTextBold: {
    fontSize: 14,
    color: Colors.dark_gray,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
  },
  leftMenuText: {
    fontSize: 14,
    color: Colors.dark_gray,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
  },
  placeholder: {
    fontSize: 14,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontStyle: 'italic',
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
    textAlign: 'left',
  },
  placeholderBold: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 0,
    fontStyle: 'italic',
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
  regular: {
    fontSize: 14,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
    textAlign: 'left',
  },
  regularBold: {
    fontSize: 14,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
    fontStyle: 'normal',
  },
  small: {
    fontSize: 12,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Regular'),
    fontWeight: '400',
    textAlign: 'left',
  },
  small2: {
    fontSize: 10,
    color: Colors.dark_gray,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
  },
  smallBold: {
    fontSize: 12,
    color: Colors.dark_gray,
    letterSpacing: 0,
    fontFamily: fontFamily('Bold'),
    fontWeight: '700',
    textAlign: 'left',
  },
};
