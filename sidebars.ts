import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '产品介绍',
    },
    {
      type: 'category',
      label: '基础',
      items: [
        'getting-started/quickstart',
        'getting-started/api-quickstart',
        'getting-started/overview',
        'getting-started/core-concepts',
      ],
    },
    {
      type: 'category',
      label: '中转站基本介绍',
      items: [
        'getting-started/playground',
        'platform/group-table',
        'platform/group-price-differences',
        'platform/create-token-by-group',
        'api-reference/authentication',
        'api-reference/openai-compatibility',
        'api-reference/overview',
        'platform/token-management',
        'platform/quotas-and-billing',
        'platform/errors-and-retries',
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
        'faq/http-status-codes',
        'faq/errors-and-debugging',
        'faq/security-and-privacy',
      ],
    },
  ],
};

export default sidebars;
