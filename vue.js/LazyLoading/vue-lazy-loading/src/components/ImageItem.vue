<template>
  <div class="img-item">
      <!-- <img :src="imgSrc" v-img-lazy-loading />  전달 받은 이미지 URL을 바인딩 -->
      <div class="conatiner" v-img-lazy-loading="imgSrc"></div>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
      imgSrc: String, // 부모 컴포넌트 이미지 URL props를 전달 받기위해 추가
  }
}
</script>

<style scoped>
  .conatiner {
    position: relative;
    width: 600px;
    height: 600px;
    margin-bottom: 10px;
  }
</style>
