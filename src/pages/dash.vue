<template>
  <q-page>
    <q-fab color="amber" text-color="white" icon="fas fa-camera" style="right:-18.7rem; top:16rem">
    </q-fab>
    <parallax img="default.jpg">
      <section slot="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis consequat eros id rhoncus. Sed aliquet fringilla placerat. Donec eget efficitur sem. Pellentesque at blandit urna. Vivamus a fermentum magna. Sed tempor tellus odio, blandit scelerisque lacus venenatis id. Fusce laoreet diam eros, a ornare enim laoreet laoreet. Praesent ac odio ipsum.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lacinia, nunc eget scelerisque scelerisque, elit purus gravida neque, id pulvinar libero tortor sit amet magna. Nullam magna neque, varius at semper vel, consectetur auctor tortor. Nullam quis vulputate orci, eget pharetra nisl. Nam vehicula eu felis eu sodales. Sed molestie, ex eget dictum facilisis, sem turpis gravida urna, eu consectetur tortor augue in turpis. Vestibulum tortor tellus, volutpat eget imperdiet sed, dapibus a sem. Integer tincidunt aliquet malesuada. Quisque eget dapibus mi, euismod dignissim elit. Integer ac metus eget ipsum sagittis accumsan in ut ipsum.

        In sapien neque, vulputate pulvinar ante vel, euismod pellentesque augue. Integer ut eleifend lacus. Vivamus non nisi nisl. Etiam mollis purus in volutpat sagittis. Praesent quis libero at nulla vulputate convallis eget nec sapien. Phasellus vel risus metus. Vestibulum vitae lacinia nisl. Maecenas libero ante, consequat id felis nec, porta tincidunt augue. Nulla pulvinar porta nulla, sed bibendum ante ullamcorper eget. In hac habitasse platea dictumst.

        Sed placerat ornare imperdiet. Mauris tincidunt turpis et libero sagittis, vel placerat libero sodales. Aenean felis dolor, euismod in tellus ac, molestie iaculis elit. Fusce tincidunt pharetra velit, quis facilisis tellus sagittis et. In facilisis, est quis lobortis malesuada, magna dolor bibendum odio, et facilisis magna mi a urna. Aenean vel molestie tortor. Mauris maximus aliquet orci, vitae ullamcorper turpis laoreet ultrices. Mauris lorem nulla, facilisis a libero ac, sagittis ornare nunc. In hac habitasse platea dictumst.

        Suspendisse ornare tortor est, ut consequat dui pellentesque vel. Aliquam commodo condimentum ex. Cras ipsum tellus, malesuada vel placerat id, suscipit dignissim justo. Proin facilisis metus vitae libero hendrerit rutrum. Curabitur non cursus metus. Cras mollis ligula aliquet congue aliquam. Proin id nibh odio. Proin eleifend dolor nec lacus tempor faucibus. Nunc sed ante et massa tempor congue. Proin libero orci, iaculis a volutpat non, volutpat eu dolor. Sed suscipit enim tincidunt, condimentum leo at, elementum purus. Maecenas malesuada mauris vel quam mollis facilisis. Cras quis est dui. Morbi semper auctor urna, non bibendum arcu rutrum id. Sed ut luctus metus, in vestibulum lorem.
      </section>
    </parallax>
  </q-page>
</template>

<script>
import Parallax from '../components/Parallax';
export default {
  name: 'PageDashBoard',
  components: {
    'parallax' : Parallax,
  }
}
</script>

<style>
</style>
