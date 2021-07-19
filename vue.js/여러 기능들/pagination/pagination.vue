<script>
export default {
  props: {
    value: {
      // current page
      type: Number,
      required: true
    },
    pageCount: {
      // page numbers
      type: Number,
      required: true
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    labels: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  mounted() {
    if (this.value > this.pageCount) {
      this.$emit('input', this.pageCount)
    }
  },
  computed: {
    items() {
      // 해당 페이지와 양옆 페이지를 보여주는 페이지네이션
      let valPrev = this.value > 1 ? this.value - 1 : 1 // for easier navigation - gives one previous page
      let valNext = this.value < this.pageCount ? this.value + 1 : this.pageCount // one next page
      let extraPrev = valPrev === 3 ? 2 : null
      let extraNext = valNext === this.pageCount - 2 ? this.pageCount - 1 : null
      let dotsBefore = valPrev > 3 ? 2 : null
      let dotsAfter = valNext < this.pageCount - 2 ? this.pageCount - 1 : null
      let output = []
      for (let i = 1; i <= this.pageCount; i += 1) {
        if ([1, this.pageCount, this.value, valPrev, valNext, extraPrev, extraNext, dotsBefore, dotsAfter].includes(i)) {
          output.push({
            label: i,
            active: this.value === i,
            disable: [dotsBefore, dotsAfter].includes(i)
          })
        }
      }
      return output
    },
    hasFirst() {
      return this.value === 1
    },
    hasLast() {
      return this.value === this.pageCount
    }
  },
  watch: {
    value: function () {
      this.$emit('change')
    }
  },
  methods: {
    first() {
      if (!this.hasFirst) {
        this.$emit('input', 1)
      }
    },
    prev() {
      if (!this.hasFirst) {
        this.$emit('input', this.value - 1)
      }
    },
    goto(page) {
      this.$emit('input', page)
    },
    next() {
      if (!this.hasLast) {
        this.$emit('input', this.value + 1)
      }
    },
    last() {
      if (!this.hasLast) {
        this.$emit('input', this.pageCount)
      }
    }
  }
}
</script>