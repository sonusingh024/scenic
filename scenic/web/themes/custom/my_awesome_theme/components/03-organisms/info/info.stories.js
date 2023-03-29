import info from './info.twig';
import infoData from './info.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/info' };
export const infos = () => info(infoData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
