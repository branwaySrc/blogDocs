import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const rc = {
  useState: "react/use-state",
};

const dc = {
  temp: "docusaurus/template",
};

const js = {
  dataTypes: "javascript/data-types",
};

const sidebars: SidebarsConfig = {
  react: [
    { type: "doc", label: "리엑트 관련 자료 모음", id: "react/rc-intro" },
    {
      type: "category",
      label: "useState 알아보기",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [`${rc.useState}/use-state`],
    },
  ],
  javascript: [
    { type: "doc", label: "자바스크립트 관련 자료 모음", id: "javascript/js-intro" },
    {
      type: "category",
      label: "자료구조와 자료형",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [`${js.dataTypes}/destructuring`],
    },
  ],
  docusaurus: [
    { type: "doc", label: "도큐사우루스 관련 자료 모음", id: "docusaurus/dc-intro" },
    {
      type: "category",
      label: "코드 템플릿",
      description: "MDX에서 사용하는 코드를 제공합니다.",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [`${dc.temp}/mdx-template`, `${dc.temp}/sidebar-config`, `${dc.temp}/mdx-markups`],
    },
  ],
};

export default sidebars;
