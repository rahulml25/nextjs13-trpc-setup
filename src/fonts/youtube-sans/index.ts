import localFont from 'next/font/local';

// 100 -> 900

const fonts = [
  'YouTubeSansBlack.otf', //
  'YouTubeSansBold.otf', //

  'YouTubeSansDarkBlack.otf',
  'YouTubeSansDarkBold.otf',
  'YouTubeSansDarkExtrabold.otf',
  'YouTubeSansDarkLight.otf',
  'YouTubeSansDarkMedium.otf',
  'YouTubeSansDarkRegular.otf',
  'YouTubeSansDarkSemibold.otf',

  'YouTubeSansExtrabold.otf', //
  'YouTubeSansLight.otf', //
  'YouTubeSansMedium.otf',
  'YouTubeSansRegular.otf', //
  'YouTubeSansSemibold.otf', //
];

const youtubeSans = localFont({
  src: [
    // Light
    {
      path: './YouTubeSansLight.otf',
      weight: '300',
      style: 'normal',
    },

    // Regular
    {
      path: './YouTubeSansRegular.otf',
      weight: '400',
      style: 'normal',
    },

    // Medium
    {
      path: './YouTubeSansMedium.otf',
      weight: '500',
      style: 'normal',
    },

    // Sebibold
    {
      path: './YouTubeSansSemibold.otf',
      weight: '600',
      style: 'normal',
    },

    // Bold
    {
      path: './YouTubeSansBold.otf',
      weight: '700',
      style: 'normal',
    },

    // Extrabold
    {
      path: './YouTubeSansExtrabold.otf',
      weight: '800',
      style: 'normal',
    },

    // Black
    {
      path: './YouTubeSansBlack.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default youtubeSans;
