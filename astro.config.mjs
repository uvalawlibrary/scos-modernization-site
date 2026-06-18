// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://uvalawlibrary.github.io',
  base: '/scos-modernization-site',
  integrations: [
    starlight({
      title: 'Scottish Court of Session Papers',
      description:
        'A cross-Atlantic archive of 18th-century Scottish law, modernised for scholarship at scale.',
      // logo: { src: './src/assets/wordmark.svg', replacesTitle: false },
      // ↑ enable when wordmark/imagery from UVA Law Library brand is ready
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/uvalawlibrary/scos-modernization-site',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/uvalawlibrary/scos-modernization-site/edit/main/',
      },
      lastUpdated: true,
      pagefind: false,
      sidebar: [
        {
          label: 'The Collection',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'collection' },
            { label: 'Why the Session Papers Matter', slug: 'collection/significance' },
            { label: 'Where the Papers Live', slug: 'collection/holdings' },
            { label: 'The Historical Period', slug: 'collection/timeline' },
          ],
        },
        {
          label: 'The Platform Today',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'platform' },
            { label: 'The 2018 Launch', slug: 'platform/origins' },
            { label: 'Eight Years of Expert Cataloging', slug: 'platform/cataloging' },
            { label: 'What scos.law Does Today', slug: 'platform/today' },
          ],
        },
        {
          label: 'What Comes Next',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'future' },
            { label: 'Preservation', slug: 'future/preservation' },
            { label: 'Text Pipeline', slug: 'future/text-pipeline' },
            { label: 'Case Binding', slug: 'future/case-binding' },
            { label: 'Canonical Data Layer', slug: 'future/canonical-data' },
            { label: 'Search', slug: 'future/search' },
            { label: 'Scholarship', slug: 'future/scholarship' },
            { label: 'Partnership', slug: 'future/partnership' },
          ],
        },
        {
          label: 'About',
          collapsed: true,
          items: [
            { label: 'Team, Funding, Citation', slug: 'about' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
