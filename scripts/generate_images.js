const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.Vercel_Key;
const apiUrl = 'https://api.ideogram.ai/generate';

const prompts = [
  'A modern luxury house in San Diego, California',
  'A beautiful beach scene in Southern California',
  'A professional real estate agent helping clients',
  'San Diego skyline at sunset',
  'A cozy living room interior in a San Diego home'
];

async function generateImage(prompt) {
  try {
    const response = await axios.post(apiUrl, {
      image_request: {
        prompt: prompt,
        style: 'photographic',
        width: 1024,
        height: 1024
      }
    }, {
      headers: {
        'Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    const imageUrl = response.data.image_url;
    const imageName = `${prompt.replace(/\s+/g, '_').toLowerCase()}.jpg`;
    const imagePath = path.join(__dirname, '..', 'public', 'images', imageName);

    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(imagePath, imageResponse.data);

    console.log(`Image saved: ${imagePath}`);
  } catch (error) {
    console.error(`Error generating image for prompt "${prompt}":`, error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
  }
}

async function generateAllImages() {
  for (const prompt of prompts) {
    await generateImage(prompt);
  }
}

generateAllImages();
