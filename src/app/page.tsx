import Images from "next/image";

export default function Home() {
  return (
    <di className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              张伟华
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">关于我</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">技能</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">项目</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">联系</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  张
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            你好，我是
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              张伟华
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            全栈开发工程师 · 技术爱好者 · 创新者
         
            <a href="#projects" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
              查看项目
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            关于我
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                技术驱动的创新者
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                我是一名充满激情的全栈开发工程师，拥有5年以上的Web开发经验。专精于React、Node.js和现代前端技术栈，致力于创建用户友好且性能优异的Web应用。
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                我相信技术应该服务于人，通过代码解决实际问题是我最大的乐趣。无论是前端的精美界面还是后端的稳定架构，我都追求极致的用户体验。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">前端开发</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">后端开发</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">UI/UX设计</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">经验</h4>
                <p className="text-slate-600 dark:text-slate-300">5+ 年Web开发经验</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">项目</h4>
                <p className="text-slate-600 dark:text-slate-300">50+ 完成项目</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">专长</h4>
                <p className="text-slate-600 dark:text-slate-300">全栈开发 & 系统架构</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            技能专长
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">前端开发</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vue.js / Nuxt.js</li>
                <li>• 响应式设计</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">后端开发</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• PostgreSQL / MongoDB</li>
                <li>• Redis / 缓存策略</li>
                <li>• RESTful API / GraphQL</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">工具 & 部署</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Git / GitHub</li>
                <li>• Docker / Kubernetes</li>
                <li>• AWS / Vercel</li>
                <li>• CI/CD 管道</li>
                <li>• 性能优化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  电商平台
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  基于React和Node.js的全栈电商解决方案，包含用户认证、支付集成和管理后台。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">MongoDB</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  查看详情 →
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  任务管理系统
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  团队协作的任务管理平台，支持实时协作、文件共享和进度跟踪。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">Express</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Socket.io</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  查看详情 →
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  数据可视化平台
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  企业级数据分析和可视化平台，支持多种图表类型和实时数据更新。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  查看详情 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
            联系我
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            有项目想法或想要合作？我很乐意听到您的想法！
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">邮箱</h3>
              <p className="text-slate-600 dark:text-slate-300">zhang.weihua@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">电话</h3>
              <p className="text-slate-600 dark:text-slate-300">+86 138 0013 8000</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">位置</h3>
              <p className="text-slate-600 dark:text-slate-300">北京，中国</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 张伟华. 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  );
}
