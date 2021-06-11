<template>
  <div>
    <router-link to="/" class="to-home">
    <i class="material-icons">home</i>
    </router-link>
    <!-- 각 페이지들의 출력되는 영역 설정 -->
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
// 실제 해당 페이지에서는 버튼 안보이게 처리
  .to-home.router-link-exact-active {
    display: none;
  }
</style>