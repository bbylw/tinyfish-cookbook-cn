/**
 * 结构化食谱数据 —— 驱动 RecipeCatalog 组件渲染。
 * 来源：README.md 中的食谱目录。
 */

export type Billing = 'free' | 'paid';

export interface ApiEndpoint {
  name: string;
  host: string;
  desc: string;
  use: string;
  speed: string;
  billing: Billing;
  features: string[];
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Integration {
  icon: string;
  title: string;
  desc: string;
  code: string;
  href?: string;
}

export interface Recipe {
  slug: string;
  desc: string;
  demo?: string;
}

export interface RecipeGroup {
  id: string;
  label: string;
  icon: string;
  blurb?: string;
  recipes: Recipe[];
}

export const apis: ApiEndpoint[] = [
  {
    name: 'Search',
    host: 'api.search.tinyfish.ai',
    desc: '为 Agent 设计的快速结构化网页搜索 —— JSON 结果，多次调用排名稳定。面向 LLM 消费设计，而非传统蓝链浏览。',
    use: '任何 Agent 的检索层。',
    speed: '< 0.5s',
    billing: 'free',
    features: ['结构化 JSON', '排名稳定', '面向 LLM'],
  },
  {
    name: 'Fetch',
    host: 'api.fetch.tinyfish.ai',
    desc: '任意 URL → 干净的 Markdown / JSON / HTML。真实全浏览器渲染，失败的 URL 不收费。可替代 Firecrawl、原生 LLM 抓取或自研 Playwright。',
    use: '读取指定页面并向 LLM 提供干净内容。',
    speed: '数秒',
    billing: 'free',
    features: ['全浏览器渲染', '失败不收费', '剥离噪音'],
  },
  {
    name: 'Agent',
    host: '',
    desc: '提供一个 URL 和自然语言目标。Agent 自动导航、操作并返回干净 JSON。',
    use: '多步骤流程、复杂任务、结构化数据提取。',
    speed: '约 10s 至数分钟',
    billing: 'paid',
    features: ['自然语言目标', '自主导航', '结构化输出'],
  },
  {
    name: 'Browser',
    host: '',
    desc: '租用一台完全托管的云浏览器。连接你自己的 Playwright 或 Selenium 脚本。',
    use: '深度自定义 Agent 和脚本。',
    speed: '实时',
    billing: 'paid',
    features: ['完全托管', '自带脚本', '实时'],
  },
];

export const features: Feature[] = [
  { icon: 'globe', title: '任意网站 → API', desc: '将没有 API 的网站变为可编程数据源，无需逆向工程。' },
  { icon: 'chat', title: '自然语言目标', desc: '发送一个 URL + plain English，获得结构化 JSON 返回。' },
  { icon: 'browser', title: '真实浏览器自动化', desc: '多步骤流程、表单、筛选、日历、动态内容全部覆盖。' },
  { icon: 'shield', title: '内置隐身能力', desc: '内置轮换代理和隐身配置，无需额外费用。' },
  { icon: 'lock', title: 'Vault 凭据记忆', desc: '面向 Agent 的凭据和会话记忆，支持认证工作流（1Password JIT、加密会话复用）。' },
  { icon: 'chart', title: '生产级可观测性', desc: '每次运行都有完整日志和调试信息，问题无处可藏。' },
  { icon: 'coin', title: 'Token 高效设计', desc: 'Fetch 会剥离导航栏、脚本和 Cookie 横幅，不再为垃圾 HTML 支付 Token 费用。' },
  { icon: 'key', title: '统一密钥', desc: '同一个密钥、同一个控制台、同一组支撑生产负载的接口。' },
  { icon: 'gift', title: '无需信用卡', desc: '注册即用，Search 和 Fetch 免费开放，配有慷慨的速率限制。' },
];

export const integrations: Integration[] = [
  {
    icon: 'plug',
    title: 'REST API',
    desc: '直接通过 HTTP 调用 Search、Fetch、Agent 接口。',
    code: 'curl https://api.search.tinyfish.ai',
    href: 'https://docs.tinyfish.ai/',
  },
  {
    icon: 'puzzle',
    title: 'MCP Server',
    desc: '填入 Claude Code、Cursor、Codex、ChatGPT 桌面版或任何 MCP 客户端。',
    code: '{ "mcpServers": { "tinyfish": { "url": "https://mcp.tinyfish.ai" } } }',
  },
  {
    icon: 'keyboard',
    title: 'CLI',
    desc: '结果写入文件系统而非上下文窗口 —— Token 更低，输出更结构化。',
    code: 'npm install -g @tiny-fish/cli',
  },
  {
    icon: 'bolt',
    title: 'Agent Skill',
    desc: '一行命令安装。教你的 Agent 何时及如何使用 Search / Fetch / Agent。',
    code: 'npx skills add github.com/tinyfish-io/tinyfish-cookbook --skill use-tinyfish',
    href: 'https://skills.sh/tinyfish-io/tinyfish-cookbook/use-tinyfish',
  },
  {
    icon: 'snake',
    title: 'Python SDK',
    desc: '覆盖 Search、Fetch、Browser、Agent 和 Vault，功能完全对等。',
    code: 'pip install tinyfish',
  },
  {
    icon: 'book',
    title: 'TypeScript SDK',
    desc: '与 Python SDK 功能对等的 TypeScript 客户端。',
    code: 'npm install @tiny-fish/sdk',
  },
];

export const featured: Recipe[] = [
  { slug: 'viet-bike-scout', desc: '通过并行浏览器 Agent 对比越南各城市的摩托车租赁价格', demo: 'https://cookbook-viet-bike-scout.vercel.app/' },
  { slug: 'tutor-finder', desc: '面向多个平台的竞争性考试 AI 导师发现工具', demo: 'https://cookbook-tutor-finder.vercel.app/' },
  { slug: 'openbox-deals', desc: '跨 8 家零售商的实时开箱和翻新优惠聚合器', demo: 'https://cookbook-openbox-deals.vercel.app/' },
  { slug: 'silicon-signal', desc: '半导体供应链追踪器，覆盖生命周期、可得性和交期信号', demo: 'https://cookbook-silicon-signal.vercel.app/' },
  { slug: 'summer-school-finder', desc: '发现和对比全球大学的暑期学校项目', demo: 'https://cookbook-summer-school-finder.vercel.app/' },
  { slug: 'tinyskills', desc: '多来源 AI 技能指南生成器，将文档、GitHub 和博客抓取整合为单一 SKILL.md', demo: 'https://cookbook-tinyskills.vercel.app/' },
  { slug: 'saigon-happy-hour-sniper', desc: '数秒内找到西贡的欢乐时光优惠', demo: 'https://saigon-happy-hour-sniper.vercel.app/' },
  { slug: 'worldcup-briefing', desc: 'AI 驱动的足球精彩集锦 —— 用 TinyFish Search 发现比赛视频，用 VideoDB 剪辑成片', demo: 'https://worldcup-briefing.vercel.app' },
];

export const recipeGroups: RecipeGroup[] = [
  {
    id: 'shopping',
    label: '购物与优惠',
    icon: 'cart',
    recipes: [
      { slug: 'bestbet', desc: '跨博彩平台体育投注赔率对比' },
      { slug: 'game-buying-guide', desc: '跨 10 个游戏平台的视频游戏价格对比' },
      { slug: 'lego-hunter', desc: '跨 15+ 零售商的稀有乐高库存，包含价格和可得性分析' },
      { slug: 'openbox-deals', desc: '实时开箱和翻新优惠聚合器' },
      { slug: 'waifu-deal-sniper', desc: '面向手办收藏者的 Discord 机器人，监控 AmiAmi、Mercari、Solaris Japan' },
      { slug: 'wing-command', desc: '鸡翅追踪器 —— 按口味偏好找到附近最好的鸡翅' },
    ],
  },
  {
    id: 'travel',
    label: '旅行、住宿与本地生活',
    icon: 'plane',
    recipes: [
      { slug: 'stay-scout-hub', desc: '面向会展和活动的跨站住宿搜索' },
      { slug: 'viet-bike-scout', desc: '越南各城市摩托车租赁价格对比' },
      { slug: 'district-rent-shark', desc: '越南租房市场情报 + 社区步行友好度评分' },
      { slug: 'restaurant-comparison-tool', desc: '基于 Google Maps 的餐厅事前安全与过敏原情报' },
      { slug: 'saigon-happy-hour-sniper', desc: '西贡欢乐时光优惠实时聚合器' },
    ],
  },
  {
    id: 'research',
    label: '研究与市场情报',
    icon: 'chart',
    recipes: [
      { slug: 'research-sentry', desc: '语音优先的学术研究助手，扫描 ArXiv、PubMed 等' },
      { slug: 'silicon-signal', desc: '半导体供应链与交期信号' },
      { slug: 'competitor-analysis', desc: '实时竞争定价情报仪表盘' },
      { slug: 'competitor-scout-cli', desc: '用自然语言研究竞品功能决策的 CLI' },
      { slug: 'logistics-sentry', desc: '港口拥堵与承运商风险追踪' },
      { slug: 'tenders-finder', desc: '跨多个门户的新加坡政府招标发现工具' },
    ],
  },
  {
    id: 'education',
    label: '教育与探索',
    icon: 'cap',
    recipes: [
      { slug: 'tutor-finder', desc: '面向竞争性考试的 AI 导师发现工具' },
      { slug: 'summer-school-finder', desc: '对比全球大学的暑期学校项目' },
      { slug: 'scholarship-finder', desc: '从官方来源抓取实时数据的奖学金发现工具' },
    ],
  },
  {
    id: 'devtools',
    label: '开发者工具',
    icon: 'tools',
    recipes: [
      { slug: 'code-reference-finder', desc: '从 GitHub 和 Stack Overflow 查找任意代码片段的真实使用示例' },
      { slug: 'fast-qa', desc: '无代码 QA 测试平台，支持并行测试执行和实时浏览器预览' },
      { slug: 'tinyskills', desc: '从文档、GitHub 和开发者博客生成综合 SKILL.md 指南' },
    ],
  },
  {
    id: 'finance',
    label: '金融与决策',
    icon: 'coins',
    recipes: [
      { slug: 'loan-decision-copilot', desc: '跨银行和地区的贷款对比工具' },
    ],
  },
  {
    id: 'lifestyle',
    label: '生活方式与健康',
    icon: 'leaf',
    recipes: [
      { slug: 'anime-watch-hub', desc: '找到阅读或观看你喜欢的漫画和动画的网站' },
      { slug: 'pharmacy-panic', desc: '实时对比越南主要连锁药店药品价格' },
    ],
  },
  {
    id: 'n8n',
    label: 'n8n 工作流',
    icon: 'sync',
    blurb: '预构建的 n8n 工作流，使用 TinyFish —— 导入 JSON 即可使用。',
    recipes: [
      { slug: 'Competitor Scout CLI', desc: '用 OpenAI 规划 + TinyFish 证据收集，研究竞品功能决策' },
      { slug: 'Web Research Agent', desc: '用 TinyFish 抓取任意网站并将摘要保存到 Notion 的聊天机器人' },
      { slug: 'Daily Product Hunt Tracker', desc: '定时工作流，每天将 Product Hunt 上排名前 5 的热门产品推送到 Telegram' },
    ],
  },
];

export const codeSamples = {
  curl: `curl -N -X POST https://agent.tinyfish.ai/v1/automation/run-sse \\
  -H "X-API-Key: $TINYFISH_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://agentql.com",
    "goal": "Find all AgentQL subscription plans and their prices. Return result in json format"
  }'`,
  python: `import json, os, requests

response = requests.post(
    "https://agent.tinyfish.ai/v1/automation/run-sse",
    headers={
        "X-API-Key": os.getenv("TINYFISH_API_KEY"),
        "Content-Type": "application/json",
    },
    json={
        "url": "https://agentql.com",
        "goal": "Find all AgentQL subscription plans and their prices. Return result in json format",
    },
    stream=True,
)

for line in response.iter_lines():
    if line:
        line_str = line.decode("utf-8")
        if line_str.startswith("data: "):
            event = json.loads(line_str[6:])
            print(event)`,
  typescript: `const response = await fetch("https://agent.tinyfish.ai/v1/automation/run-sse", {
  method: "POST",
  headers: {
    "X-API-Key": process.env.TINYFISH_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: "https://agentql.com",
    goal: "Find all AgentQL subscription plans and their prices. Return result in json format",
  }),
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value));
}`,
};
