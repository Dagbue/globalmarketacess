import AdminLayout from '../../components/admin/AdminLayout';
import { Users, TrendingUp, DollarSign, FileText, BarChart3, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '15,247',
      change: '+12%',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Active Trades',
      value: '3,456',
      change: '+8%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-green-600'
    },
    {
      title: 'Total Volume',
      value: '$2.4M',
      change: '+15%',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'bg-purple-600'
    },
    {
      title: 'Pending Requests',
      value: '89',
      change: '-5%',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-orange-600'
    }
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Deposit Request', amount: '$5,000', time: '2 mins ago' },
    { user: 'Sarah Chen', action: 'Withdrawal', amount: '$2,500', time: '5 mins ago' },
    { user: 'Mike Johnson', action: 'New Registration', amount: '-', time: '10 mins ago' },
    { user: 'Lisa Wang', action: 'Trade Executed', amount: '$1,200', time: '15 mins ago' },
    { user: 'David Kim', action: 'Loan Request', amount: '$10,000', time: '20 mins ago' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of platform activity and user management</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{activity.amount}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-600">Manage Users</p>
                </button>
                <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-600">View Trades</p>
                </button>
                <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
                  <DollarSign className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-600">Deposits</p>
                </button>
                <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
                  <FileText className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-orange-600">Reports</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;