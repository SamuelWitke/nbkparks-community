// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nbkparks-community',
  tagline: 'North Brooklyn Community Website',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/nbkparks-community/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://nbkparks.org/wp-content/themes/NBKPA-wp_v2.8.7/favicon/favicon-32x32.png',
  organizationName: 'nbkparks', // Usually your GitHub org/user name.
  projectName: 'nbkparks-community', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
         googleAnalytics: {
              trackingID: 'G-VR9SXWEQ58',
              anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SamuelWitke/nbkparks-community/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SamuelWitke/nbkparks-community/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        blogSidebarCount: 'ALL',
        id: 'gardens',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'gardens',
        blogSidebarTitle: 'All Gardens',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './gardens/',
        editUrl:
          'https://github.com/SamuelWitke/nbkparks-community/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        postsPerPage: "ALL",
        id: 'getting-started',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'getting-started',
        blogSidebarTitle: 'How To & Contributing',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './how-to&contributing',
        editUrl:
          'https://github.com/SamuelWitke/nbkparks-community/edit/main/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'nbkparks-community',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🎉 Events',
          },
          { to: '/gardens', label: '🏡 Gardens', position: 'left' },
          { to: '/blog', label: '📋 Community Board', position: 'left' },
          { to: '/getting-started', label: 'Getting Started 🚀', position: 'right' },
          {
            href: 'https://github.com/SamuelWitke/nbkparks-community',
            label: 'Source',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Open Garden Day Info',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Board',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SamuelWitke/nbkparks-community',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nbkparks-community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
