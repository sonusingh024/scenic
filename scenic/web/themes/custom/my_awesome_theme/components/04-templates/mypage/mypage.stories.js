import mypage from './mypage.twig';
import mypageData from './mypage.yml';
import navbarData from '../../03-organisms/navbar/navbar.yml';
import bannertextData from '../../02-molecules/bannertext/bannertext.yml';
import imgsectionData from '../../03-organisms/imgsection/imgsection.yml';
import infoData from '../../03-organisms/info/info.yml';
import imgsectiontwoData from '../../03-organisms/imgsectiontwo/imgsectiontwo.yml';
import ctamoleculeData from '../../02-molecules/ctamolecule/ctamolecule.yml';
import footerorgData from '../../03-organisms/footerorg/footerorg.yml';
import footermoleData from '../../02-molecules/footermole/footermole.yml';
/**
 * ule Definition.
 */
export default { title: 'Templates/mypage' };
export const mypages = () =>
  mypage({
    ...mypageData,
    ...navbarData,
    ...bannertextData,
    ...imgsectionData,
    ...infoData,
    ...imgsectiontwoData,
    ...ctamoleculeData,
    ...footerorgData,
    ...footermoleData,
  });
