import React from 'react';

export default function Link({ href, children, ...props }) {
  const resolvedHref = typeof href === 'string' ? href : href?.pathname || '#';

  if (React.isValidElement(children) && children.type === 'a') {
    return React.cloneElement(children, {
      href: resolvedHref,
      ...props,
      ...children.props,
    });
  }

  return (
    <a href={resolvedHref} {...props}>
      {children}
    </a>
  );
}
