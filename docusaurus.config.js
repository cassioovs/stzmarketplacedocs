// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [ 
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "apiDocs",
          docsPluginId: "classic",
          config: {
            petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
              specPath: "src/apis/vtex.yaml", // Path to designated spec file
              outputDir: "src/apis/", // Output directory for generated .mdx docs
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            },
            vtex: {
              specPath: "src/apis/vtex.yaml",
              outputDir: "src/apis/",
            }
          }
        },
      ]
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
  organizationName: 'cassioovs', // Usually your GitHub org/user name.
  projectName: 'stzmarketplacedocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','fr', 'fa'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this pag" links.
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
      //Algolia Search Config Files
      algolia: {
        // The application ID provided by Algolia
        appId: 'RZ02QS4D1R',
  
        // Public API key: it is safe to commit it
        apiKey: 'dcbf4fc17eadfaa37ac236ec80b2dd54',
  
        indexName: 'stzdocs',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
      },
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
            label: 'Guias',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Atualizações',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://youtube.com/',
                label: 'Ajuda para traduzir',
              },
            ],
          },
      
          {
            type: 'html',
            position: 'left',
            value: '<button>Versão 1.0</button>',
          },
        ],
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
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

