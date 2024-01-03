import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  react: [
    {
      type: "category",
      label: "useState 알아보기",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["react/use-state/use-state"],
    },
    { type: "doc", label: "리엑트 관련 자료 모음", id: "react/rc-intro" },
  ],
  javascript: [
    {
      type: "category",
      label: "자료구조와 자료형",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["javascript/data-types/destructuring"],
    },
    { type: "doc", label: "자바스크립트 관련 자료 모음", id: "javascript/js-intro" },
  ],
  typescript: [
    {
      type: "category",
      label: "타입정의",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["typescript/types/generic-types"],
    },
    { type: "doc", label: "타입스크립트 관련 자료 모음", id: "typescript/type-intro" },
  ],
  docusaurus: [
    {
      type: "category",
      label: "코드 템플릿",
      description: "MDX에서 사용하는 코드를 제공합니다.",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["docusaurus/template/mdx-template", "docusaurus/template/sidebar-config", "docusaurus/template/mdx-markups"],
    },
    { type: "doc", label: "도큐사우루스 관련 자료 모음", id: "docusaurus/dc-intro" },
  ],
  vocabularies: [
    {
      type: "category",
      label: "코딩 용어집",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["vocabs/instance", "vocabs/params"],
    },
  ],
};

export default sidebars;
