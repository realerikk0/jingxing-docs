import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '总览',
    },
    {
      type: 'category',
      label: '开始使用',
      items: [
        'getting-started/overview',
        'getting-started/quickstart',
        'getting-started/api-quickstart',
        'getting-started/playground',
        'getting-started/core-concepts',
      ],
    },
    {
      type: 'category',
      label: '平台使用',
      items: [
        'platform/model-groups',
        'platform/pricing',
        'platform/token-management',
        'platform/quotas-and-billing',
        'platform/errors-and-retries',
        'platform/security-and-compliance',
      ],
    },
    {
      type: 'category',
      label: '模型能力',
      items: [
        'models/chat',
        'models/embeddings',
        'models/images',
        'models/video',
        'models/audio-and-realtime',
      ],
    },
    {
      type: 'category',
      label: 'API 参考',
      items: [
        'api-reference/overview',
        'api-reference/authentication',
        'api-reference/openai-compatibility',
      ],
    },
    {
      type: 'category',
      label: '开发工具',
      items: [
        'integrations/claude-code',
        'integrations/cursor',
        'integrations/openai-codex',
        'integrations/cherry-studio',
        'integrations/lobe-chat',
        'integrations/open-webui',
        'integrations/nextchat',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'faq/general',
        'faq/billing-and-quotas',
        'faq/errors-and-debugging',
        'faq/security-and-privacy',
      ],
    },
  ],
};

export default sidebars;
