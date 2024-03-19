import { useControls, useCreateStore } from '@arietta-studio/ui';
import { folder } from 'leva';
import { memo, useMemo } from 'react';

import MarkdownStorybook from '@/components/MarkdownStorybook';
import { githubSocialControlsPickList } from '@/const/githubShieldControls';
import { genGithubSocialShields } from '@/services/genGithubShield';

import { defaultControlsExtra } from './share';

const controls = {
  branch: 'master',
  ...defaultControlsExtra,
};
const pickControls = { ['✅']: folder(githubSocialControlsPickList, { collapsed: true }) };

const GithubSocial = memo(() => {
  const store = useCreateStore();

  const options = useControls(controls, { store });
  const pickOptions = useControls(pickControls, { store });

  const md = useMemo(() => genGithubSocialShields(options, pickOptions), [options, pickOptions]);

  return <MarkdownStorybook levaStore={store}>{md.join('\n\n')}</MarkdownStorybook>;
});

export default GithubSocial;
