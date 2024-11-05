import ItemList from "../../ItemList/ItemList"
import BannerMw from "../../BannerMw/BannerMw"

export default function ShopPage(){
    
    return(
        <>
            <h2>¡Adopta Gatos!</h2>
            <p>Ellos te necesitan</p>
        
            <ItemList />
            <BannerMw
            title="Haz una donación"
            subtitle="Ayuda a los adorables felinos!"
            backgroundImage="/mw-banner.jpg"
            />
        </>
    )}