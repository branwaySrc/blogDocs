---
title: MDX 마크업
tags:
  - MDX
  - 기본코드
sidebar_position: 1
---

### MDX 마크업을 통한 문서 꾸미기 기능

#### 코드공유하는 마크업 템플릿

````js title="code-shares" {7-8}
```{file.format} title="타이틀" {7-8}
{...codes} // mdx, js, tsx, ts, etc...
```;
````

- [파일포맷](#)

파일 / 타이틀 / 하이라이트 순으로 설정할 수 있다. 아래 (`file.format`)에 원하는 파일 포맷을 설정하면, 그에 알맞는 색과 코드인식을 통해 잘 정리된다.

- [타이틀 설정](#)

(`title`)을 설정하면, 좌측 명칭이 변경된다.

- [하이라이트 하기](#)

(`{7-8}`)로 설정된 값은 7~8번째에 위치한 줄이 하이라이트가 쳐진다.

### MDX 글씨 마크업

```
## Level 2 title

### Level 3 title

#### Level 4 title

You can write [links](#) relative to the content root (`/docs/`).

You can also write [links](#) relative to the site directory, but it's not recommended.

Hello world message with some **bold** text, some _italic_ text, and a [link](#)

![img alt](/img/docusaurus.png)

```

- (`#`)이 최상단에 있을 경우, MDX [title](#)과 같다. 또한 우측 부모 바로가기로 설정된다.
- (`##`)이 가장 윗줄에 해당 할 경우 해당 파일의 [desc](#)으로 자동 설정된다. 또한 우즉 바로가기로 설정된다.
- (`###`)은 바로가기의 자녀로 설정된다.
- (`####`)은 (`bold`)값과 동일한 결과를 얻을 수 있다.
- (`link`)는 (`[글자](/link)`)로 설정 할 수 있다.
- (`image`)는 (`![img](/file.path)`)로 설정 할 수 있는데, 기본은 [root/static](#)으로 설정되어 있다.

위 글씨 마크업의 결과값은 아래와 같다.

## Level 2 title

### Level 3 title

#### Level 4 title

You can write [links](#) relative to the content root (`/docs/`).

You can also write [links](#) relative to the site directory, but it's not recommended.

Hello world message with some **bold** text, some _italic_ text, and a [link](#)

![img alt](/img/docusaurus.png)

## MDX에서 QUOTE 만들기
다양한 경우에 따라, 원하는 느낌의 QUOTE를 만들 수 있다.

```mdx title="note.mdx"
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```mdx title="tip.mdx"
:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```mdx title="info.mdx"
:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

---

```mdx title="warning.mdx"
:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

````
```mdx title="danger.mdx"
:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
````

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::




