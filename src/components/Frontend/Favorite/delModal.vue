<template>
  <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span v-if="delTitle === 'all'">
              確定要清空關注的商品嗎 ?
            </span>
            <span v-else>
              確定取消關注 {{ delTitle }} ?
            </span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消
          </button>
          <button v-if="delTitle === 'all'" type="button" class="btn btn-danger" @click="delAll">確認
          </button>
          <button v-else type="button" class="btn btn-danger" @click="delFavItem">確定</button>
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
    delFavItem () {
      this.$emit('removeFavItemHandler')
    },
    delAll () {
      this.$emit('cleanAllFavItemsHandler')
    }

  },
  mixins: [modalMixin]
}
</script>
