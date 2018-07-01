import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears,
  QSpinnerFacebook
} from 'quasar';

export default ({ app, router, Vue }) => {
  Vue.prototype.$redirecionaComLoad = (caminho) => {
    Loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'amber',
        spinnerSize: 140,
    });
    setTimeout(() => {
      Loading.hide();
      router.push(caminho);
    },2000);
  }
}
