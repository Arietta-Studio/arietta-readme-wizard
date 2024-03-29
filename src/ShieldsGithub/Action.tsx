import { useControls, useCreateStore } from '@arietta-studio/ui';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { genGithubActionsShield } from '@/services/genGithubShield';

import { defaultControlsExtra } from './share';

const controls = {
  workflow: 'test,release',
  ...defaultControlsExtra,
};

const GithubAction = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => genGithubActionsShield(options), [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default GithubAction;
