import bin from "../../assets/bin.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
// import menuData from "../molecules/menu-data";

function Cart() {
  return (
    <div className="cart-section">
      <div className="cart-title">
        <h6>My Cart</h6>
      </div>
      <div className="cart-container">
        <div className="left-cart-container">
          <h6>Review Your Order</h6>
          <div className="line-cart">
            {/* {menuData.map((data, index) =>( */}
            <div className="main-cart">
              <div className="picture-menu-cart">
                <img
                  className="picture-cartPaid"
                  src="https://www.pngitem.com/pimgs/m/129-1296068_caramel-macchiato-vanilla-bean-macchiato-starbucks-hd-png.png"
                  alt="cartPaid"
                ></img>
              </div>
              <div className="data-cart">
                <div className="data-flavour-cart">
                  <div className="menu-title-cart">
                    <h6>Ice Coffee Palm Sugar</h6>
                  </div>
                  <div className="data-price-cart">
                    <h6>Rp 33.000</h6>
                  </div>
                </div>
                <div className="data-topping-cart">
                  <div>
                    <h6>
                      Topping <i>: Boba, Green Tea</i>
                    </h6>
                  </div>
                  <div className="trash-cart">
                    <img src={bin} alt="bin" />
                  </div>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
        <div className="right-cart-container">
          <div className="line-cart">
            <div className="data-payment">
              <div className="detail-payment-cart">
                <div className="subTotal-title-cart">
                  <h6>Sub Total</h6>
                </div>
                <div className="subTotal-payment-cart">
                  <h6>Rp 33.000</h6>
                </div>
              </div>
              <div className="quantity-title-cart">
                <div>
                  <h6>Quantity</h6>
                </div>
                <div className="quantity-cart">
                  <h6>2</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="total-cart-detail">
            <div className="total-detail txt-red">
              <div>
                <h6>Total</h6>
              </div>
              <div>
                <h6>Rp 66.000</h6>
              </div>
            </div>
            <Button variant="danger" className="add-cart">
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
