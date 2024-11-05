import './BannerMw.css'

const BannerMw = ({ title, subtitle, backgroundImage }) => {
    const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div className="mw-banner" style={bannerStyle}>
        <div className="mw-banner-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

export default BannerMw;

