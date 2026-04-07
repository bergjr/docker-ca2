export const sendMessage = async (formData) => {
  
const API_URL = 'http://20.251.162.242:8081/api/v1';
  try {
    const res = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    return await res.json()
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}