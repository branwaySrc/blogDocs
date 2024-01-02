---
title: MDX 관련 템플릿 코드
tags:
  - MDX
  - 기본코드
---

### MDX 파일 이름 수정 및 태그 설정 템플릿

MDX 파일을 만든 후, 해당 헤더와 사이드바 이름을 변경하기 위해서는 아래 템플릿과 같이 (`title`) 을 변경해 준다.

:::note
(`id`)를 변경할 경우, (`sidebar.ts`)파일에 있는 (`id`) 또한 함께 변경을 해줘야 한다. (`id`)를 설정하지 않을 경우, 파일명이 (`id`)의 기본설정값이다. MDX 파일의 최상단에 (`#`)를 위치하면 (`title`)과 같은 값을 얻을 수 있지만, 구분점을 위해, 아래 템플릿을 사용하는것.
:::

```mdx title="template.md"
---
title: A doc with tags
tags:
  - Demo
  - Getting started
---

{...other components}
```

기본으로는 위 템플릿을 사용하여 진행한다. 하지만 추후 세부적인 내용을 할 경우, 아래와 같은 템플릿을 통해 해결가능하다.

```mdx title="docs/new.md" {7-8}
---
id: doc-with-tags
title: A doc with tags
tags:
  - Demo
  - Getting started
sidebar_label: "Hi!"
sidebar_position: 3
---

{...other components}
```

위 템플릿에서 사이드바 이름만 변경이 가능하다. 또한 (`position`)을 통해 해당 콘텐츠 MDX가 몇번째에 위치하는지 설정할 수 있다. 설정값이 없을 경우, **알파벳 순서대로 나열된다**. 단, (`sidebar.ts`)에서 (`items`) 배열에 기입했을 경우, position은 그 배열 순서를 따른다.
