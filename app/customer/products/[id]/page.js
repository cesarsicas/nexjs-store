import {CustomerProductList} from "@/app/components/CustomerProductList";
import {CustomerNavBar} from "@/app/components/CustomerNavBar";


export default function ProductDetails() {
    return (
        <>

            <CustomerNavBar/>


            <div className="container">
                <div className="row">

                    <div className="col-md-6 offset-md-3">

                        <br/>
                        <br/>

                        <div className="product">
                            <img src="/product-52-200x200.webp"/>
                            <p className="name"> Smart Tv 32 LG Led 32lr651cbsa Hdr Ai Thinq Led Hd 100v/240v</p>
                            <p className="value">R$ 2.420,00</p>
                        </div>
                    </div>


                </div>
            </div>


        </>

    );
}