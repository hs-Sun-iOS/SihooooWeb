export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      logoFirst: "Sihoooo",
      logoSecond: "Tech"
    },
    hero: {
      title: "Crafting Products with Utility and Soul.",
      subtitle: "Refusing the mediocre. Every line of code and every single pixel is meticulously shaped to bring inspiration and warmth to your daily life.",
      cta: "Explore Products"
    },
    products: {
      title: "Products",
      viewStore: "VIEW ON APP STORE",
      bluurCam: {
        name: "Bluur cam",
        description: "The End of Aesthetics is Blur! Get the retro Blur fashion style now!"
      },
      tidy: {
        name: "Tidy",
        description: "Clean up your photo library and iCloud! Save Storage and Time!"
      },
      paused: {
        name: "PAUSED",
        description: "Master your screen time. Master your life."
      },
      popGrid: {
        name: "PopGrid",
        description: "Redefine Memories. 50 Photos at a Time. Break the Grid."
      }
    },
    about: {
      title: "About Us",
      paragraph1: "We are an innovative studio dedicated to redefining digital experiences. At Sihoooo, we are guided by the core philosophy of \"Crafting products with utility and soul,\" firmly rejecting the accumulation of mediocre features.",
      paragraph2: "We believe that great tools are more than just cold lines of code; they are the seamless interplay of pixels and inspiration. By merging cutting-edge technology with meticulous design, we strive to provide global users with digital solutions that bring warmth, aesthetics, and balance to their daily lives.",
      email: "min@Sihoooo.cn"
    },
    footer: {
      company: "Sihoooo Network Technology Co Ltd",
      slogan: "Crafting products with utility and soul.",
      copyright: "SihooooTech@2023",
      address: "No. 18 Gaoxin 1st Road, High tech Zone, Xi'an City, China",
      email: "min@Sihoooo.cn"
    },
    contact: {
      title: "Contact Us",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      close: "Close"
    }
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品",
      about: "关于我们",
      logoFirst: "汐禾",
      logoSecond: "科技"
    },
    hero: {
      title: "创造好用，且富有灵魂的产品",
      subtitle: "拒绝平庸的堆砌，每一行代码，每一个像素，都为你的生活注入灵感与温度。",
      cta: "探索产品"
    },
    products: {
      title: "产品",
      viewStore: "在 App Store 查看",
      bluurCam: {
        name: "Bluur相机",
        description: "高级的尽头是模糊！现在就Get复古模糊的时尚感！"
      },
      tidy: {
        name: "Tidy",
        description: "一键清理你的照片库和 iCloud！让相册保持整洁，让清理变得有趣！"
      },
      paused: {
        name: "不做手机控",
        description: "助你重拾时间掌控权。以极简的多巴胺交互，让自律变得轻松且迷人！"
      },
      popGrid: {
        name: "简拼图",
        description: "AI 智能破框，支持 50+ 超大容量无损拼接。"
      }
    },
    about: {
      title: "关于我们",
      paragraph1: "我们是一家专注于数字生活体验的初创创新工作室。秉承「创造好用，且富有灵魂的产品」这一核心理念，拒绝平庸的功能堆砌。",
      paragraph2: "我们相信，好的工具不应只是冷冰冰的代码，而应是像素与灵感的交织。我们致力于将极致的设计与前沿技术相结合，在效率工具、AI 影像处理及数字健康等领域持续探索，为全球用户提供更有温度、更具美感的数字生活解决方案。",
      email: "min@Sihoooo.cn"
    },
    footer: {
      company: "西安汐禾网络科技有限公司",
      slogan: "创造好用，且富有灵魂的产品。",
      copyright: "SihooooTech@2023",
      address: "中国西安市高新区高新一路18号",
      email: "min@Sihoooo.cn"
    },
    contact: {
      title: "联系我们",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的邮箱",
      messagePlaceholder: "您的留言",
      send: "发送消息",
      sending: "发送中...",
      success: "消息发送成功！",
      error: "发送失败，请重试。",
      close: "关闭"
    }
  }
};

export type Language = 'en' | 'zh';
export type Translations = typeof translations.en;
