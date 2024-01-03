---
title: 함수와 매개변수 그리고 인수
tag:
  - method
  - params
  - arguments
---

```jsx title="index.js"
function add(x, y) {
  return x + y;
}
// 함수는 어떠한 값을 구하기 위한 하나의 틀이다. 그 함수 값은 반환값(return)이다
```

위 함수에서 `const value = add(2,3)` 을 하게 되면, value는 add() 매서드를 통해 return된 값을 저장하여 참조 변수로 활용된다.
이 때, 함수 정의 부분에 나열된 x,y 변수들이 매개변수(parameter)이고, 함수를 호출하여 절달하는 실제 값들은 인수(argument)라고 한다.

:::tip
파라미터, parameter을 params 라고 하며, 인수, argument를 arg 라고 많이 사용된다.
:::

## 매개변수 (params)

함수 정의에서 사용되는 변수의 이름으로, 함수가 호출될 때 전달되는 값을 받는 역할을 한다.
이는 함수 특정 변수로 사용되며, 지역 변수라고도 한다. function add(지역1, 지역2)

## 인수 (arg)

인수는 함수를 호출할 때, 파라미터, 즉 지정된 지역함수에 알맞게 대입한 그 실제값을 의미한다.

- 위 예시에서 add(3,5)를 하게 되면, 각 지역변수에 인수 3과 5를 전달하고 있다.
- 그리고 return 값은 x + y로 각 지역변수에 기입한 인수가 대입되어 그 값을 반환한다.

```jsx title="greeting.js"
function greet(name, greeting) {
  // name과 greeting은 파라미터
  return greeting + " " + name + "!";
}

let message = greet("John", "Hello");
// 'John'과 'Hello'는 인수
console.log(message); // 출력: Hello John!

// name과 greeting은 파라미터로, 함수를 호출할 때 전달되는 'John'과 'Hello'은 인수로 사용됩니다.
```

쉽게 말해, 파라미터는 함수안에 있는 확정되지 않은 undefined 상태의 값을 의미하고, 인수는 실제 값이다. 파라미터라고 한다면 함수에 입력된 어떠한 변수 x를 지칭하는 의미이고, 인수는 x에 대입한 실제값으로 그 구분점을 가진다.