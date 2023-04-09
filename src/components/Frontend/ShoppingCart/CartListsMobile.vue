<template>
  <div>
    <div class="list-cards">
      <div class="cart" v-if="cartLists.length != 0">
        <div class="list-card" v-for="cart of cartLists" :key="cart.id">
          <div class="card-top">
            <div class="card-img">
              <img :src="cart.product.imageUrl" alt="">
            </div>
            <div class="card-info">
              <div class="info-title">
                <span>{{ cart.product.title.split('-')[0] }}</span>
                <span>{{ cart.product.title.split('-')[1] }}</span>
              </div>
              <div class="info-per-price">
                $ {{ $filters.currency(cart.product.price) }}
              </div>

            </div>
          </div>
          <div class="info-bottom">
            <div class="info-qty-buttons">
              <button class="btn qty-btn qty-btn-right" @click="updateCart(cart, -1)" :disabled="cart.qty === 1">
                <i class="bi bi-dash"></i>
              </button>
              <span class="cart-qty-text">
                {{ cart.qty }}
              </span>
              <button class="btn qty-btn qty-btn-left" @click="updateCart(cart, 1)">
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <div class="card-total-price">
              $ {{ $filters.currency(cart.final_total) }}
            </div>
          </div>
          <div class="clean-btn">
            <button class="btn del-btn" @click="delList(cart.id)">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="Empty-cart" v-else>
        <h2>購物車內無選購商品</h2>
        <span>請前往<router-link to="/productslist/lists">商品列表</router-link></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartLists: {
      type: Array
    }
  },
  methods: {
    delList (id) {
      this.$emit('delListHandler', id)
    },
    updateCart (list, num) {
      list.qty += num
      this.$emit('updateCartHandler', list)
    }
  }
}
</script>
<style lang="scss">
.list-cards {
  margin-bottom: 5px;

  .list-card {
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
    position: relative;

    .card-top {
      padding: 10px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      .card-img {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 120px;
          height: 120px;
          box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
        }
      }

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        padding-left: 10px;

        .info-title {
          :nth-child(1) {
            font-weight: 800;
            font-size: 16px;
            display: block;
          }

          :nth-child(2) {
            font-size: 24px;
            font-weight: 900;
            display: block;
          }
        }

        .info-per-price {
          font-weight: 800;
          color: #ff6645
        }
      }
    }

    .info-bottom {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .info-qty-buttons {
        display: inline-block;
        font-size: 18px;

        .cart-qty-text {
          padding: 2px 0px;
          display: inline-block;
          vertical-align: middle;
          min-width: 50px;
          text-align: center;
          border: 1px solid rgba(#888, 0.5);
        }

        .qty-btn {
          padding: 2px 5px;
          font-size: 18px;
          background-color: #888;
          border-radius: 0px;

          i {
            color: #fff
          }
        }

        .qty-btn:disabled {
          border: 1px solid rgba(#888, 0.5);
        }
      }

      .card-total-price {
        font-weight: 900;
        font-size: 1.2rem;
        color: #ff6645
      }
    }

    .clean-btn {
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(-25%) translateY(25%) scale(0.6);
      z-index: 1;

      .del-btn {
        border-radius: 99em;
        color: #dc3545;
        border: 1px solid #dc3545;

        &:hover {
          color: white;
          background-color: #dc3545;
        }
      }
    }
  }

  .Empty-cart {
    padding: 50px;
    text-align: center;
    h2 {
      font-size: 1.5rem;
      font-weight: 900;
    }

    span {
      font-size: 1.2rem;
      font-weight: 900;

      a {
        text-decoration: none;
      }
    }
  }
}</style>
