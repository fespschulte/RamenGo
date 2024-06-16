export default function Header() {
    return `
      <header>
        <img class="logo" src="./assets/logo-ramen-go-yellow.svg" alt="Logotipo da RamenGo" />
        <div class="hero">
          <div class="hero-content">
            <div class="hero-text">
              <div class="hero-title">
              <h2>ラーメン</h2>
              <h1>GO!</h1>
              </div>
              <p>Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!</p>
              <button class="scroll-button">
              ORDER NOW
              <img src="./assets/arrow-button-yellow.svg" alt="" />
              </button>
            </div>
            <div class="hero-image">
              <img class="ellipse-brown" src="./assets/ellipse-brown.png" alt="" />
              <img class="delivery-woman" src="./assets/delivery-woman.png" alt="" />
              <img class="balloon-blue" src="./assets/balloon-blue.png" alt="" />
              <img class="balloon-yellow" src="./assets/balloon-yellow.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    `
}
