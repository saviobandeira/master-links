import Header from '@/app/components/Header';
import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';


export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className=' max-w-xl w-full px-6 py-16'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
