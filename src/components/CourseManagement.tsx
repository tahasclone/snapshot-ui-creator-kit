
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CourseManagement = () => {
  const features = [
    {
      title: "Course Creation and Upload",
      description: "Admins can upload new courses or create them directly on the platform, including text, video, and interactive elements."
    },
    {
      title: "Virtual Avatar Integration",
      description: "Delivery of lessons through a virtual avatar for a more interactive learning experience."
    },
    {
      title: "Evaluation Methods",
      description: "Admins can set up time-based assessments and AI-driven Q&A formats powered by our AI ChatBot."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex space-x-4">
                      <div className="w-16 h-12 bg-blue-400 rounded"></div>
                      <div className="w-16 h-12 bg-green-400 rounded"></div>
                      <div className="w-16 h-12 bg-purple-400 rounded"></div>
                      <div className="w-16 h-12 bg-yellow-400 rounded"></div>
                    </div>
                    <div className="h-32 bg-white rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">📊</span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 bg-blue-200 rounded w-20 mx-auto"></div>
                          <div className="h-1 bg-blue-200 rounded w-16 mx-auto"></div>
                          <div className="h-1 bg-blue-200 rounded w-12 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Course & Content Management
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseManagement;
