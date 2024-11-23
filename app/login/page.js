import "bootstrap/dist/css/bootstrap.min.css";
import "../basic.css";

export default function Login() {
    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-md-6 offset-md-3">

                        <div className="login-form-container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formOption">Role</label>

                                    <select className="form-control" id="formOption">

                                        <option>Customer</option>
                                        <option>Merchant</option>
                                        <option>Admin</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>


        </>

    );
}