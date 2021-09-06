<template>
  <div>
    <input v-model="price" type="text" />
    <textarea id="text" class="font-15r" v-model="content" type="text"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: '',
      content: ''
    }
  },
  watch: {
    // 입력시 원단위로 분리
    price(val) {
      if (val != '협의')
        this.price = val
          .replace(/[^0-9]/g, '')
          .replace(/(^0+)/, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    // 솔루션 입력 길어지면 입력창 높이 키우기
    content() {
      const scrollHeight = document.querySelector('#text').scrollHeight
      const offsetHeight = document.querySelector('#text').offsetHeight
      if (scrollHeight >= offsetHeight) {
        document.querySelector('#text').style.height = `${scrollHeight}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
