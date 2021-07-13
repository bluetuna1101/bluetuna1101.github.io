<template>
  <!-- showHeader값이 false가 되면 hide-header 클래스를 바인딩 -->
  <header :class="{'hide-header': !showHeader}">
    hello
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
  	// 마운트
    this.lastScrollPosition = window.pageYOffset
    // 스크롤 이벤트 등록
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
  	// 페이지 파괴 시 이벤트 삭제
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // 스크롤 범위 설정
      const offset = 60

      if (window.pageYOffset < 0) {
        return
      }
      
      // 현 페이지 높이와 마지막 스크롤 위치로 60값이 일치하지 않으면 계속 갇혀있음
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < offset) {
        return
      }
      
      // offset값이 일치해 벗어나면 아래 로직을 실행
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}

<style>
// 헤더를 Y축으로 -73px 이동시켜 사라지게 하는 css
.hide-header {
  transform: translate(0px, -73px);
}
</style>