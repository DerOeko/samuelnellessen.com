// Netlify Function for generating haiku with Claude API
// To use: Deploy to Netlify and access at /.netlify/functions/generate-haiku

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { content } = JSON.parse(event.body);
    
    // Your Claude API key should be set as an environment variable in Netlify
    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    
    if (!ANTHROPIC_API_KEY) {
      throw new Error('API key not configured');
    }

    const prompt = `Based on this person's profile information: ${JSON.stringify(content)}, write a creative haiku that captures their essence as an AI researcher and student. Make it thoughtful and relevant to their work in AI safety and mechanistic interpretability.`;

    // Call Claude API with streaming
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 100,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: false // For simplicity, not streaming in this example
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const haiku = data.content[0].text.trim();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Configure this for your domain in production
      },
      body: JSON.stringify({ haiku })
    };

  } catch (error) {
    console.error('Error generating haiku:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to generate haiku',
        haiku: 'Server error\nHaiku generation failed\nTry again later'
      })
    };
  }
};