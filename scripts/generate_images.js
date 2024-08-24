import ideogram from '@api/ideogram';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prompts = [
  'A modern luxury house in San Diego, California',
  'A beautiful beach scene in Southern California',
  'A professional real estate agent helping clients',
  'San Diego skyline at sunset',
  'A cozy living room interior in a San Diego home'
];

async function generateImage(prompt) {
  try {
    const { data } = await ideogram.post_generate_image({
      image_request: {
        prompt: prompt,
        model: 'V_2',
        magic_prompt_option: 'AUTO'
      }
    });

    const imageUrl = data.image_url;
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
