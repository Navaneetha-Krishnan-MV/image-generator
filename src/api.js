// src/api.js
export async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,  // Replace with your actual Hugging Face API token
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return URL.createObjectURL(result);
}
