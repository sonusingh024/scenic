import ctamolecule from './ctamolecule.twig';
import ctamoleculeData from './ctamolecule.yml';
import './ctamolecule.scss';
/**
 * Add storybook definition for Animations.
 */
export default { title: 'Molecules/ctamolecule' };
export const ctamolecules = () => ctamolecule(ctamoleculeData);
