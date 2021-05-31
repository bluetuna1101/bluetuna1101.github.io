<template>
  <div class="img-list">
    <ImageItem img-src="https://picsum.photos/id/1/600/600" /> <!-- 이미지 URL을 전달 -->
  </div>
</template>

<script>
import ImageItem from './ImageItem'

export default {
  name: 'ImageList',
  components: {
    ImageItem,
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>