import menuData from "./menu-data"

export default function Menu(){

    return(
        <div className="menu-container">
            {menuData.map((data,index) => (
            
            <div className="menu-box">
                <div className="menu-picture">
                    <h1><img className="pic_size" src={data.pict}></img></h1>
                </div>
                <div className="menu-information">
                    <div className="menu-title">
                        <h6>{data.menuTitle}</h6>
                    </div>
                    <div className="menu-price">
                        <h6>{data.price}</h6>
                    </div>
                </div>    
            </div>
           ))}
        </div>
   )
}