import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import MonoRail from '@seed-world-group/package-theme-monorail/browser';

const AutoScroll = () => import(/* webpackChunkName: "global-auto-scroll" */ './auto-scroll.vue');
const BillboardCookie = () => import(/* webpackChunkName: "global-billboard-cookie" */ './billboard-cookie.vue');
const CompanySearch = () => import(/* webpackChunkName: "global-company-search" */ './company-search.vue');
const SectionSearch = () => import(/* webpackChunkName: "global-section-search" */ './section-search.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  const { EventBus } = Browser;

  GCSE(Browser);
  MonoRail(Browser);

  Browser.register('GlobalBillboardCookie', BillboardCookie);

  Browser.register('GlobalImageSlider', ImageSlider);

  Browser.register('GlobalAutoScroll', AutoScroll);

  Browser.register('GlobalCompanySearch', CompanySearch, {
    provide: { EventBus },
  });
  Browser.register('GlobalSectionSearch', SectionSearch, {
    provide: { EventBus },
  });
};
