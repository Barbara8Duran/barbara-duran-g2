import './InputBanner.css'

const InputBanner = ({ title, backgroundImage }) => {
    const bannerType = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    };
    return (
        <div className="form" style={bannerType}>
            <h1>{title}</h1>
            <input type="text" placeholder="Ingrese su correo" />
            <button className="normal">Inscribirse</button>
        </div>
    );
}

export default InputBanner;