# TinyFish  Cookbook

<a href="https://agent.tinyfish.ai/">
  <img width="100%" alt="搜索和抓取功能现已免费" src="https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/.github/assets/banner.png?raw=1" />
</a>

<div align="center">

[![官网](https://img.shields.io/badge/Website-141414?style=for-the-badge&logo=googlechrome&logoColor=white)](https://tinyfish.ai/)
[![文档](https://img.shields.io/badge/Docs-526CE5?style=for-the-badge&logo=readthedocs&logoColor=white)](https://docs.tinyfish.ai/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/tinyfish)
[![许可证](https://img.shields.io/badge/License-View-green?style=for-the-badge)](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/LICENSE)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Tiny_Fish)
[![领英](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/tinyfish-ai/)
[![Threads](https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white)](https://www.threads.com/@tinyfish_ai)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/tinyfish_ai/)

</div>

---

> **搜索和抓取功能现已免费**
>
> TinyFish 的 **搜索（Search）** 和 **抓取（Fetch）** 接口现在对所有人免费开放，并配有慷慨的速率限制，无需信用卡。同一个密钥、同一个控制台、同一组支撑生产负载的接口即可使用。[立即获取密钥 &rarr;](https://agent.tinyfish.ai/)

---

## 关于本仓库

欢迎来到 **TinyFish Cookbook！** 这里汇集了基于 TinyFish 构建的不断增长的食谱、演示和自动化方案。TinyFish 是面向 AI Agent 的网络层。

如果你的 Agent 需要搜索实时网页、干净地读取页面、执行多步骤浏览器流程，或访问任何没有开放 API 的网站，这里就是起点。

## 接口概览

TinyFish 提供四个接口，从闪电般快速的信息检索到完全托管的浏览器自动化层层递进。**搜索和抓取免费使用。**

| 接口                                       | 功能                                                                                 | 适用场景                                                                              | 速度             | 计费     |
| ------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------------- | -------- |
| **Search** &nbsp; `api.search.tinyfish.ai` | 为 Agent 设计的快速结构化网页搜索 —— JSON 结果，多次调用排名稳定。                   | 任何 Agent 的检索层。面向 LLM 消费设计，而非传统蓝链浏览。                            | < 0.5s           | **免费** |
| **Fetch** &nbsp; `api.fetch.tinyfish.ai`   | 任意 URL &rarr; 干净的 Markdown / JSON / HTML。真实全浏览器渲染。失败的 URL 不收费。 | 读取指定页面并向 LLM 提供干净内容。可替代 Firecrawl、原生 LLM 抓取或自研 Playwright。 | 数秒             | **免费** |
| **Agent**                                  | 提供一个 URL 和自然语言目标。Agent 自动导航、操作并返回干净 JSON。                   | 多步骤流程、复杂任务、结构化数据提取。                                                | 约 10 秒至数分钟 | 按量计费 |
| **Browser**                                | 租用一台完全托管的云浏览器。连接你自己的 Playwright 或 Selenium 脚本。               | 深度自定义 Agent 和脚本。                                                             | 实时             | 按量计费 |

## 为什么选择 TinyFish？

- **任意网站 &rarr; API** —— 将没有 API 的网站变为可编程数据源
- **自然语言目标** —— 发送一个 URL +  plain English，获得结构化 JSON
- **真实浏览器自动化** —— 多步骤流程、表单、筛选、日历、动态内容
- **内置隐身能力** —— 内置轮换代理和隐身配置，无需额外费用
- **Vault** —— 面向 Agent 的凭据和会话记忆，支持认证工作流（1Password JIT、加密会话复用）
- **生产级可观测性** —— 每次运行都有完整日志和调试信息
- **Token 高效设计** —— Fetch 会剥离导航栏、脚本和 Cookie 横幅，让你不再为垃圾 HTML 支付 Token 费用

## 使用 TinyFish 的方式

一个 API 密钥，随处可用。

### REST API

```bash
# 搜索
curl "https://api.search.tinyfish.ai?query=web+automation+tools" \
  -H "X-API-Key: $TINYFISH_API_KEY"

# 抓取
curl -X POST https://api.fetch.tinyfish.ai \
  -H "X-API-Key: $TINYFISH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.tinyfish.ai/"]}'

# Agent（流式）
curl -N -X POST https://agent.tinyfish.ai/v1/automation/run-sse \
  -H "X-API-Key: $TINYFISH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://agentql.com", "goal": "Find all subscription plans and prices. Return JSON."}'
```

### MCP Server

将服务器 URL 填入 Claude Code、Cursor、Codex、ChatGPT 桌面版或任何支持 MCP 的客户端。

```json
{
  "mcpServers": {
    "tinyfish": { "url": "https://mcp.tinyfish.ai" }
  }
}
```

### CLI

```bash
npm install -g @tiny-fish/cli
tinyfish auth login
tinyfish search query "web automation tools"
tinyfish fetch content get https://example.com
```

CLI 将结果写入文件系统，而不是通过模型的上下文窗口传输 —— Token 更低，输出更结构化。

### 脚本

用可一键复制的小脚本，把 TinyFish 接入日常工具。

| 脚本                                                                                                                  | 说明                                                    |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [Raycast TinyFish Search](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/scripts/raycast-tinyfish-search) | 从 Raycast 搜索网页，并获取格式化的结果 URL、标题和摘要 |

### Agent Skill

一行命令安装。支持 Claude Code、Codex、Cursor、OpenCode、Antigravity 等编程 Agent。该 Skill 会教你的 Agent **何时**使用 Search、Fetch 或 Agent，以及**如何**调用它们。

```bash
npx skills add github.com/tinyfish-io/tinyfish-cookbook --skill use-tinyfish
```

在 [skills.sh/tinyfish-io/tinyfish-cookbook/use-tinyfish](https://skills.sh/tinyfish-io/tinyfish-cookbook/use-tinyfish) 上查看。

### SDK

```bash
pip install tinyfish              # Python
npm install @tiny-fish/sdk        # TypeScript
```

两个 SDK 均覆盖 Search、Fetch、Browser、Agent 和 Vault —— 功能完全对等。

### 已集成的地方

查看我们的 [集成页面](https://www.tinyfish.ai/integrations)

## 食谱目录

每个文件夹都是一个独立项目。下面按用途分类，而非实现方式。

### 精选（在线演示）

这些项目使用最新 TinyFish SDK，并部署了可立即体验的在线演示。

| 食谱                                                                                                            | 说明                                                                          | 在线演示                                                  |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| [viet-bike-scout](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/viet-bike-scout)                   | 通过并行浏览器 Agent 对比越南各城市的摩托车租赁价格                           | [Demo](https://cookbook-viet-bike-scout.vercel.app/)      |
| [tutor-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/tutor-finder)                         | 面向多个平台的竞争性考试 AI 导师发现工具                                      | [Demo](https://cookbook-tutor-finder.vercel.app/)         |
| [openbox-deals](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/openbox-deals)                       | 跨 8 家零售商的实时开箱和翻新优惠聚合器                                       | [Demo](https://cookbook-openbox-deals.vercel.app/)        |
| [silicon-signal](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/silicon-signal)                     | 半导体供应链追踪器，覆盖生命周期、可得性和交期信号                            | [Demo](https://cookbook-silicon-signal.vercel.app/)       |
| [summer-school-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/summer-school-finder)         | 发现和对比全球大学的暑期学校项目                                              | [Demo](https://cookbook-summer-school-finder.vercel.app/) |
| [tinyskills](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/tinyskills)                             | 多来源 AI 技能指南生成器，将文档、GitHub 和博客抓取整合为单一 SKILL.md        | [Demo](https://cookbook-tinyskills.vercel.app/)           |
| [saigon-happy-hour-sniper](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/saigon-happy-hour-sniper) | 数秒内找到西贡的欢乐时光优惠                                                  | [Demo](https://saigon-happy-hour-sniper.vercel.app/)      |
| [worldcup-briefing](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/worldcup-briefing)               | AI 驱动的足球精彩集锦 —— 用 TinyFish Search 发现比赛视频，用 VideoDB 剪辑成片 | [Demo](https://worldcup-briefing.vercel.app)              |

### 购物与优惠

| 食谱                                                                                              | 说明                                                                 |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [bestbet](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/bestbet)                     | 跨博彩平台体育投注赔率对比                                           |
| [game-buying-guide](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/game-buying-guide) | 跨 10 个游戏平台的视频游戏价格对比                                   |
| [lego-hunter](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/lego-hunter)             | 跨 15+ 零售商的稀有乐高库存，包含价格和可得性分析                    |
| [openbox-deals](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/openbox-deals)         | 实时开箱和翻新优惠聚合器                                             |
| [waifu-deal-sniper](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/waifu-deal-sniper) | 面向手办收藏者的 Discord 机器人，监控 AmiAmi、Mercari、Solaris Japan |
| [wing-command](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/wing-command)           | 鸡翅追踪器 —— 按口味偏好找到附近最好的鸡翅                           |

### 旅行、住宿与本地生活

| 食谱                                                                                                                | 说明                                        |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [stay-scout-hub](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/stay-scout-hub)                         | 面向会展和活动的跨站住宿搜索                |
| [viet-bike-scout](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/viet-bike-scout)                       | 越南各城市摩托车租赁价格对比                |
| [district-rent-shark](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/district-rent-shark)               | 越南租房市场情报 + 社区步行友好度评分       |
| [restaurant-comparison-tool](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/restaurant-comparison-tool) | 基于 Google Maps 的餐厅事前安全与过敏原情报 |
| [saigon-happy-hour-sniper](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/saigon-happy-hour-sniper)     | 西贡欢乐时光优惠实时聚合器                  |

### 研究与市场情报

| 食谱                                                                                                    | 说明                                          |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [research-sentry](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/research-sentry)           | 语音优先的学术研究助手，扫描 ArXiv、PubMed 等 |
| [silicon-signal](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/silicon-signal)             | 半导体供应链与交期信号                        |
| [competitor-analysis](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/competitor-analysis)   | 实时竞争定价情报仪表盘                        |
| [competitor-scout-cli](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/competitor-scout-cli) | 用自然语言研究竞品功能决策的 CLI              |
| [logistics-sentry](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/logistics-sentry)         | 港口拥堵与承运商风险追踪                      |
| [tenders-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/tenders-finder)             | 跨多个门户的新加坡政府招标发现工具            |

### 教育与探索

| 食谱                                                                                                    | 说明                                   |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [tutor-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/tutor-finder)                 | 面向竞争性考试的 AI 导师发现工具       |
| [summer-school-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/summer-school-finder) | 对比全球大学的暑期学校项目             |
| [scholarship-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/scholarship-finder)     | 从官方来源抓取实时数据的奖学金发现工具 |

### 开发者工具

| 食谱                                                                                                      | 说明                                                       |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [code-reference-finder](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/code-reference-finder) | 从 GitHub 和 Stack Overflow 查找任意代码片段的真实使用示例 |
| [fast-qa](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/fast-qa)                             | 无代码 QA 测试平台，支持并行测试执行和实时浏览器预览       |
| [tinyskills](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/tinyskills)                       | 从文档、GitHub 和开发者博客生成综合 SKILL.md 指南          |

### 金融与决策

| 食谱                                                                                                      | 说明                       |
| --------------------------------------------------------------------------------------------------------- | -------------------------- |
| [loan-decision-copilot](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/loan-decision-copilot) | 跨银行和地区的贷款对比工具 |

### 生活方式与健康

| 食谱                                                                                          | 说明                                   |
| --------------------------------------------------------------------------------------------- | -------------------------------------- |
| [anime-watch-hub](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/anime-watch-hub) | 找到阅读或观看你喜欢的漫画和动画的网站 |
| [pharmacy-panic](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/pharmacy-panic)   | 实时对比越南主要连锁药店药品价格       |

> 每周都会有新食谱加入。查看 [CONTRIBUTING.md](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/CONTRIBUTING.md) 了解如何提交你的作品。

### n8n 工作流

预构建的 n8n 工作流，使用 TinyFish —— 导入 JSON 即可使用。

| 工作流                                                                                                                                  | 说明                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Competitor Scout](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/N8N_WorkFlows/Competitor%20Scout%20CLI)                   | 用 OpenAI 规划 + TinyFish 证据收集，研究竞品功能决策                 |
| [Web Research Agent](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/N8N_WorkFlows/Web%20Research%20Agent)                   | 用 TinyFish 抓取任意网站并将摘要保存到 Notion 的聊天机器人           |
| [Daily Product Hunt Tracker](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/N8N_WorkFlows/Daily%20Product%20Hunt%20Tracker) | 定时工作流，每天将 Product Hunt 上排名前 5 的热门产品推送到 Telegram |

## 快速开始

### 1. 获取 API 密钥

在 [agent.tinyfish.ai](https://agent.tinyfish.ai/) 注册。无需信用卡，Search 和 Fetch 开箱即用且免费。

### 2. 运行示例

#### cURL

```bash
curl -N -X POST https://agent.tinyfish.ai/v1/automation/run-sse \
  -H "X-API-Key: $TINYFISH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://agentql.com",
    "goal": "Find all AgentQL subscription plans and their prices. Return result in json format"
  }'
```

#### Python

```python
import json, os, requests

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
            print(event)
```

#### TypeScript

```typescript
const response = await fetch("https://agent.tinyfish.ai/v1/automation/run-sse", {
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
}
```

> 想给朋友分享 localhost 演示？使用 [tinyfi.sh](https://tinyfi.sh/) —— 免费且极其简单。

## Star 历史

<p align="center">
  <a href="https://www.star-history.com/#tinyfish-io/tinyfish-cookbook&type=date">
    <img src="https://api.star-history.com/svg?repos=tinyfish-io/tinyfish-cookbook&type=date&legend=top-left" alt="Star History Chart">
  </a>
</p>

## 贡献者

<a href="https://github.com/tinyfish-io/tinyfish-cookbook/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tinyfish-io/tinyfish-cookbook" />
</a>

有用 TinyFish 做出了很酷的东西？我们欢迎你提交。查看 [贡献指南](https://github.com/tinyfish-io/tinyfish-cookbook/blob/main/CONTRIBUTING.md) 了解完整流程。

## 社区与支持

- [Discord](https://discord.gg/tinyfish) —— 提问、分享你的作品、一起交流
- [文档](https://docs.tinyfish.ai/)
- [tinyfish.ai](https://tinyfish.ai/)

## 法律免责声明

本仓库是一个社区驱动的空间，用于分享与 TinyFish 产品相关的衍生作品、代码示例和最佳实践。使用本仓库中的任何材料，即表示你确认并同意以下条款：

- **"按原样"提供**：此处共享的所有代码、脚本和文档均按 "AS IS" 和 "AS AVAILABLE" 提供。TinyFish 不就社区贡献内容的准确性、可靠性或安全性作出任何明示或暗示的保证。
- **无维护义务**：TinyFish 没有义务监控、更新或修复社区贡献衍生作品中发现的错误、缺陷或安全漏洞。
- **用户责任**：你需自行负责在生产环境中实施任何代码之前的审查和测试。使用这些衍生作品的风险由你自行承担。
- **责任限制**：在任何情况下，TinyFish 均不对因使用或无法使用本仓库内容而引起的任何索赔、损害或其他责任负责，包括但不限于系统故障、数据丢失或安全漏洞。

> 注意：社区贡献不代表 TinyFish 的官方观点或受支持产品。

---

<img src="https://github.com/user-attachments/assets/2cf004f0-0065-4f21-9835-12ac693964f1" width="100%" />
