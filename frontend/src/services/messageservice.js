export const sendMessage = async (formData) => {
  try {
    const res = await fetch('http://localhost:5000/api/v1/messages', {
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