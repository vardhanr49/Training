document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt-input').value;
    
    const response = await fetch('/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    const imageOutput = document.getElementById('image-output');
    imageOutput.innerHTML = `<img src="${data.imageUrl}" alt="Generated Image">`;
});
