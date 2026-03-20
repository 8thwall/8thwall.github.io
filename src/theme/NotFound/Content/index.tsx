import React, {type ReactNode} from 'react';
import Content from '@theme-original/NotFound/Content';
import type ContentType from '@theme/NotFound/Content';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  console.log('not found!')
  return (
    <>
      <Content {...props} />
    </>
  );
}
