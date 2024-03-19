import { useControls, useCreateStore } from '@arietta-studio/ui';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { shieldBaseControls } from '@/const/shieldBaseControls';
import { genCustomDoubleShield } from '@/services/genCustomShield';

import { defaultControls } from './share';

const controls = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  content: 'Arietta Studio',
  labelColor: shieldBaseControls.labelColor,
  label: 'Readme Generator',
  color: {
    ...shieldBaseControls.color,
    value: 'white',
  },
  link: 'https://github.com/arietta-studio/arietta-readme-wizard',
  ...defaultControls,
  /* eslint-enable */
};

const CustomDouble = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => genCustomDoubleShield(options), [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default CustomDouble;
