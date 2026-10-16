import React from 'react';

const GlassCard = ({ as: Component = 'article', className = '', children, ...props }) => (
  <Component className={`glass-card ${className}`} {...props}>
    {children}
  </Component>
);

export default GlassCard;
