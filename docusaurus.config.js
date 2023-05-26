// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'mobile',
          'saveData',
          'always'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/docusaurus.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],

  title: 'Docs',
  tagline: 'Aprenda mais a respeito das operações relacionadas ao marketplaces',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://stzmarketplacedocs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title:"",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        }, 
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial Rápido',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guias',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Suporte',
          },
          //{to: '/blog', label: 'Blog', position: 'left'}
          {
            href: 'https://hub2b.zendesk.com/hc/pt-br/requests',
            label: 'Central de Ajuda Hub2b',
            position: 'right',
          },
          {
            href: 'https://pluggto.atlassian.net/servicedesk/customer/portals',
            label: 'Central de Ajuda Plugg.to',
            position: 'right',
          }
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          '<H2>EM PROCESSO DE HOMOLOGAÇÃO</H2> <h3><a href="https://wa.me/5551980130941" target="_blank" >ENVIE SEU FEEDBACK </a></h3>',
        backgroundColor: '#FF0000',
        textColor: '#fff',
        isCloseable: false,
      },
      footer: {
        logo: {
          src: '/img/logo.png',
          width: 300,
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Base de Conhecimento',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/studiozcalcados/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/studiozcalcados/',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Acessar Hub2b ',
                href: 'https://app.hub2b.com.br/entrar',
              },
              {
                label: 'Acessar Plugg.to',
                href: 'https://painel.plugg.to/login',
              },
            ],
          },
        ],
        copyright: "© Copyright - 2023 <br> Todos os direitos reservados <br> Razão Social: Calcenter Calçados Centro Oeste Ltda. <br> CNPJ: 15.048.754/0119-80 <br>",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// PWA Config with Manifest
