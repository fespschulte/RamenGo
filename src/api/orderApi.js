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
