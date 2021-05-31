import Vue from 'vue';

const ImgLazyLoading = {
  inserted(el, binding) {
    console.log('directive inserted');
  },
  unbind(el, binding) {},
};

Vue.directive('img-lazy-loading', ImgLazyLoading);