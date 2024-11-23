
import "bootstrap/dist/css/bootstrap.min.css";
import "../basic.css";
import {CustomerNavBar} from "@/app/components/CustomerNavBar";
import {CustomerProductList} from "@/app/components/CustomerProductList";

export default function Store() {

    return (
        <div>

            <CustomerNavBar />

            <CustomerProductList/>

        </div>);


}