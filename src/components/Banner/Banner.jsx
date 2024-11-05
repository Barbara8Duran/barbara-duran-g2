import './Banner.css'

const Banner = ({ title, subtitle, backgroundImage, height = '400px', width = '100%', borderRadius = '0px' }) =>{
    const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: height,
      width: width,
      borderRadius: borderRadius,
    };

    return (
      <div className="banner" style={bannerStyle}>
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

export default Banner;