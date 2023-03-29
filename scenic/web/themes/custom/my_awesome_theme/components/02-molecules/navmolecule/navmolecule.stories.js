import navmolecule from './navmolecule.twig';
import navmoleculeData from './navmolecule.yml';
import './navmolecule.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/navmolecule' };
export const navmolecules = () => navmolecule(navmoleculeData);
