import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '产品介绍',
      className: 'sidebar-icon-intro',
    },
    {
      type: 'category',
      label: '基础',
      className: 'sidebar-icon-foundation',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/quickstart',
          label: '快速开始',
          className: 'sidebar-icon-quickstart',
        },
        {
          type: 'doc',
          id: 'getting-started/how-to-chat',
          label: '如何聊天',
          className: 'sidebar-icon-chat-item',
        },
        {
          type: 'doc',
          id: 'getting-started/api-quickstart',
          label: 'API 快速开始',
          className: 'sidebar-icon-api-quickstart',
        },
        {
          type: 'doc',
          id: 'getting-started/overview',
          label: '文档总览',
          className: 'sidebar-icon-overview',
        },
        {
          type: 'doc',
          id: 'getting-started/core-concepts',
          label: '核心概念',
          className: 'sidebar-icon-concepts',
        },
        {
          type: 'doc',
          id: 'getting-started/one-million-tokens',
          label: '1M Token 是多少',
          className: 'sidebar-icon-token',
        },
      ],
    },
    {
      type: 'category',
      label: '中转站基本介绍',
      className: 'sidebar-icon-gateway',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/playground',
          label: 'AI 工作台',
          className: 'sidebar-icon-playground',
        },
        {
          type: 'doc',
          id: 'api-reference/authentication',
          label: '鉴权方式',
          className: 'sidebar-icon-auth',
        },
        {
          type: 'doc',
          id: 'api-reference/openai-compatibility',
          label: 'OpenAI 兼容说明',
          className: 'sidebar-icon-compat',
        },
        {
          type: 'doc',
          id: 'api-reference/overview',
          label: 'API 概览',
          className: 'sidebar-icon-api-overview',
        },
        {
          type: 'doc',
          id: 'platform/token-management',
          label: '令牌管理',
          className: 'sidebar-icon-token',
        },
        {
          type: 'doc',
          id: 'platform/quotas-and-billing',
          label: '额度与计费',
          className: 'sidebar-icon-billing',
        },
        {
          type: 'doc',
          id: 'platform/errors-and-retries',
          label: '错误与重试',
          className: 'sidebar-icon-errors',
        },
      ],
    },
    {
      type: 'category',
      label: '开发工具',
      className: 'sidebar-icon-tools',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'integrations/claude-code',
          label: 'Claude Code',
          className: 'sidebar-icon-claude',
        },
        {
          type: 'doc',
          id: 'integrations/cursor',
          label: 'Cursor',
          className: 'sidebar-icon-cursor',
        },
        {
          type: 'doc',
          id: 'integrations/openai-codex',
          label: 'OpenAI Codex',
          className: 'sidebar-icon-codex',
        },
        {
          type: 'doc',
          id: 'integrations/opencode',
          label: 'OpenCode',
          className: 'sidebar-icon-opencode',
        },
        {
          type: 'doc',
          id: 'integrations/cherry-studio',
          label: 'Cherry Studio',
          className: 'sidebar-icon-cherry',
        },
        {
          type: 'doc',
          id: 'integrations/lobe-chat',
          label: 'Lobe Chat',
          className: 'sidebar-icon-lobe',
        },
        {
          type: 'doc',
          id: 'integrations/open-webui',
          label: 'Open WebUI',
          className: 'sidebar-icon-webui',
        },
        {
          type: 'doc',
          id: 'integrations/nextchat',
          label: 'NextChat',
          className: 'sidebar-icon-nextchat',
        },
      ],
    },
    {
      type: 'category',
      label: '图片',
      className: 'sidebar-icon-image',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'models/image-generation',
          label: '文生图',
          className: 'sidebar-icon-image-gen',
        },
        {
          type: 'doc',
          id: 'models/image-editing',
          label: '编辑图片',
          className: 'sidebar-icon-image-edit',
        },
      ],
    },
    {
      type: 'category',
      label: '聊天',
      className: 'sidebar-icon-chat',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'models/chat',
          label: '聊天',
          className: 'sidebar-icon-chat-item',
        },
        {
          type: 'doc',
          id: 'models/completions',
          label: 'Completions',
          className: 'sidebar-icon-completions',
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      className: 'sidebar-icon-faq',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'faq/general',
          label: '通用问题',
          className: 'sidebar-icon-faq-general',
        },
        {
          type: 'doc',
          id: 'faq/billing-and-quotas',
          label: '计费与额度 FAQ',
          className: 'sidebar-icon-faq-billing',
        },
        {
          type: 'doc',
          id: 'faq/http-status-codes',
          label: 'HTTP 状态码总览',
          className: 'sidebar-icon-faq-http',
        },
        {
          type: 'doc',
          id: 'faq/errors-and-debugging',
          label: '报错与排查 FAQ',
          className: 'sidebar-icon-faq-errors',
        },
        {
          type: 'doc',
          id: 'faq/security-and-privacy',
          label: '安全与隐私 FAQ',
          className: 'sidebar-icon-faq-security',
        },
      ],
    },
  ],
};

export default sidebars;
