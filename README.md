# 🎓 AI 다국어 단어 암기장

Google Gemini AI를 활용한 스마트 다국어 학습 웹앱

## 📁 파일 구조

```
Vocabulary/
├── public/
│   └── index.html           ✅ 메인 웹앱 파일
├── netlify/
│   └── functions/
│       ├── gemini.js        ✅ Gemini API 서버리스 함수
│       └── openai.js        ✅ OpenAI API (미사용)
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
- Google Gemini API 키

### 실행 방법

1. **환경변수 설정**
   ```bash
   # .env 파일에 API 키 입력
   GEMINI_API_KEY=your-gemini-api-key
   ```

2. **패키지 설치**
   ```bash
   npm install
   ```

3. **서버 실행** (개발용)
   ```bash
   npx netlify dev
   ```
   → http://localhost:8888 접속

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

### 📚 다국어 지원
- ✅ **3개 언어 지원**: 영어, 한국어, 베트남어
- ✅ **6가지 번역 모드**: 영→한, 한→영, 영→베, 베→영, 한→베, 베→한
- ✅ **발음 표기**: 한글 발음, 국제 음성 기호 지원

### 🎯 학습 기능
- ✅ **AI 번역**: Gemini 2.5 Flash 모델 사용
- ✅ **플래시카드 학습**: 간격 반복 알고리즘 적용
- ✅ **객관식/주관식 테스트**: 다양한 문제 유형
- ✅ **학습 통계**: 최근 7일 학습 기록 그래프

### 📊 고급 기능
- ✅ **학습 그래프**: 일별 학습량 및 정답률 시각화
- ✅ **즐겨찾기**: 중요 단어 별도 관리
- ✅ **오답노트**: 틀린 단어 복습
- ✅ **랜덤 퀴즈**: 5문제 빠른 테스트
- ✅ **태그/폴더 시스템**: 단어 분류 및 필터링
- ✅ **검색 기능**: 전체 언어 통합 검색

### 💾 데이터 관리
- ✅ **자동 저장** (LocalStorage)
- ✅ **데이터 백업/복원** (JSON)
- ✅ **단어 복사 기능** 📋

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
