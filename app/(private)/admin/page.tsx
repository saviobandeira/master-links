import AdminHeader from '@/app/components/AdminComponents/AdminHeader';
import AdminMain from '@/app/components/AdminComponents/AdminMain';
import Footer from '@/app/components/Footer';


export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <AdminMain />
            <Footer />
        </div>
    );
}