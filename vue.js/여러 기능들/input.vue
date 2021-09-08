<template>
  <div>
    <input v-model="price" type="text" />
    <textarea id="text" @input="autoResize" class="font-15r" v-model="content" type="text"></textarea>
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
  methods: {
    // textarea 크기 자동 조절
    autoResize(e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scrollHeight}px`
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
