import footerorg from './footerorg.twig';
import footerorgData from './footerorg.yml';
import './footerorg.scss';
import footermoleData from '../../02-molecules/footermole/footermole.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/footerorg' };
export const footerorgs = () =>
  footerorg({ ...footerorgData, ...footermoleData });
