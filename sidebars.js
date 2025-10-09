const sidebars = {
  tutorialSidebar: [  // ubah dari docsSidebar jadi tutorialSidebar
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/installation',
        'user-guide/tasks',
      ],
    },
    {
      type: 'category',
      label: 'API Documentation',
      collapsed: false,
      items: [
        'api/overview',
        'api/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: [
        'developer-guide/architecture',
        'developer-guide/setup',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/glossary',
        'reference/changelog',
      ],
    },
  ],
};

export default sidebars;
