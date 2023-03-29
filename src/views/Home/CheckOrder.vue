<template>
  <div class="main container">
    <HomeLoading :isLoading="isLoading"></HomeLoading>
    <div class="back-button">
      <router-link to="/home/Shoppingcart">
        <i class="bi bi-arrow-left"></i>
        回購物車
      </router-link>
    </div>
    <div class="row gx-5">
      <div class="col-12 col-md-12 col-lg-5 order-lists-wrap">
        <div class="order-lists">
          <h2 class="table-title">購物清單</h2>
          <table class="table">
            <thead class="table-thead">
              <tr>
                <th class="list-title">品名</th>
                <th class="list-qty">數量</th>
                <th class="list-price">單價</th>
              </tr>
            </thead>
            <tbody class="table-tbody">
              <tr v-for="list of cartLists" :key="list.id">
                <td class="list-title">
                  {{ list.product.title }}
                </td>
                <td>{{ list.qty }}</td>
                <td class="list-price">
                  {{ $filters.currency(list.product.price) }}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="order-info">
            <div class="info-list">
              <div>商品數</div>
              <div>{{ cartLists.length }}</div>
            </div>
            <div class="info-list">
              <div>商品總額</div>
              <div>{{ $filters.currency(total) }}</div>
            </div>
            <div class="info-list discount-text">
              <div>折價</div>
              <div>{{ $filters.currency(total - finalTotal) }}</div>
            </div>
            <div class="info-list total-price-text">
              <div>總計</div>
              <div>{{ $filters.currency(finalTotal) }}</div>
            </div>
          </div>
          <div class="coupon-wrap">
            <input type="text" v-model="couponCode" placeholder="請輸入折扣碼">
            <button @click="setCoupon" :disabled="couponCode === ''">確認</button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-12 col-lg-7 order-form-wrap">
        <div class="order-forms">
          <h2 class="form-title">訂購人資訊</h2>
          <div class="order-form row justify-content-center">
            <VForm class="order-form-main" ref="orderForm" v-slot="{ meta, errors }" @submit="createOrder">
              <div class="input-wrap">
                <label for="name" class="form-label">姓名<span>*</span></label>
                <VField v-model="form.user.name" name="name" type="text" rules="required" class="form-control"
                  placeholder="請輸入姓名" :class="{ 'is-invalid': errors['name'] }">
                </VField>
                <ErrorMessage class="invalid-feedback" name="name" />
              </div>
              <div class="input-wrap">
                <label for="email" class="form-label">信箱<span>*</span></label>
                <VField v-model="form.user.email" name="email" type="email" rules="required|email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="example@email.com" />
                <ErrorMessage class="invalid-feedback" name="email" />
                <!-- error-message 的 name 要跟 VField 的 name 對應 -->
              </div>
              <div class="input-wrap">
                <label for="phone" class="form-label">電話<span>*</span></label>
                <VField v-model="form.user.tel" name="phone" type="text" :rules="isPhone" class="form-control"
                  placeholder="請輸入電話" :class="{ 'is-invalid': errors['phone'] }"></VField>
                <ErrorMessage class="invalid-feedback" name="phone" />
              </div>
              <div class="input-wrap">
                <label for="address" class="form-label">地址<span>*</span></label>
                <VField v-model="form.user.address" name="address" type="text" rules="required" class="form-control"
                  placeholder="請輸入地址" :class="{ 'is-invalid': errors['address'] }"></VField>
                <ErrorMessage class="invalid-feedback" name="address" />
              </div>
              <div class="input-wrap">
                <label for="message" class="form-label">備註</label>
                <textarea v-model="form.message" class="form-control" id="form-message"></textarea>
              </div>
              <div class="buttons-wrap">
                <button type="button" class="reset-btn btn btn-outline-danger" @click="resetForm">重設</button>
                <button type="submit" class="submit-btn" :disabled="!meta.valid">送出</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          phone: '',
          address: ''
        },
        message: ''
      },
      isLoading: false,
      cartLists: [],
      total: 0,
      finalTotal: 0,
      couponCode: ''
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.cartLists = res.data.data.carts
            this.getPrice()
          }
        })
    },
    getPrice () {
      let total = 0
      let finalTotal = 0
      this.cartLists.forEach((list) => {
        total += list.total
        finalTotal += list.final_total
      })
      this.total = total
      this.finalTotal = finalTotal
    },
    setCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const payload = {
        data: {
          code: this.couponCode
        }
      }
      this.$http.post(api, payload)
        .then(res => {
          this.getCart()
        })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const payload = this.form
      this.$http.post(api, { data: payload })
        .then(res => {
          if (res.data.success) {
            const orderID = res.data.orderId
            this.resetForm()
            this.$router.replace(`checkout/${orderID}`)
          }
        })
    },
    resetForm () {
      this.$refs.orderForm.resetForm()
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
.main {
  margin-top: 20px;

  .back-button {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 10px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  .order-lists-wrap {
    .order-lists {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
      height: 100%;
      text-align: center;

      .table-title {
        font-weight: 900;
        padding: 30px 0px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        margin-bottom: 5px;
      }

      .table {
        margin-bottom: 5px;

        .table-thead {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 10px;

          .list-title {
            text-align: center;
          }

          .list-qty {
            min-width: 50px;
          }

          .list-price {
            text-align: right;
            min-width: 50px;
          }
        }

        .table-tbody tr,
        .table-tbody td {
          border: none;
          vertical-align: middle;
        }

        .table-tbody {
          font-size: 16px;

          .list-title {
            text-align: left;
            padding-left: 20px;
          }

          .list-price {
            text-align: right;
          }
        }
      }

      .order-info {
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 30px;
        width: 100%;
        font-size: 18px;
        border-top: 2px solid rgba(0, 0, 0, 0.4);

        .info-list {
          margin-top: 10px;
          display: flex;
          width: 100%;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.2);

          div:nth-child(1) {
            width: 70%;
            text-align: left;
          }

          div:nth-child(2) {
            text-align: right;
            width: 30%;
          }
        }

        .discount-text {
          font-weight: 900;
          color: #dc3545;
        }

        .total-price-text {
          color: #198754;
          font-weight: 900;
        }

      }

      .coupon-wrap {
        display: flex;
        padding: 10px 10px;
        margin-bottom: 10px;
        margin-top: 10px;

        input {
          width: 80%;
          border: 1px solid rgba(0, 0, 0, 0.25);
          height: 35px;
          padding: 5px;
          border-radius: 5px 0px 0px 5px;
        }

        button {
          width: 20%;
          border: none;
          background-color: #f36f10;
          color: #fff;
          border-radius: 0px 5px 5px 0px;
          font-size: 18px;
          font-weight: 900;

          &:disabled {

            background-color: gray;

          }
        }
      }
    }
  }

  .order-form-wrap {
    .order-forms {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
      height: 100%;

      .form-title {
        font-weight: 900;
        padding: 30px 0px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        margin-bottom: 5px;
        text-align: center;
      }

      .order-form {
        padding: 10px 20px;

        .order-form-main {
          .input-wrap {
            margin-bottom: 10px;

            .form-label {
              span {
                color: red;
                font-weight: 900;
                margin-left: 5px;
              }
            }
          }

          .buttons-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .submit-btn,
            .reset-btn {
              padding: 5px 25px;
              margin-left: 10px;
              font-size: 18px;
              font-weight: 900;
            }

            .reset-btn {
              font-size: 18px;
              font-weight: 900;
              border: 2px solid #dc3545;
            }

            .submit-btn {
              border: none;
              background-color: #f36f10;
              color: #fff;
              border-radius: 5px;
            }

            .submit-btn:disabled {
              background-color: gray;
            }
          }
        }
      }

    }
  }

}

@media (max-width: 991px) {
  .order-form-main {}

  .order-form-wrap {
    margin-top: 50px;
  }
}
</style>
