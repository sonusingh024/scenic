import footermole from './footermole.twig';
import footermoleData from './footermole.yml';
import './footermole.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/footermole' };
export const footermoles = () => footermole(footermoleData);
