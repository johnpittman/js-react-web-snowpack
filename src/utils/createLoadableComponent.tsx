import React, { Suspense } from 'react';

import LoadingZone from '>/components/LoadingZone';

export default function createLoadableComponent(component: any) {
  const Component = React.lazy(() => component);

  return function LoadableComponent() {
    return (
      <Suspense fallback={<LoadingZone />}>
        <Component />
      </Suspense>
    );
  };
}
