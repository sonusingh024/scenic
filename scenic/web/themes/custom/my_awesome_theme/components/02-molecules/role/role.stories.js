import role from './role.twig';
import roleData from './role.yml';
import './role.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/role' };
export const roles = () => role(roleData);
