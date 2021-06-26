
import React from 'react'
import './Home.css'
import Product from './Product'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel interval="4000" home__image>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MzY2NzRkYTMt-w3000._CB666006420_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenFree_DMUX-4110/Gateway/DV3A/US-EN_030121_FreeTierQ1Refresh_ACQ_GW_Hero_D_3000x1200_CV3._CB655482702_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
            // style={{ height: "100vh" }}
            />
          </Carousel.Item>
        </Carousel>
        {/* <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />   */}
        <div className="home__row">
          <Product
            id="12321341"
            title="Fashion deals for her"
            price={200.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/N2FkMDllZDUt/N2FkMDllZDUt-NGU4YTkwMGMt-w372._SY232_CB667112257_.jpg"
          />
          <Product
            id="49538094"
            title="Fashion deals for her"
            price={150}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/Y2E4YjY3ZjIt/Y2E4YjY3ZjIt-OGYwMzkwOGMt-w758._SY608_CB669995593_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Try Multi-Room Music with Alexa"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-NWRlNDBkNjYt-w758._SY608_CB667101704_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Customers’ Most-Loved Beauty"
            price={100}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-YWZhNjJlZTQt-w372._SY232_CB667051072_.jpg"
          />
          <Product
            id="23445930"
            title="Customers’ Most-Loved Women's"
            price={54}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NjM2YjQ4NmQt-w372._SY232_CB667051072_.jpg"
          />
          <Product
            id="3254354345"
            title="Customers’ Most-Loved Men's"
            price={159}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-YjY2NjEwNWIt-w372._SY232_CB667051072_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
