import './Main.css'
import Banner from '../Banner/Banner'

export default function Main(){
    return(
    <>
        <main className='banner-m'>
            <div className='banner1'>
            <Banner
            title="Bienvenido a Nuestro Sitio"
            subtitle="Ofrecemos los mejores servicios en adopción!"
            backgroundImage="./adop1.jpg"
            height="350px"
            width="450px"
            borderRadius="8px"
            h1PaddingTop='170px'
            />
            </div>
            <div className='banner2'>
            <Banner
            title="Promoción Especial"
            subtitle="LLeva un gato y te enseñamos a cuidarlo!"
            backgroundImage="./adop4.jpg"
            height="350px"
            width="400px"
            borderRadius="8px"
            h1PaddingTop='170px'
            />
            </div>
            <div className='banner3'>
            <Banner
            title="Toma cursos de cuidado"
            subtitle="Aprende a cuidar a tu gato!"
            backgroundImage="./adop5.jpg"
            height="350px"
            width="450px"
            borderRadius="8px"
            h1PaddingTop='170px' 
            />
            </div>
            <div className='banner4'>
            <Banner
            title="Dona para ayudar a más gatos"
            subtitle="Día a día ayudamos a los felinos a encontrar su hogar!"
            backgroundImage="./adop2.jpg"
            height="300px"
            width="700px"
            borderRadius="8px"
            h1PaddingTop='100px' 
            />
            </div>
        </main>
    </>)
}