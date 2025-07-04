import AdminHeader from '@/src/components/AdminComponents/AdminHeader';
import AdminMain from '@/src/components/AdminComponents/AdminMain';
import Footer from '@/src/components/Footer';


export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <AdminMain />
            <Footer />
        </div>
    );
}