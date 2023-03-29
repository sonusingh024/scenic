import linkicon from './linkicon.twig';
import linkiconData from './linkicon.yml';
import './linkicon.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Linksicon' };
export const linkicons = () => linkicon(linkiconData);
