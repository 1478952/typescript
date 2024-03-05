### 관찰(watch)모드 사용하기

tsc app.ts -w

소스가 변경될때마다 감지를해서 자동으로 컴파일된다.

### 전체 프로젝트 컴파일 / 다수의 파일

tsc --init

타입스크립트 프로젝트로 초기화 명령어

tsconfig.json 파일이 만들어지며 타입스크립트로 관리되게함.

그 후 tsc 만 입력하면 타입스크립트 파일들을 컴파일함

### 파일 포함 및 제외하기

tsconfig.json에서 작성

exclude에 포함된 파일은 컴파일되지 않는다.
include를 작성하면 컴파일 할 모든 파일을 작성해야함.

### 컴파일 대상 설정하기

### Typescript 핵심 라이브러리 이해하기

target : 어떤 js 버전으로 코드를 컴파일 할건지
lib : 객체 및 기능의 기본값을 지정할 수 있는 옵션 설정값이 없으면 기본값이 사용됨 브라우저에서 돔을 사용하기 위한 기본값

### 추가 구성 및 컴파일 옵션

allowJs : 컴파일에 js파일을 포함시킬건지 여부
checkJs : 컴파일하지는않고 구문검사 및 잠재적오류 보고
jsx : react에 도움이됨
declaration : 라이브러리 배포시 중요함

### 소스 맵 작업하기

sourceMap : 디버깅과 개발에 도움이된다. 컴파일된 js파일이 아닌 ts파일을 디버깅하고싶다면 true로 설정

### rootDir 및 outDir

outDir : ts컴파일러에게 생성된파일을 어디에 둘건지 설정
rootDir : 최상위레벨 설정

removeComments : 주석제거
noEmit : js 파일을 생성하지 않음 출력파일을 만들지않고 잠재적오류를 확인

### 컴파일 오류 시 파일 방출 중지하기

noEmitOnError : 오류가생기면 파일을 만들지 않음

### Strict 컴파일

strict : 아래의 모든 strict 타입 검사옵션이 활성화

noImplicitAny : 매개변수에 대해 타입 검사
strictNullChecks : 잠재적으로 null이 될 수 있는 값에 접근하는걸 방지
strictFuntionTypes : 함수에 대해 매개변수 및 반환값과 관련하여 함수가 어떻게생겼는지 정의
strictBindCallApply : bind, call, apply함수가 호출되면 설정한 내용이 타당한지 확인
alwaysStrict : 생성되는 js파일이 strict 모드를 사용하도록 제어

### 코드 품질 옵션

noFallthroughCasessInSwitch : for loop시 break키워드를 잊는경우에 관한것

noUnusedLocals, noUnusedParameters : 선언한 변수를 사용하지 않으면 경고를줌
noImplicitReturns : 함수가 무언가를 반환하는 경우가 있고 없는경우가 있다면 에러를 던짐

### vscode로 디버깅하기

extension

- prettier
- eslint
