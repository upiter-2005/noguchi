import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
  const css = {
    margin: "0",
    borderRadius: "16px"
  }
  return (
    <ContentLoader
      speed={2}
      width={365}
      height={298}
      style={css}
      viewBox="0 0 365 298"
      backgroundColor="#f99989"
      foregroundColor="#fefefe"
    // {...props}
    >
      <rect x="0" y="0" rx="2" ry="2" width="365" height="260" />
      <rect x="0" y="180" rx="0" ry="0" width="365" height="14" />
      <rect x="0" y="226" rx="0" ry="0" width="365" height="17" />
      <rect x="0" y="262" rx="2" ry="2" width="365" height="41" />
    </ContentLoader>
  )

};
export default Skeleton;