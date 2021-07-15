<template>
  <div @click="open">open new window</div>
</template>

<script>
export default {
  methods: {
    // 기존 창 이동 rouet.push
    open() {
      this.$router.push({name: 'article-idx', params: {idx: item.idx}})
    },
    // resolve + window open으로 새창에서 열기
    open() {
      const detail = this.$router.resolve({name: 'article-idx', params: {idx: item.idx}})
      window.open(detail.href, '_blank')
    }
  }
}
</script>