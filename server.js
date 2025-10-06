require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// CORS 허용
app.use(cors());
app.use(express.json());

// 정적 파일 제공 (HTML 파일)
app.use(express.static(__dirname));

// 루트 경로 접속 시 자동으로 vocabulary_limited.html로 리다이렉트
app.get('/', (req, res) => {
  res.redirect('/vocabulary_limited.html');
});

// OpenAI API 프록시 엔드포인트
app.post('/api/openai', async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY?.trim();

    if (!apiKey) {
      return res.status(500).json({
        error: 'API 키가 설정되지 않았습니다. OPENAI_API_KEY 환경변수를 설정해주세요.'
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error('API 오류:', error);
    res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║  🎓 AI 단어 암기장 서버 실행 중         ║
║                                          ║
║  📍 주소: http://localhost:${PORT}        ║
║  🌐 브라우저에서 접속하세요              ║
║                                          ║
║  ⚙️  API 키 설정:                        ║
║  OPENAI_API_KEY 환경변수 필요            ║
╚══════════════════════════════════════════╝
  `);
});
