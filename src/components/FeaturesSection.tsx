
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">👨‍💼</span>
                  </div>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">👩‍💼</span>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">👨‍💼</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Elevate Learning with AI-Powered Innovation.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's fast-paced world, businesses need a smart, scalable, and engaging 
              learning solution. Our AI-driven Learning Management System (LMS) is 
              designed to revolutionize training and education with cutting-edge technology 
              and seamless user experiences.
            </p>
          </div>
        </div>

        {/* Second feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Traditional training programs fall short in meeting individual learning needs.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              That's where FORSA steps in. Our AI-driven platform adapts to each 
              learner's style, pace, and goals, ensuring a smarter, faster, and more 
              effective learning experience.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Learning Paths</h3>
                  <p className="text-gray-600">AI adapts content to each user. Real Time Insights - Track progress and optimize learning.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Seamless Integration</h3>
                  <p className="text-gray-600">Works effortlessly with your existing systems. Empower your team with intelligent, results-driven training that truly elevates learning benefits individually.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg font-semibold text-gray-900">
              Experience the Future of Business Training Today.
            </p>
          </div>
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
