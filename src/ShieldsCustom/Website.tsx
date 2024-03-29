import { useControls, useCreateStore } from '@arietta-studio/ui';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { shieldBaseControls } from '@/const/shieldBaseControls';
import { genWebsiteShield } from '@/services/genCustomShield';

import { defaultControls } from './share';

const controls = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  label: 'Arietta Chat',
  url: 'https://chat-preview.arietta-studio.ai',
  up_message: 'online',
  down_message: 'offline',
  labelColor: {
    ...shieldBaseControls.labelColor,
    value: 'black',
  },
  ...defaultControls,
  /* eslint-enable */
};

const Website = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => genWebsiteShield(options), [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default Website;
