import imgsectiontwo from './imgsectiontwo.twig';
import imgsectiontwoData from './imgsectiontwo.yml';
import './imgsectiontwo.scss';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/imgsectiontwo' };
export const imgsectiontwos = () => imgsectiontwo(imgsectiontwoData);
