import "../stylessheets/Home.css"

export const Home = () => {

    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className="row">
                    <div className="col-6 ">

                        <div className="d-flex flex-column justitify-content-center h-100 gap-5">

                            <div >
                                <h1>MAKE <br /> REMOTE WORK</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quia labore ut vitae quis impedit nulla quod eos? Ab ea molestias,
                                    sequi esse ut similique nesciunt veritatis nisi! Eaque, saepe asperiores
                                </p>
                                <a href="https://mx.pinterest.com/" className="btn btn-dark">Learn More</a>
                            </div>

                            <div className="d-flex gap-3 aling-items-center">
                                <img src="./logo 3.svg" height="25" alt="" />
                                <img src="./mux-logo.png" height="25" alt="" />
                                <img src="./wiz.svg" height="25" alt="" />
                                <img src="./zephyr_cloud.png"height="25" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 ">
                        <div className="">
                            <img src="./Home.jpg" className="img-cropped " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}