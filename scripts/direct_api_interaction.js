import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'BbcDM0_xv5QJ_KEYrcWvo8gQHZde62ItxH7T51p-X1efdoqkVE74w2tsNLkM2jDnu7b-m82agjAd6DpebQ_N5w';
const API_URL = 'https://api.ideogram.ai/generate';

const prompts = [
  'A modern luxury house in San Diego, California',
  'A beautiful beach scene in Southern California',
  'A professional real estate agent helping clients',
  'San Diego skyline at sunset',
  'A cozy living room interior in a San Diego home'
];

async function generateImage(prompt) {
  try {
    console.log('Generating image for prompt:', prompt);
    const response = await axios.post(API_URL, {
      image_request: {
        prompt: prompt,
        model: 'V_2',
        resolution: 'RESOLUTION_1024_1024'
      }
    }, {
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json'
      }
    });

    console.log('API Response Status:', response.status);
    console.log('API Response Headers:', JSON.stringify(response.headers, null, 2));

    if (!response.data) {
      throw new Error('No data returned from the API');
    }

    console.log('API Response Data:', JSON.stringify(response.data, null, 2));

    if (!response.data.data || !Array.isArray(response.data.data) || response.data.data.length === 0) {
      throw new Error('No image data returned in the API response');
    }

    const imageUrl = response.data.data[0].url;
    if (!imageUrl) {
      throw new Error('No image URL found in the API response');
    }

    console.log('Image URL:', imageUrl);

    const imageName = `${prompt.replace(/\s+/g, '_').toLowerCase()}.jpg`;
    const imagePath = path.join(__dirname, '..', 'public', 'images', imageName);

    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      timeout: 30000, // 30 seconds timeout
      maxContentLength: 20 * 1024 * 1024 // 20MB max size
    });

    fs.writeFileSync(imagePath, imageResponse.data);
    console.log(`Image saved: ${imagePath}`);

  } catch (error) {
    console.error(`Error processing prompt "${prompt}":`, error.message);
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', JSON.stringify(error.response.headers, null, 2));
      console.error('Error response data:', JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error details:', error);
    }
  }
}

async function generateAllImages() {
  for (const prompt of prompts) {
    await generateImage(prompt);
  }
}

generateAllImages();
