
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GamepadIcon, ShoppingCartIcon, CalendarIcon, SettingsIcon, DollarSignIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import RoomsGrid from '@/components/RoomsGrid';
import RoomsManagement from '@/components/RoomsManagement';
import AppointmentsManagement from '@/components/AppointmentsManagement';
import CafeManagement from '@/components/CafeManagement';
import OrdersManagement from '@/components/OrdersManagement';
import CurrentOrders from '@/components/CurrentOrders';
import TransactionsManagement from '@/components/TransactionsManagement';
import UserManagement from '@/components/UserManagement';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Sessions</CardTitle>
            <GamepadIcon className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-gray-400">Currently playing</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Today's Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,250 EGP</div>
            <p className="text-xs text-gray-400">+15% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Appointments</CardTitle>
            <CalendarIcon className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-gray-400">Scheduled today</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Cafe Orders</CardTitle>
            <ShoppingCartIcon className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-gray-400">Items sold today</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="rooms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7 bg-slate-800 border-0">
          <TabsTrigger value="rooms" className="data-[state=active]:bg-blue-600 text-white">
            <GamepadIcon className="w-4 h-4 mr-2" />
            Rooms
          </TabsTrigger>
          <TabsTrigger value="current-orders" className="data-[state=active]:bg-green-600 text-white">
            <ClipboardListIcon className="w-4 h-4 mr-2" />
            Current Orders
          </TabsTrigger>
          <TabsTrigger value="appointments" className="data-[state=active]:bg-purple-600 text-white">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Appointments
          </TabsTrigger>
          <TabsTrigger value="cafe" className="data-[state=active]:bg-orange-600 text-white">
            <ShoppingCartIcon className="w-4 h-4 mr-2" />
            Café
          </TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-indigo-600 text-white">
            <ClipboardListIcon className="w-4 h-4 mr-2" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-pink-600 text-white">
            <UsersIcon className="w-4 h-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="management" className="data-[state=active]:bg-gray-600 text-white">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rooms">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Gaming Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <RoomsGrid />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="current-orders">
          <CurrentOrders />
        </TabsContent>

        <TabsContent value="appointments">
          <AppointmentsManagement />
        </TabsContent>

        <TabsContent value="cafe">
          <CafeManagement />
        </TabsContent>

        <TabsContent value="orders">
          <OrdersManagement />
        </TabsContent>

        <TabsContent value="users">
          <UserManagement />
        </TabsContent>

        <TabsContent value="management">
          <div className="space-y-6">
            <RoomsManagement />
            <TransactionsManagement />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
