const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle image generation
app.post('/generate-image', async (req, res) => {
    const { prompt } = req.body;

    try {
        // Call AI Image Generation API
        const aiResponse = await axios.post('https://api.openai.com/v1/dalle', {
            prompt: prompt,
            apiKey: 'YOUR_API_KEY'
        });

        // Respond with the generated image URL
        res.json({ imageUrl: aiResponse.data.data[0].url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Image generation failed' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
