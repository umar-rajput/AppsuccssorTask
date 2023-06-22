// import { useNavigate } from "react-router-dom";
import "./Slide6.css";

function Slide6() {
    // let navigate = useNavigate()
    // const handleclick = () => {
    //     navigate('/slide6')
    // }
    return (
        <div className="Slide6">
            <div className="main-inner">
                <div className="logo"></div>
                <div className="d-flex justify-content-around align-items-end inner">
                    <div className="">
                        <p className="head">Pro</p>
                        <div className="machine6pro">

                        </div>
                    </div>
                    <div className="">
                        <p className="head">Characteristics</p>
                        <div className="rect text-white">
                            <div className="rect-inner">
                                <p>✓</p>
                                <p>12″ flat touch screen</p>
                                <p>✓</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="head">OneTouch</p>
                        <div className="machine6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide6;