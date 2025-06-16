import React from 'react';
import Image from 'next/image';
import { TypeNextImageWithFallback } from '@/common/types/types';

function NextImageWithFallback({
  fallback = '/placeholder.jpg',
  alt,
  src,
  ...props
}: TypeNextImageWithFallback) {
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    setError(false);
  }, [src]);

  console.log(error);

  return (
    <Image
      fill
      alt={alt}
      src={error ? fallback : src}
      onError={() => setError(true)}
      {...props}
    />
  );
}

export default NextImageWithFallback;
