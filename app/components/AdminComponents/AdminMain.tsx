export default function AdminMain() {
    return (
        <section className='text-center w-full'>
            <div>
                {/* Social Media */}
                <div className='flex flex-col gap-4'>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://github.com/saviobandeira'
                    >
                        GitHub
                    </a>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://www.linkedin.com/in/savio-bandeira-79760620b/'
                    >
                        Linkedin
                    </a>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://www.instagram.com/savio.band/'
                    >
                        Instagram
                    </a>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://www.saviobandeira.com'
                    >
                        Portifólio online
                    </a>
                </div>
            </div>
            <div>
                <h2 className='py-8 font-bold uppercase'>Projetos Online</h2>
                <div className='flex flex-col gap-4'>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://paulotrindade.vercel.app/'
                        >
                            Link-in-bio customizado
                    </a>
                </div>
            </div>
            <div>
                <h2 className='py-8 font-bold uppercase'>Código-Fonte</h2>
                <div className='flex flex-col gap-4'>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://github.com/saviobandeira/pedeja_wppbot'
                    >
                        Sistema de auto atendimento pelo Whatsapp
                    </a>
                    <a
                        className=' bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
                        href='https://github.com/saviobandeira/user-authentication'
                    >
                        Sistema Full-Stack para autenticação de usuario com FastAPI/JWT
                    </a>
                </div>
            </div>
        </section>
    );
}