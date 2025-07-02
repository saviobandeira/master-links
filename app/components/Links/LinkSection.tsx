import LinkButton from '@/app/components/Links/LinkButton';


export default function LinkSection() {
    return (
        <section className='w-full'>
            <div>
                <div className='flex flex-col gap-4'>
                    <LinkButton
                        name='GitHub'
                        url='https://github.com/saviobandeira'
                    />
                    <LinkButton
                        name='Linkedin'
                        url='https://www.linkedin.com/in/savio-bandeira-79760620b/'
                    />
                    <LinkButton
                        name='Instagram'
                        url='https://www.instagram.com/savio.band/'
                    />
                    <LinkButton
                        name='Portifólio Online'
                        url='https://www.saviobandeira.com'
                    />
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='py-8 font-bold uppercase text-center'>Projetos Online</h2>
                    <LinkButton
                        name='Link-in-bio customizado'
                        url='https://paulotrindade.vercel.app/'
                    />
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='py-8 font-bold uppercase text-center'>Código-Fonte</h2>
                    <LinkButton
                        name='Sistema de auto atendimento pelo Whatsapp' 
                        url='https://github.com/saviobandeira/pedeja_wppbot'
                    />
                    <LinkButton
                        name='Sistema Full-Stack para autenticação de usuario com FastAPI/JWT'
                        url='https://github.com/saviobandeira/user-authentication'
                    />
                </div>
            </div>
        </section>

    );
}