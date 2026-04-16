import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '✨ 产品介绍',
    },
    {
      type: 'category',
      label: '🚀 基础',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'getting-started/quickstart', label: '⚡ 快速开始'},
        {type: 'doc', id: 'getting-started/api-quickstart', label: '🔌 API 快速开始'},
        {type: 'doc', id: 'getting-started/overview', label: '🗺️ 文档总览'},
        {type: 'doc', id: 'getting-started/core-concepts', label: '🧭 核心概念'},
      ],
    },
    {
      type: 'category',
      label: '🏛️ 中转站基本介绍',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'getting-started/playground', label: '🖥️ AI 工作台'},
        {type: 'doc', id: 'platform/group-table', label: '🗂️ 分组详细表格'},
        {
          type: 'doc',
          id: 'platform/group-price-differences',
          label: '💱 分组的特殊性及价格差异',
        },
        {
          type: 'doc',
          id: 'platform/create-token-by-group',
          label: '🔑 如何新建指定分组的令牌',
        },
        {type: 'doc', id: 'api-reference/authentication', label: '🛡️ 鉴权方式'},
        {
          type: 'doc',
          id: 'api-reference/openai-compatibility',
          label: '🔄 OpenAI 兼容说明',
        },
        {type: 'doc', id: 'api-reference/overview', label: '📡 API 概览'},
        {type: 'doc', id: 'platform/token-management', label: '🎫 令牌管理'},
        {type: 'doc', id: 'platform/quotas-and-billing', label: '💳 额度与计费'},
        {type: 'doc', id: 'platform/errors-and-retries', label: '🚨 错误与重试'},
      ],
    },
    {
      type: 'category',
      label: '🧰 开发工具',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'integrations/claude-code', label: '🤖 Claude Code'},
        {type: 'doc', id: 'integrations/cursor', label: '⌨️ Cursor'},
        {type: 'doc', id: 'integrations/openai-codex', label: '🧑‍💻 OpenAI Codex'},
        {type: 'doc', id: 'integrations/cherry-studio', label: '🍒 Cherry Studio'},
        {type: 'doc', id: 'integrations/lobe-chat', label: '💬 Lobe Chat'},
        {type: 'doc', id: 'integrations/open-webui', label: '🌐 Open WebUI'},
        {type: 'doc', id: 'integrations/nextchat', label: '🪟 NextChat'},
      ],
    },
    {
      type: 'category',
      label: '🖼️ 图片',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'models/image-generation', label: '✨ 文生图'},
        {type: 'doc', id: 'models/image-editing', label: '🪄 编辑图片'},
      ],
    },
    {
      type: 'category',
      label: '🎬 视频',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'models/video-generation', label: '🎥 OpenAI 兼容视频生成'},
        {type: 'doc', id: 'models/video-task-status', label: '📍 视频任务状态查询'},
        {type: 'doc', id: 'models/kling-text-to-video', label: '🌠 Kling 文生视频'},
        {type: 'doc', id: 'models/kling-image-to-video', label: '🖼️ Kling 图生视频'},
      ],
    },
    {
      type: 'category',
      label: '💬 聊天与向量',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'models/chat', label: '💭 聊天'},
        {type: 'doc', id: 'models/completions', label: '🧾 Completions'},
        {type: 'doc', id: 'models/embeddings', label: '🧬 Embeddings'},
      ],
    },
    {
      type: 'category',
      label: '🎧 音频与实时',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'models/audio-and-realtime', label: '🔊 音频与 Realtime'},
      ],
    },
    {
      type: 'category',
      label: '❓ FAQs',
      collapsible: true,
      collapsed: false,
      items: [
        {type: 'doc', id: 'faq/general', label: '📘 通用问题'},
        {type: 'doc', id: 'faq/billing-and-quotas', label: '💳 计费与额度 FAQ'},
        {type: 'doc', id: 'faq/http-status-codes', label: '🚦 HTTP 状态码总览'},
        {type: 'doc', id: 'faq/errors-and-debugging', label: '🛠️ 报错与排查 FAQ'},
        {type: 'doc', id: 'faq/security-and-privacy', label: '🔒 安全与隐私 FAQ'},
      ],
    },
  ],
};

export default sidebars;
