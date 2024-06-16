export default function OrderConfirmation(order) {
    return `
    <img class="logo" src="./assets/logo-ramen-go-red.svg" alt="Logotipo da RamenGo" />
    <div class="order-confirmation">
      <div class="order-summary">
        <img src="${order.image}" alt="Ramen Bowl">
        <h2>Your Order:</h2>
        <h1>${order.description}</h1>
      </div>
      <div class="order-preparation">
        <img class="bowing-img" src="/assets/bowing.png" alt="Order Prepared">
        <h2>ご注文ありがとうございます。</h2>
        <h1>Your order is being prepared</h1>
        <p>Hold on, when you least expect you will be eating your rámen.</p>
        <button class="button-order-new">
          PLACE NEW ORDER
          <img src="./assets/arrow-button-yellow.svg" alt="" />
        </button>
      </div>
    </div>
  `
}
