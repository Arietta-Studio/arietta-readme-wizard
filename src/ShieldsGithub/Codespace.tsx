import { useControls, useCreateStore } from '@arietta-studio/ui';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { GenGithubCodespaceShield } from '@/services/genGithubShield';

import { defaultControls } from './share';

const controls = defaultControls;

const GithubCodespace = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });

  const md = useMemo(() => {
    return GenGithubCodespaceShield(options);
  }, [options]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default GithubCodespace;
