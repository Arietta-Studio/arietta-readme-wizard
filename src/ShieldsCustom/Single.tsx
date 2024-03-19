import { useControls, useCreateStore } from '@arietta-studio/ui';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { shieldBaseControls } from '@/const/shieldBaseControls';
import { genCustomSingleShield } from '@/services/genCustomShield';

import { defaultControls } from './share';

const controls = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  label: 'Readme Generator',
  color: {
    ...shieldBaseControls.color,
    value: 'black',
  },
  link: 'https://github.com/arietta-studio/arietta-readme-wizard',
  ...defaultControls,
  /* eslint-enable */
};

const CustomSingle = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => genCustomSingleShield(options), [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default CustomSingle;
