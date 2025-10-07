// Netlify Serverless Function for Google Gemini
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // POST 요청만 허용
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'API 키가 설정되지 않았습니다. Netlify 환경변수에 GEMINI_API_KEY를 설정해주세요.'
        })
      };
    }

    const requestBody = JSON.parse(event.body);
    const userPrompt = requestBody.prompt;

    // Gemini API 호출
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: userPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 3000,
          responseMimeType: "application/json"
        }
      })
    });

    const responseText = await response.text();
    console.log('Gemini API Status:', response.status);
    console.log('Gemini API Response:', responseText.substring(0, 500));

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: 'Gemini API 오류',
          status: response.status,
          details: responseText.substring(0, 200)
        })
      };
    }

    const data = JSON.parse(responseText);

    // Gemini 응답 파싱
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const text = data.candidates[0].content.parts[0].text;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          text: text
        })
      };
    } else {
      console.error('Gemini 응답 형식 오류:', data);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Gemini API 응답 형식 오류',
          response: data
        })
      };
    }
  } catch (error) {
    console.error('API 오류 상세:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: '서버 오류가 발생했습니다.',
        details: error.message
      })
    };
  }
};
