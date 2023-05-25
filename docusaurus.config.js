// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
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
            label: 'Base de Conhecimento',
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
      footer: {
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
        copyright: `© Copyright - 2023 - Todos os direitos reservados" <br>
        Razão Social: Calcenter Calçados Centro Oeste Ltda. CNPJ: 15.048.754/0119-80 IE: 257.7187-70 <br>Rua Roney Henrique Heiderscheidt, s/n, quadra D/E, Sala B, Bairro: Jardim Eldorado, CEP: 88133-515, Palhoça - SC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
