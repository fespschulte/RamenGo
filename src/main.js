import BrothSelection from './components/BrothSelection'
import Header from './components/Header'
import MeatSelection from './components/MeatSelection'
import OrderButton from './components/OrderButton'
import OrderConfirmation from './components/OrderConfirmation'
import { createOrder } from './api/orderApi'

let selectedBroth = null
let selectedProtein = null

function resetSelections() {
    selectedBroth = null
    selectedProtein = null
}

function handleOrderButtonClick() {
    if (selectedBroth && selectedProtein) {
        createOrder(selectedBroth, selectedProtein)
            .then((order) => {
                console.log('Order created successfully:', order)
                renderOrderConfirmationPage(order)
            })
            .catch((error) => {
                alert('Failed to create order. Please try again.')
                console.error('Create Order Error:', error)
            })
    } else {
        alert('Please select both a broth and a protein.')
    }
}

function renderOrderConfirmationPage(order) {
    try {
        document.querySelector('#app').innerHTML = `
      ${OrderConfirmation(order)}
    `
        console.log('Order confirmation page rendered successfully.')

        document.querySelector('.button-order-new').addEventListener('click', () => {
            resetSelections()
            renderHomePage()
        })
    } catch (error) {
        console.error('Render Order Confirmation Page Error:', error)
    }
}

async function renderHomePage() {
    try {
        document.querySelector('#app').innerHTML = `
      ${Header()}
      <main>
        <div class="ingredient-selection">
          ${await BrothSelection()}
          ${await MeatSelection()}
        </div>
        ${OrderButton()}
      </main>
    `
        document.querySelector('.scroll-button').addEventListener('click', () => {
            document.querySelector('main').scrollIntoView({
                behavior: 'smooth',
            })
        })
        document.querySelector('.button-order').addEventListener('mouseover', function () {
            const img = this.querySelector('.button-arrow')
            img.src = './assets/arrow-button-yellow.svg'
        })

        document.querySelector('.button-order').addEventListener('mouseout', function () {
            const img = this.querySelector('.button-arrow')
            img.src = './assets/arrow-button-white.svg'
        })
        document.querySelectorAll('.broth-option').forEach((option) => {
            option.addEventListener('click', (event) => {
                const isSelected = event.currentTarget.classList.contains('selected')
                document.querySelectorAll('.broth-option').forEach((opt) => {
                    opt.querySelector('img').src = opt.getAttribute('data-image-inactive')
                    opt.classList.remove('selected')
                })

                if (!isSelected) {
                    selectedBroth = event.currentTarget.getAttribute('data-id')
                    const activeImage = event.currentTarget.getAttribute('data-image-active')
                    event.currentTarget.querySelector('img').src = activeImage
                    event.currentTarget.classList.add('selected')
                } else {
                    selectedBroth = null
                }
            })
        })

        document.querySelectorAll('.meat-option').forEach((option) => {
            option.addEventListener('click', (event) => {
                const isSelected = event.currentTarget.classList.contains('selected')
                document.querySelectorAll('.meat-option').forEach((opt) => {
                    opt.querySelector('img').src = opt.getAttribute('data-image-inactive')
                    opt.classList.remove('selected')
                })

                if (!isSelected) {
                    selectedProtein = event.currentTarget.getAttribute('data-id')
                    const activeImage = event.currentTarget.getAttribute('data-image-active')
                    event.currentTarget.querySelector('img').src = activeImage
                    event.currentTarget.classList.add('selected')
                } else {
                    selectedProtein = null
                }
            })
        })

        document.querySelector('.button-order').addEventListener('click', handleOrderButtonClick)
    } catch (error) {
        console.error('Render Home Page Error:', error)
    }
}

renderHomePage()
