FROM node:20-slim

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 파일만 복사
COPY package*.json .

# 의존성 설치
RUN ["npm", "ci"]

ENV NODE_ENV=production

# 나머지 소스 코드 복사
COPY . .

# 빌드 실행
RUN ["npm", "run", "build"]

# 정적 파일 서빙을 위한 serve 설치
RUN ["npm", "install", "-g", "serve"]

# 컨테이너의 3000번 포트 노출
EXPOSE 3000

# 서버 실행전 유저 권한 낮춤
USER node

# 애플리케이션 시작
CMD ["serve", "-s", "build", "-l", "3000"]
