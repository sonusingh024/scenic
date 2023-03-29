import navbar from './navbar.twig';
import navbarData from './navbar.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/navbar' };
export const navbars = () => navbar(navbarData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
