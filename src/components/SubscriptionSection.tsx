
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SubscriptionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Subscription Management
            </h2>
            
            <div className="space-y-8">
              <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">License Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Businesses can purchase licenses for the number of users, get access to 
                    wide range of courses in our library, allocate courses to users, have access 
                    to live data of users performance within 360 view and analytics of individuals 
                    and teams performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Billing and Payment Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    View subscription status, payment history, and renewals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white">👨‍💼</span>
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-4 bg-green-200 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded"></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-purple-400 rounded-full mb-2"></div>
                    <div className="h-1 bg-gray-100 rounded w-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 bg-green-400 rounded-full mb-2"></div>
                    <div className="h-1 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>
                
                {/* Floating illustration elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center animate-float">
                  <span className="text-white">👩‍💼</span>
                </div>
                <div className="absolute bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
