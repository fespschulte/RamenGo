const API_BASE_URL = 'https://api.tech.redventures.com.br'
const API_KEY = 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'

export async function createOrder(brothId, proteinId) {
    try {
        const requestBody = JSON.stringify({
            brothId,
            proteinId,
        })

        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: requestBody,
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Create Order Error:', error)
        throw error
    }
}

export async function listProteins() {
    const response = await fetch(`${API_BASE_URL}/proteins`, {
        method: 'GET',
        headers: { 'x-api-key': API_KEY },
    })
    if (!response.ok) {
        throw new Error('Error fetching Proteins List')
    }
    const proteins = await response.json()
    return proteins
}

export async function listBroths() {
    const response = await fetch(`${API_BASE_URL}/broths`, {
        method: 'GET',
        headers: { 'x-api-key': API_KEY },
    })
    if (!response.ok) {
        throw new Error('Error fetching Broths List')
    }
    const broths = await response.json()
    return broths
}
