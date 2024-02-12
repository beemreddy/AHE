import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { getTomatoVarieties } from './data/tomatodata';
import { getRadishVarieties } from './data/radishdata';
import { getSpinachVarieties } from './data/spinachdata';
import { getTips } from './data/tips';
import { getReviews } from './data/reviews';

const navStyles: Partial<INavStyles> = { root: { width: 300 } };

const tips = getTips();
const reviews = getReviews();
const tomatoVarieties = getTomatoVarieties();
const radishVarieties = getRadishVarieties();
const spinachVarieties = getSpinachVarieties();

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Tips',
    expandAriaLabel: 'Expand tips section',
    collapseAriaLabel: 'Collapse tips section',
    links: tips,
    collapseByDefault: true
  },
  {
    name: 'Reviews',
    expandAriaLabel: 'Expand reviews section',
    collapseAriaLabel: 'Collapse reviews section',
    links: reviews,
    collapseByDefault: true
  },
  {
    name: 'Tomatoes',
    expandAriaLabel: 'Expand Tomatoes section',
    collapseAriaLabel: 'Collapse Tomatoes section',
    links: tomatoVarieties,
    collapseByDefault: true
  },
  {
    name: 'Radish',
    expandAriaLabel: 'Expand Radish section',
    collapseAriaLabel: 'Collapse Radish section',
    links: radishVarieties,
    collapseByDefault: true
  },
  {
    name: 'Spinach',
    expandAriaLabel: 'Expand Spinach section',
    collapseAriaLabel: 'Collapse Spinach section',
    links: spinachVarieties,
    collapseByDefault: true
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Navigation menu for video categories and videos" groups={navLinkGroups}/>
  );
};
