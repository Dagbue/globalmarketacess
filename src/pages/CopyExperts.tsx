import DashboardLayout from '../components/dashboard/DashboardLayout';
import CopyExpert from '../components/dashboard/CopyExpert';

export default function CopyExperts() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <CopyExpert />
      </div>
    </DashboardLayout>
  );
}
