import { folder, useControls, useCreateStore } from 'leva';
import { memo, useMemo } from 'react';

import { defaultControls, defaultControlsExtra } from '@/Readme/share';
import MarkdownStorybook from '@/components/MarkdownStorybook';
import { genMarkdownHero } from '@/services/genMarkdownHero';

const controls = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  logo: 'https://registry.npmmirror.com/@arietta-studio/assets-logo/1.0.0/files/assets/logo-3d.webp',
  logo2: '',
  title: 'Arietta Chat',
  description:
    'Arietta Chat is a open-source, extensible , high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.',
  banner: 'https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png',
  backToTop: true,
  Github: folder({ ...defaultControls, branch: 'main', workflow: 'test,release' }),
  NPM: folder({
    packageName: '@arietta-studio/chat',
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
