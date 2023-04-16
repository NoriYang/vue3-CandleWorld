<template>
  <div>
    <div class="modal fade"
      ref="modal"
      id="AlertModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered alert-modal">
        <div class="modal-content">
          <div class="modal-body alert-modal-body">
            <div class="circle">
              <div class="line"></div>
            </div>
            <h2 class="mt-3">{{ title }}</h2>
          </div>
          <div class="modal-footer">
            <button type="button"
              class="btn submit-btn"
              data-bs-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin.js'
export default {
  mixins: [modalMixin],
  props: {
    title: {
      type: String,
      default: '成功新增到我的最愛'
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-body {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal-footer {
  button {
    width: 100%;
  }
}

.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 99rem;
  border: 8px solid #68E534;
}

.line {
  width: 100%;
  height: 100%;
  position: relative;
}

.line::before {
  border: 1px solid #000;
  content: '';
  position: absolute;
  width: 50px;
  border: 5px solid #68E534;
  top: 60%;
  left: 25%;
  transform: rotate(35deg);
}

.line::after {
  content: '';
  position: absolute;
  width: 100px;
  border: 5px solid #68E534;
  top: 45%;
  left: 35%;
  transform: rotate(-55deg);
}
.submit-btn {
  color: #5ecc2e;
  border: 1px solid #5ecc2e;
}
.submit-btn:hover {
  color: white;
  background-color: #5ecc2e;
}
</style>
