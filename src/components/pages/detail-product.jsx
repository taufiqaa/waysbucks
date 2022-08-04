import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import menuData from "../molecules/menu-data";

function DetailProduct() {
  return (
    <div className="detail-product-section">
      <div className="picture-detail-menu">
        <img
          className="picture-detail"
          src="https://www.pngitem.com/pimgs/m/129-1296068_caramel-macchiato-vanilla-bean-macchiato-starbucks-hd-png.png"
          alt=""
        ></img>
      </div>
      <div className="right-detail-product">
        <div className="flavour-price-detail">
          <div className="flavour-detail">
            <h6>Ice Coffee Palm Sugar </h6>
          </div>
          <div className="price-detail">
            <h6>Rp 27.000</h6>
          </div>
        </div>
        <div className="title-topping-detail">
          <div className="title-detail">
            <h6>Topping</h6>
          </div>
          <div className="topping-detail-container">
            {menuData.map((data, index) => (
              <div className="topping-detail">
                <div className="picture-topping-detail">
                  <img className="picture-topping" src={data.pict} alt="" />
                </div>
                <div className="topping-variant-detail">
                  <h6>{data.menuTitle}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="total-cart-detail">
          <div className="total-detail">
            <div>
              <h6>Total</h6>
            </div>
            <div>
              <h6>Rp 33.000</h6>
            </div>
          </div>
          <Button variant="danger" className="add-cart">
            Add Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
