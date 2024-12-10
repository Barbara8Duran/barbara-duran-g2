import "./About.css"

import Hero2 from "../../Hero2/Hero2"
import Banner from "../../Banner/Banner"


export default function AboutPage(){
    
    return(
        <> 
            <div className="hero-2">
            <Hero2
                title="Refugio para Gatos"
                subtitle="Ayudamos a estos adorables felinos!"
                backgroundImage= "https://www.aspca.org/sites/default/files/keeping-animals-in-homes_pet-statistics_main-image.jpg"
            />
            </div>
            <div className="banner-a">
                <div className="banner-a-1">
                <Banner
                title="Bienvenido a Nuestro Sitio"
                subtitle="Ofrecemos los mejores servicios de adopción!"
                backgroundImage="./adop1.jpg"
                height="350px"
                width="650px"
                borderRadius="15px" 
                h1PaddingTop="170px"
                />
                <p>Bienvenido a nuestro refugio de gatos, un lugar dedicado a rescatar y rehabilitar a felinos necesitados de un hogar amoroso. 
                Aquí, cada gato es especial y cuenta con una historia única. Nuestro objetivo es brindarles un ambiente seguro y acogedor mientras 
                buscan su familia perfecta.
                <br />Ofrecemos una variedad de gatos, desde traviesos cachorros hasta sabias almas adultas, todos esperando con ansias encontrar 
                un lugar donde puedan recibir amor y cuidado. Al adoptar un gato de nuestro refugio, no solo estás ganando un compañero leal, sino 
                que también estás haciendo una gran diferencia en su vida.
                <br />Te invitamos a visitar nuestro refugio, conocer a nuestros adorables residentes y descubrir cómo puedes ayudar a cambiar sus 
                vidas para siempre. ¡Juntos podemos crear un futuro mejor para estos maravillosos animales!</p>
                </div>
                <div className="banner-a-2">
                <Banner
                title="Adopta o Aporta!"
                subtitle="Los felinos te necesitan"
                backgroundImage="./adop6.jpg"
                height="350px"
                width="650px"
                borderRadius="15px"
                h1PaddingTop="170px"
                />
                <p><p>Al unirte a nuestra misión, no solo estás dándole una nueva oportunidad a un gato, sino que también estás siendo parte de una comunidad de personas compasivas que apoyan el bienestar animal. Además de la adopción, tenemos muchas maneras de contribuir, desde hacer donaciones hasta ofrecer tu tiempo como voluntario. Cada gesto cuenta y ayuda a que podamos seguir proporcionando atención médica, alimentación y un entorno adecuado para nuestros felinos.

También ofrecemos programas educativos para aquellos que buscan aprender más sobre el cuidado de los gatos y la importancia de la adopción responsable. Si no puedes adoptar, tu apoyo puede hacer una diferencia significativa en la vida de estos gatos, ayudándoles a encontrar un hogar lleno de amor y esperanza.
</p></p>
                </div>
            </div>
            <div className="mw-banner">
            <Banner
                title="Haz una donación"
                subtitle="Ayuda a los adorables felinos!"
                backgroundImage="/mw-banner.jpg"
                height="30vh"
                width="100%"
                h1PaddingTop="40px"
            />
            </div>
            <div className="hero-2">

            </div>
        </>
    )
};