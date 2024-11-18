# 클라이언트 서버 실행 가이드

## 1. **client** 폴더로 이동하여 패키지를 설치한다.
```bash
# 클라이언트 폴더 이동
cd client
# 필요 패키지 설치
npm i
```

## 2. client/.env파일을 확인한다.
```dotenv
# 소켓 서버 도메인 정의
REACT_APP_SOCKET_SERVER_DOMAIN=localhost:10100
```
<p style="color: red">중요!</p>웹 서버에 명령을 보낼 수 있는 웹소켓 도메인을 ***.env*** 파일에서 정의 할 것

## 3. 서버 테스트 실행
```bash
# 개발 모드 서버 실행
# client 폴더에서
npm start
```
npm start를 통해 서버가 잘 작동하는지 테스트한다. 문제가 없다면 정상적으로 작동할 것.

## 4. 빌드 및 배포
이 과정은 사실 현재 프로젝트를 생각했을 때 3번까지만 하여도 충분하기때문에 불필요하지만, 원한다면 다음과 같이 실행하여 배포버전으로 사용가능하다.
```bash
# client 폴더에서
npm run build
serve build
```

