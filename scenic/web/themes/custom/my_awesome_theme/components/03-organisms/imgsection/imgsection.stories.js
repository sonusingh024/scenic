import imgsection from './imgsection.twig';
import imgsectionData from './imgsection.yml';
import './imgsection.scss';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/imgsection' };
export const imgsections = () => imgsection(imgsectionData);
