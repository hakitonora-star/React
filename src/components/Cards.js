const Cards = ({ resdata }) => {
  return (
    <div className="main">
    <div className="restaurants">
      {resdata.banner_image_es && (
        <img
          src={resdata.banner_image_es}
          alt={resdata.brand_name}
        />
      )}

      <h3>{resdata.brand_name}</h3>
      <div className="ratingstar">
      <h4 >{resdata.main_offering}</h4>
      </div>
      <h4>{resdata.description}</h4>
    </div>
    </div>
  );
};

export default Cards;