import './style.css';

import * as React from 'react';

import LoadingSpinner from '>/components/LoadingSpinner';

interface LoadingZoneProps {
  className?: string;
}

function LoadingZone(props: LoadingZoneProps) {
  let baseClassName = 'LoadingZone';
  let className = baseClassName;

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <LoadingSpinner className={`${baseClassName}__spinner`} />
    </div>
  );
}

export default LoadingZone;
