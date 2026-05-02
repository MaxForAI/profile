export interface LocalizedText {
  en: string;
  zh: string;
}

interface FeatureItem {
  title: LocalizedText;
  description: LocalizedText;
}

interface DataCardItem {
  value: string;
  label: LocalizedText;
  description: LocalizedText;
}

interface ListPanel {
  title: LocalizedText;
  items: LocalizedText[];
}

interface TextSection {
  type: 'text';
  title: LocalizedText;
  content: LocalizedText;
}

interface FeatureGridSection {
  type: 'feature-grid';
  title: LocalizedText;
  columns: 2 | 3;
  items: FeatureItem[];
}

interface MetricCardsSection {
  type: 'metric-cards';
  title: LocalizedText;
  items: DataCardItem[];
}

interface ListPanelsSection {
  type: 'list-panels';
  panels: ListPanel[];
}

interface StatCardsSection {
  type: 'stat-cards';
  title: LocalizedText;
  items: DataCardItem[];
}

export type ProjectSection =
  | TextSection
  | FeatureGridSection
  | MetricCardsSection
  | ListPanelsSection
  | StatCardsSection;

export interface ProjectContent {
  title: LocalizedText;
  description: LocalizedText;
  projectNumber: number;
  sections: ProjectSection[];
}

export const projectContents: Record<'projectOne' | 'projectTwo' | 'projectThree' | 'projectFour', ProjectContent> = {
  projectOne: {
    title: {
      en: "AdventureX - China's First Youth Hackathon",
      zh: "AdventureX - 中国年轻人第一场黑客松",
    },
    description: {
      en: "A revolutionary hackathon empowering China's next generation of innovators",
      zh: "一场赋能中国下一代创新者的革命性黑客松",
    },
    projectNumber: 1,
    sections: [
      {
        type: 'text',
        title: {
          en: 'Event Overview',
          zh: '活动概览',
        },
        content: {
          en: "AdventureX is China's first youth-focused hackathon, designed specifically for innovators under 26. Breaking away from traditional hackathon formats, we've created an immersive 5-day experience that combines intensive development with mentorship, workshops, and networking opportunities. Our mission is to empower China's next generation of tech talents and foster a vibrant innovation ecosystem.",
          zh: 'AdventureX 是中国首个专注于年轻人的黑客松，专为26岁以下的创新者打造。打破传统黑客松的形式，我们创造了一个为期5天的沉浸式体验，将高强度开发与导师指导、工作坊和社交机会相结合。我们的使命是赋能中国下一代科技人才，培育充满活力的创新生态系统。',
        },
      },
      {
        type: 'feature-grid',
        title: {
          en: 'Event Highlights',
          zh: '活动亮点',
        },
        columns: 2,
        items: [
          {
            title: {
              en: 'Youth-Focused Innovation',
              zh: '青年创新',
            },
            description: {
              en: 'Exclusively for innovators under 26, creating a unique environment where young talents can freely express their ideas and collaborate with peers.',
              zh: '专为26岁以下的创新者打造，创造一个独特的环境，让年轻人才能自由表达想法并与同龄人合作。',
            },
          },
          {
            title: {
              en: 'Comprehensive Support',
              zh: '全方位支持',
            },
            description: {
              en: 'Beyond just coding, we provide mentorship from industry experts, technical workshops, and networking sessions to help participants grow.',
              zh: '不仅仅是编程，我们还提供行业专家指导、技术工作坊和社交活动，帮助参与者全面成长。',
            },
          },
        ],
      },
      {
        type: 'metric-cards',
        title: {
          en: 'Event Details',
          zh: '活动细节',
        },
        items: [
          {
            value: '5',
            label: {
              en: 'Days Duration',
              zh: '活动天数',
            },
            description: {
              en: 'Full immersive experience',
              zh: '全沉浸式体验',
            },
          },
          {
            value: '72h',
            label: {
              en: 'Hacking Time',
              zh: '编程时间',
            },
            description: {
              en: 'Intensive development',
              zh: '高强度开发',
            },
          },
          {
            value: '¥50k',
            label: {
              en: 'Prize Pool',
              zh: '奖金池',
            },
            description: {
              en: 'Rewards for innovation',
              zh: '创新奖励',
            },
          },
        ],
      },
      {
        type: 'list-panels',
        panels: [
          {
            title: {
              en: 'Event Schedule',
              zh: '活动日程',
            },
            items: [
              {
                en: 'Day 1: Opening ceremony & Team formation',
                zh: '第一天：开幕式与组队',
              },
              {
                en: 'Day 2-4: 72-hour hackathon',
                zh: '第2-4天：72小时黑客松',
              },
              {
                en: 'Day 5: Project presentation & Awards',
                zh: '第五天：项目展示与颁奖',
              },
            ],
          },
          {
            title: {
              en: 'Resources Provided',
              zh: '提供资源',
            },
            items: [
              {
                en: 'Technical mentorship from industry experts',
                zh: '行业专家技术指导',
              },
              {
                en: 'Development tools and API access',
                zh: '开发工具和API访问',
              },
              {
                en: 'Meals and accommodation',
                zh: '餐饮和住宿',
              },
            ],
          },
        ],
      },
      {
        type: 'stat-cards',
        title: {
          en: 'Participant Statistics',
          zh: '参与者数据',
        },
        items: [
          {
            value: '200+',
            label: {
              en: 'Participants',
              zh: '参与者',
            },
            description: {
              en: 'From 50+ universities',
              zh: '来自50+所高校',
            },
          },
          {
            value: '40+',
            label: {
              en: 'Teams',
              zh: '参赛团队',
            },
            description: {
              en: 'Cross-disciplinary collaboration',
              zh: '跨学科合作',
            },
          },
          {
            value: '50+',
            label: {
              en: 'Mentors',
              zh: '导师团队',
            },
            description: {
              en: 'Industry experts',
              zh: '行业专家',
            },
          },
          {
            value: '30+',
            label: {
              en: 'Projects',
              zh: '创新项目',
            },
            description: {
              en: 'Cutting-edge solutions',
              zh: '前沿解决方案',
            },
          },
        ],
      },
      {
        type: 'text',
        title: {
          en: 'Future Vision',
          zh: '未来展望',
        },
        content: {
          en: "AdventureX is more than just a hackathon - it's a movement to revolutionize how young Chinese innovators approach technology and entrepreneurship. We're building a sustainable ecosystem where creativity thrives, connections are forged, and the next generation of tech leaders emerges. Our vision extends beyond the event itself, as we aim to establish a nationwide network of young innovators who will shape China's technological future.",
          zh: 'AdventureX 不仅仅是一场黑客松，更是一场革新中国年轻创新者对待技术和创业方式的运动。我们正在建立一个可持续发展的生态系统，在这里创造力蓬勃发展，人脉纽带不断形成，下一代科技领袖不断涌现。我们的愿景超越活动本身，致力于建立一个全国性的年轻创新者网络，他们将塑造中国的科技未来。',
        },
      },
    ],
  },
  projectTwo: {
    title: {
      en: 'AI Education - Personalized Learning Revolution',
      zh: 'AI 教育 - 个性化学习革命',
    },
    description: {
      en: "Empowering everyone to unlock their learning potential with AI",
      zh: '用 AI 赋能每个人解锁学习潜能',
    },
    projectNumber: 2,
    sections: [
      {
        type: 'text',
        title: {
          en: 'Vision Overview',
          zh: '愿景概览',
        },
        content: {
          en: "In the AI era, education is undergoing a fundamental transformation. We believe that AI will unlock everyone's ability to learn freely, moving away from traditional one-size-fits-all education to truly personalized learning journeys. With AI as your personal tutor, you can learn anything you want, at your own pace, in your own way.",
          zh: '在AI时代，教育正在经历根本性的转变。我们相信AI将解锁每个人自由学习的能力，从传统的统一化教育模式转向真正的个性化学习之旅。有了AI作为你的私人导师，你可以按照自己的节奏，用自己的方式，学习任何你想学习的内容。',
        },
      },
      {
        type: 'feature-grid',
        title: {
          en: 'Key Features',
          zh: '核心特点',
        },
        columns: 2,
        items: [
          {
            title: {
              en: 'Personalized Learning Path',
              zh: '个性化学习路径',
            },
            description: {
              en: 'AI analyzes your learning style, pace, and preferences to create a customized learning journey that adapts to your needs and progress.',
              zh: 'AI分析你的学习风格、节奏和偏好，创建适应你的需求和进度的定制化学习旅程。',
            },
          },
          {
            title: {
              en: 'Interactive Learning',
              zh: '互动学习',
            },
            description: {
              en: 'Engage in dynamic conversations with AI tutors, receive instant feedback, and explore concepts through interactive exercises and real-world examples.',
              zh: '与AI导师进行动态对话，获得即时反馈，通过互动练习和真实案例探索概念。',
            },
          },
        ],
      },
      {
        type: 'metric-cards',
        title: {
          en: 'Technology Stack',
          zh: '技术架构',
        },
        items: [
          {
            value: 'LLM',
            label: {
              en: 'Core AI Engine',
              zh: '核心AI引擎',
            },
            description: {
              en: 'Advanced language model for natural interactions',
              zh: '自然交互的高级语言模型',
            },
          },
          {
            value: 'RAG',
            label: {
              en: 'Knowledge Base',
              zh: '知识库',
            },
            description: {
              en: 'Retrieval-augmented generation for accurate learning',
              zh: '检索增强生成确保学习准确性',
            },
          },
          {
            value: 'API',
            label: {
              en: 'Integration Hub',
              zh: '集成中心',
            },
            description: {
              en: 'Connected with various learning resources',
              zh: '连接多样化学习资源',
            },
          },
        ],
      },
      {
        type: 'stat-cards',
        title: {
          en: 'Learning Impact',
          zh: '学习效果',
        },
        items: [
          {
            value: '85%',
            label: {
              en: 'Learning Efficiency',
              zh: '学习效率',
            },
            description: {
              en: 'Improvement vs traditional methods',
              zh: '相比传统方法的提升',
            },
          },
          {
            value: '10k+',
            label: {
              en: 'Active Users',
              zh: '活跃用户',
            },
            description: {
              en: 'Learning with AI daily',
              zh: '每日使用AI学习',
            },
          },
          {
            value: '100+',
            label: {
              en: 'Subject Areas',
              zh: '学科领域',
            },
            description: {
              en: 'Comprehensive coverage',
              zh: '全面的知识覆盖',
            },
          },
          {
            value: '24/7',
            label: {
              en: 'Availability',
              zh: '全天候服务',
            },
            description: {
              en: 'Learn anytime, anywhere',
              zh: '随时随地学习',
            },
          },
        ],
      },
      {
        type: 'text',
        title: {
          en: 'Future Vision',
          zh: '未来展望',
        },
        content: {
          en: "We envision a future where AI transforms education from a standardized system to a personalized journey of discovery. By leveraging AI's capabilities, we're not just making education more accessible - we're making it more effective, engaging, and tailored to each individual's needs. Our goal is to create a world where everyone has the power to learn anything, breaking down traditional barriers and unleashing human potential through technology.",
          zh: '我们展望着AI将教育从标准化系统转变为个性化的探索之旅的未来。通过利用AI的能力，我们不仅让教育变得更容易获取，还让它变得更有效、更有吸引力，更适合每个人的需求。我们的目标是创造一个人人都能学习任何东西的世界，通过技术打破传统障碍，释放人类潜能。',
        },
      },
    ],
  },
  projectThree: {
    title: {
      en: 'BeautyTest - AI Skin Analysis Assistant',
      zh: '美美测 - AI肤色分析助手',
    },
    description: {
      en: 'Your personal AI beauty consultant for precise skin tone analysis',
      zh: '你的AI美容顾问，精准分析肤色类型',
    },
    projectNumber: 3,
    sections: [
      {
        type: 'text',
        title: {
          en: 'Project Overview',
          zh: '项目概览',
        },
        content: {
          en: 'BeautyTest is an innovative AI-powered skin analysis application that helps users understand their skin tone and receive personalized skincare recommendations. Using advanced computer vision technology, it provides accurate skin tone analysis and tailored beauty advice.',
          zh: '美美测是一款创新的AI肤色分析应用，帮助用户了解自己的肤色类型并获取个性化护肤建议。通过先进的计算机视觉技术，提供精准的肤色分析和定制化的美容建议。',
        },
      },
      {
        type: 'feature-grid',
        title: {
          en: 'Key Features',
          zh: '核心功能',
        },
        columns: 3,
        items: [
          {
            title: {
              en: 'Smart Skin Analysis',
              zh: '智能肤色分析',
            },
            description: {
              en: 'Take a photo or select from gallery to get instant AI-powered skin tone analysis with high accuracy.',
              zh: '拍照或从相册选择照片，即刻获得AI驱动的高精度肤色分析。',
            },
          },
          {
            title: {
              en: 'Personalized Advice',
              zh: '个性化建议',
            },
            description: {
              en: 'Receive customized skincare tips and product recommendations based on your skin type.',
              zh: '根据肤色类型获取定制化护肤建议和产品推荐。',
            },
          },
          {
            title: {
              en: 'Skin Care Tracking',
              zh: '护肤追踪',
            },
            description: {
              en: 'Track your skin condition changes over time and adjust care routine accordingly.',
              zh: '追踪记录肤色状态变化，相应调整护理方案。',
            },
          },
        ],
      },
      {
        type: 'metric-cards',
        title: {
          en: 'Technology Stack',
          zh: '技术架构',
        },
        items: [
          {
            value: 'Vision',
            label: {
              en: 'Core Analysis',
              zh: '核心分析',
            },
            description: {
              en: 'Apple Vision Framework for precise detection',
              zh: 'Apple Vision框架实现精准检测',
            },
          },
          {
            value: 'Swift',
            label: {
              en: 'Native Development',
              zh: '原生开发',
            },
            description: {
              en: 'High-performance iOS app',
              zh: '高性能iOS应用',
            },
          },
          {
            value: 'ML',
            label: {
              en: 'Smart Analysis',
              zh: '智能分析',
            },
            description: {
              en: 'Advanced machine learning models',
              zh: '先进的机器学习模型',
            },
          },
        ],
      },
      {
        type: 'stat-cards',
        title: {
          en: 'App Impact',
          zh: '应用影响',
        },
        items: [
          {
            value: '95%',
            label: {
              en: 'Analysis Accuracy',
              zh: '分析准确率',
            },
            description: {
              en: 'In standard lighting',
              zh: '标准光照条件下',
            },
          },
          {
            value: '20k+',
            label: {
              en: 'Active Users',
              zh: '活跃用户',
            },
            description: {
              en: 'Monthly active users',
              zh: '月活跃用户',
            },
          },
          {
            value: '100+',
            label: {
              en: 'Skin Types',
              zh: '肤色类型',
            },
            description: {
              en: 'Comprehensive analysis',
              zh: '全面分析覆盖',
            },
          },
          {
            value: '4.7',
            label: {
              en: 'App Rating',
              zh: '应用评分',
            },
            description: {
              en: 'App Store Rating',
              zh: 'App Store评分',
            },
          },
        ],
      },
      {
        type: 'text',
        title: {
          en: 'Future Vision',
          zh: '未来展望',
        },
        content: {
          en: "We're committed to advancing our AI technology to provide even more precise skin analysis and personalized recommendations. Our vision is to become the most trusted AI beauty consultant, helping everyone understand their skin better and make informed skincare choices. We're also exploring new features like seasonal skin condition tracking and integration with smart beauty devices.",
          zh: '我们致力于提升AI技术，提供更精准的肤色分析和个性化建议。我们的愿景是成为最值得信赖的AI美容顾问，帮助每个人更好地了解自己的肤质并做出明智的护肤选择。我们也在探索新功能，如季节性肤质变化追踪和智能美容设备集成。',
        },
      },
    ],
  },
  projectFour: {
    title: {
      en: 'SafeEat - Your AI Food Safety Assistant',
      zh: '放心吃吧 - 你的AI食品安全助手',
    },
    description: {
      en: 'Using AI to ensure food safety and make informed dietary choices',
      zh: '用AI让你吃得更放心，选择更健康',
    },
    projectNumber: 4,
    sections: [
      {
        type: 'text',
        title: {
          en: 'Project Overview',
          zh: '项目概览',
        },
        content: {
          en: "SafeEat is an intelligent food safety assistant that helps users understand food ingredients, prevent safety risks, and make healthier dietary choices. By leveraging AI technology, we're making food safety information more accessible and personalized for everyone.",
          zh: '放心吃吧是一款智能食品安全助手，帮助用户了解食品成分，预防安全风险，做出更健康的饮食选择。通过运用AI技术，我们让食品安全信息变得更易获取，更加个性化。',
        },
      },
      {
        type: 'feature-grid',
        title: {
          en: 'Key Features',
          zh: '核心功能',
        },
        columns: 3,
        items: [
          {
            title: {
              en: 'Smart Ingredient Recognition',
              zh: '智能配料识别',
            },
            description: {
              en: 'Take a photo of food packaging and let AI instantly analyze the ingredient list, providing detailed information about each component.',
              zh: '拍摄食品包装照片，让AI即时分析配料表，提供每种成分的详细信息。',
            },
          },
          {
            title: {
              en: 'Safety Risk Assessment',
              zh: '安全风险评估',
            },
            description: {
              en: 'Comprehensive evaluation of food safety levels, additive analysis, nutritional interpretation, and allergen risk alerts.',
              zh: '全面评估食品安全等级，分析添加剂，解读营养成分，提示过敏原风险。',
            },
          },
          {
            title: {
              en: 'Personalized Service',
              zh: '个性化服务',
            },
            description: {
              en: 'Set personal allergens, manage dietary preferences, and track your food safety history with our customized service.',
              zh: '设置个人过敏原，管理饮食偏好，追踪食品安全历史记录。',
            },
          },
        ],
      },
      {
        type: 'metric-cards',
        title: {
          en: 'Technology Stack',
          zh: '技术架构',
        },
        items: [
          {
            value: 'AI',
            label: {
              en: 'Core Recognition',
              zh: '核心识别',
            },
            description: {
              en: 'Vision Framework & OCR Technology',
              zh: 'Vision框架与OCR技术',
            },
          },
          {
            value: 'Swift',
            label: {
              en: 'Native Development',
              zh: '原生开发',
            },
            description: {
              en: 'iOS 15.0+ Support',
              zh: '支持iOS 15.0以上',
            },
          },
          {
            value: 'Cloud',
            label: {
              en: 'Data Processing',
              zh: '数据处理',
            },
            description: {
              en: 'Secure & GDPR Compliant',
              zh: '安全且符合GDPR标准',
            },
          },
        ],
      },
      {
        type: 'stat-cards',
        title: {
          en: 'App Impact',
          zh: '应用影响',
        },
        items: [
          {
            value: '98%',
            label: {
              en: 'Recognition Accuracy',
              zh: '识别准确率',
            },
            description: {
              en: 'For standard packaging',
              zh: '标准包装识别',
            },
          },
          {
            value: '50k+',
            label: {
              en: 'Active Users',
              zh: '活跃用户',
            },
            description: {
              en: 'Monthly active users',
              zh: '月活跃用户',
            },
          },
          {
            value: '1M+',
            label: {
              en: 'Food Items',
              zh: '食品数据',
            },
            description: {
              en: 'In our database',
              zh: '数据库收录',
            },
          },
          {
            value: '4.8',
            label: {
              en: 'App Rating',
              zh: '应用评分',
            },
            description: {
              en: 'App Store Rating',
              zh: 'App Store评分',
            },
          },
        ],
      },
      {
        type: 'text',
        title: {
          en: 'Future Vision',
          zh: '未来展望',
        },
        content: {
          en: "We're committed to expanding our food safety database and enhancing our AI capabilities to provide even more accurate and comprehensive food safety information. Our vision is to become the most trusted AI-powered food safety assistant, helping everyone make informed decisions about their daily diet. We're also exploring partnerships with food manufacturers and regulatory bodies to create a more transparent and safer food ecosystem.",
          zh: '我们致力于扩展食品安全数据库并增强AI能力，提供更准确、更全面的食品安全信息。我们的愿景是成为最值得信赖的AI食品安全助手，帮助每个人对日常饮食做出明智的选择。我们也在探索与食品制造商和监管机构的合作，创建一个更透明、更安全的食品生态系统。',
        },
      },
    ],
  },
};
