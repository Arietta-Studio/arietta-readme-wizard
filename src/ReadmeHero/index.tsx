import { folder, useControls, useCreateStore } from 'leva';
import { memo, useMemo } from 'react';

import { defaultControls, defaultControlsExtra } from '@/Readme/share';
import MarkdownStorybook from '@/components/MarkdownStorybook';
import { genMarkdownHero } from '@/services/genMarkdownHero';

const controls = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  logo: 'https://unpkg.com/@arietta-studio/assets-logo@latest/assets/logo-3d.webp',
  logo2: '',
  title: 'Arietta Readme Wizard',
  description: 'Generate Arietta style product README 🪄',
  banner: 'https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png',
  backToTop: true,
  Github: folder({ ...defaultControls, branch: 'master', workflow: 'test,release' }),
  NPM: folder({
    packageName: '@arietta-studio/readme-wizard',
  }),
  ...defaultControlsExtra,
  /* eslint-enable */
};

const Hero = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => genMarkdownHero(options), [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default Hero;
