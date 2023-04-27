import localFont from 'next/font/local';

// 100 -> 900

const fonts = [
  'Roboto-Black.ttf', // 900
  'Roboto-BlackItalic.ttf', // 900
  'Roboto-Bold.ttf', // 700
  'Roboto-BoldItalic.ttf', //
  'Roboto-Italic.ttf', // 400
  'Roboto-Light.ttf', // 300
  'Roboto-LightItalic.ttf', // 300
  'Roboto-Medium.ttf', // 500
  'Roboto-MediumItalic.ttf', // 500
  'Roboto-Regular.ttf', // 400
  'Roboto-Thin.ttf', // 100
  'Roboto-ThinItalic.ttf', // 100
];

const roboto = localFont({
  src: [
    // Thin
    {
      path: './Roboto-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Roboto-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },

    // Light
    {
      path: './Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Roboto-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },

    // Regular
    {
      path: './Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },

    // Medium
    {
      path: './Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Roboto-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },

    // Bold
    {
      path: './Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },

    // Black
    {
      path: './Roboto-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Roboto-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default roboto;
