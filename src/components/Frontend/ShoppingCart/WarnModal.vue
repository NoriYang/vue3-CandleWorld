<template>
  <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>
              刪除
              {{ delTitle }}
            </span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-danger" @click="delHandler">確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    delTitle: {
      type: String
    }
  },
  data () {
    return {
      modal: ''
    }
  },
  methods: {
    delHandler () {
      if (this.delTitle !== '購物車全部內容') {
        this.$emit('delItem')
      } else {
        this.$emit('cleanCartHandler')
      }
    }
  },
  mixins: [modalMixin]
}
</script>

<style lang="scss"></style>
