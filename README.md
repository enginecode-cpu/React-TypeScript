# React TypeScript

## 시작하기
```bash
npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript
```

<br>

## React 프로젝트 생성 후 typescript로 만들기
```bash
# 1
yarn create react-app my-app

# 2
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

<br>

설치가 끝났으면 아래와 같이 파일 확장자를 변경한다.

<br>

```
App.js => App.tsx
index.js => index.tsx
```

<br>

마지막으로 개발 서버를 실행한다. 개발 서버를 실행하면 `tsconfig.json` 파일이 만들어진다.
```
yarn start
```
