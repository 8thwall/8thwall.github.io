import React from 'react';
import Content from '@theme-original/DocItem/Content';
import { useLocation } from '@docusaurus/router';

export default function DocItemContent(props) {
  const { pathname } = useLocation();
  const isLegacyDoc =
    pathname.startsWith('/legacy-policies/') && pathname !== '/legacy-policies/';

  return (
    <>
      {isLegacyDoc && (
        <div className="legacy-policy-notice">
          This policy remains in effect for 8th Wall hosted projects through February 28, 2027. The hosted platform was retired on February 28, 2026.
        </div>
      )}
      <Content {...props} />
    </>
  );
}
