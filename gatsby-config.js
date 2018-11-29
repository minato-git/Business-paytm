const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');


module.exports = {
  siteMetadata: {
    title: 'Business-Paytm',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Business-paytm',
        short_name: 'Business',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#223e99',
        display: 'minimal-ui',
        icon: 'static/assets/favicon.ico', // This path is relative to the root of the site.
      },
    },
  ],
}

imagemin(['static/assets/*.{jpg,png,jpeg}'], 'public/assets/images', {
  use: [
      imageminWebp({quality: 50})
  ],
});

imagemin(['static/assets/*.{jpg,jpeg}'], 'public/assets/images/compressed', {
plugins: [
  imageminJpegRecompress({quality: 'medium'})
]});