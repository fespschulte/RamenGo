import './styles/style.css'

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
