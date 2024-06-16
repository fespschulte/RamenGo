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
