import * as React from 'react';
import { shallow } from 'enzyme';

import ContentShell from './ContentShell';

describe(__filename, () => {
  const render = (props = {}) => {
    return shallow(<ContentShell {...props} />);
  };

  it('accepts a custom className', () => {
    const className = 'MyContent';
    const root = render({ className });

    expect(root.find(`.${className}`)).toHaveLength(1);
  });

  it('renders children', () => {
    const childClass = 'ChildExample';

    const root = render({ children: <div className={childClass} /> });

    expect(root.find(`.${childClass}`)).toHaveLength(1);
  });

  it('renders a mainSidePanel', () => {
    const childClass = 'ChildExample';

    const root = render({ mainSidePanel: <div className={childClass} /> });

    expect(root.find(`.${childClass}`)).toHaveLength(1);
  });

  it('accepts a mainSidePanelClass', () => {
    const customClass = 'Example';

    const root = render({ mainSidePanelClass: customClass });

    expect(root.find(`.${customClass}`)).toHaveLength(1);
  });

  it('renders an altSidePanel', () => {
    const childClass = 'ChildExample';

    const root = render({ altSidePanel: <div className={childClass} /> });

    expect(root.find(`.${childClass}`)).toHaveLength(1);
  });

  it('accepts an altSidePanelClass', () => {
    const customClass = 'Example';

    const root = render({ altSidePanelClass: customClass });

    expect(root.find(`.${customClass}`)).toHaveLength(1);
  });
});
