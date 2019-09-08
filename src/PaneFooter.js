import React from 'react'
import DefaultPaneFooter from './DefaultPaneFooter';

const PaneFooter = React.forwardRef(({element: Element, children, className, ...rest}, ref) => (
    <Element ref={ref} className={className}>
     {children || <DefaultPaneFooter {...rest}/>}
    </Element>
));

PaneFooter.defaultProps = {
  element: 'div',
}

PaneFooter.displayName = 'PaneFooter';

export default PaneFooter;