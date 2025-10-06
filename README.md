# 🎓 AI 단어 암기장

OpenAI GPT-4o를 활용한 스마트 영단어 학습 웹앱

## 📁 파일 구조

```
Vocabulary/
├── public/
│   └── index.html           ✅ 메인 웹앱 파일
├── netlify/
│   └── functions/
│       └── openai.js        ✅ API 서버리스 함수
├── netlify.toml             ✅ Netlify 배포 설정
├── .env                     ✅ API 키 설정 (비공개)
├── .env.example             ✅ API 키 예시
├── .gitignore               ✅ Git 제외 파일
├── package.json             ✅ npm 설정
├── NETLIFY_배포가이드.txt   📖 배포 가이드
└── _backup/                 📦 사용하지 않는 파일들
```

## 🚀 로컬 실행

### 필요 사항
- Node.js
- OpenAI API 키

### 실행 방법

1. **환경변수 설정**
   ```bash
   # .env 파일에 API 키 입력
   OPENAI_API_KEY=sk-proj-your-api-key
   ```

2. **패키지 설치**
   ```bash
   npm install
   ```

3. **서버 실행** (개발용)
   ```bash
   npm start
   ```
   → http://localhost:3000 접속

## 🌐 온라인 배포 (Netlify)

### 배포된 사이트
현재 Netlify에 배포되어 어디서든 접속 가능합니다.

### 재배포 방법
```bash
git add .
git commit -m "업데이트 내용"
git push
```
→ Netlify가 자동으로 1분 안에 재배포

## ✨ 주요 기능

- ✅ **양방향 번역** (영어↔한글)
- ✅ **AI 무제한 단어 추천**
- ✅ **플래시카드 학습**
- ✅ **객관식/주관식 테스트**
- ✅ **학습 통계 분석**
- ✅ **단어 복사 기능** 📋
- ✅ **자동 저장** (LocalStorage)
- ✅ **데이터 백업/복원**

## 📱 모든 기기에서 사용 가능

- PC, 스마트폰, 태블릿
- 인터넷만 있으면 OK
- 로그인 불필요

## 🔒 보안

- HTTPS 자동 적용
- API 키는 서버에 안전하게 보관
- 데이터는 각자 브라우저에 저장

## 📦 백업 폴더 (_backup/)

사용하지 않는 이전 파일들:
- `vocabulary_limited.html` - 구버전 파일
- `server.js` - Express 로컬 서버 (Netlify에서 불필요)
- `api/` - Vercel용 API (Netlify에서 불필요)
- `vercel.json` - Vercel 설정 (사용 안 함)
- 기타 문서 파일들

## 💡 도움말

문제 발생 시 `NETLIFY_배포가이드.txt` 참고
