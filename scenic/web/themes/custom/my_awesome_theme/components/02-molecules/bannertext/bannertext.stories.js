import bannertext from './bannertext.twig';
import bannertextData from './bannertext.yml';
/**
 * Add storybook definition for Animations.
 */
export default { title: 'Molecules/bannertext' };
export const bannertexts = () => bannertext(bannertextData);
