import "./Collection.css";
import getFree from './collectionimges/buy-one-get-one.jpg';
import ubcommingSoon from './collectionimges/upcomming-season.jpg';
import seasonalSale from './collectionimges/seasonal-sale.jpg';
import newFootwear from './collectionimges/new-footwear.jpg';
import tshirt from './collectionimges/t-shirts.jpg';
function Collection() {
  return (
    <>
    {/* Get Free */}
      <div className="collect container mt-5">
        <div className="crazyDetail ">
            <div className="cards">
                <img src={getFree} className="rounded-4" alt="..." />
                <div className="text-overly">
                    <h5>crazy deals</h5>
                    <h2 className="fw-bold">Buy 1 get 1 free</h2>
                    <h5>The best classic dress is on the sale at cara!</h5>
                    <button type="button" className="btn text-light mt-3">Learn More</button>
                </div>
            </div>
        </div>
          {/* Up Comming Soon */}
          <div className="springAndSummer mx-auto">
            <div className="cards">
                <img src={ubcommingSoon} className="rounded-4" alt="..." />
                <div className="text-overly">
                    <h5>spring/summer</h5>
                    <h2 className="fw-bold">upcomming season</h2>
                    <h5> The best classic dress is on sale at cara!</h5>
                    <button type="button" className="btn text-light mt-3 btn-collection">Collection</button>
                </div>
            </div>
          </div>
        </div>
        <div className="collect_2 my-4">
            {/* SEASONAL SALE */}
            <div className="seasonalSale">
            <div className="cards">
                <img src={seasonalSale} className="rounded-4 styleing" alt="..." />
                <div className="text-overly_2">
                    <h5 className="fw-bold fs-4">SEASONAL SALE</h5>
                    <span className="sale fs-5"> Winter collection – 50% OFF</span>
                </div>
            </div>
            </div>
            {/* FOOTWEAR */}
            <div className="footwear ">
            <div className="cards">
                <img src={newFootwear} className="rounded-4 styleing" alt="..." />
                <div className="text-overly_2">
                    
                    <h5 className="fw-bold fs-4">NEW FOOTWEAR COLLECTION</h5>
                    <span className="sale fs-5"> Spring / Summer 2022</span>
                </div>
            </div>
            </div>
            {/* T-SHIRTS */}
            <div className="tshirts">
            <div className="cards">
                <img src={tshirt} className="rounded-4" alt="..." />
                <div className="text-overly_2">
                    <h5 className="fw-bold fs-4">T-SHIRTS</h5>
                    <span className="sale fs-5">New trendy t-shirts</span>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Collection;
