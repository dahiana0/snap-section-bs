import React from 'react'
import { Header } from '../components/Header'

export const Careers = () => {
    return (
        <>
        

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center h-100 gap-5">
                            <div>

                                <h1>Healthy meals, zero fuss</h1>
                                <br />

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit quisquam doloremque  </p>
                                <br />

                                <a href="http://www.jango.com" className="btn btn-success">Start exploring</a>


                                <br />
                                <br />

                                <div>
                                    <img src="./image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className=" d-flex flex-column justify-content-center h-100 gap-5">

                <div className='text-center'>
                    <h1>What you'll get</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="./Zanahoria.png" width={90} alt="" />
                            <br />
                            Whole-food recipes
                            <p>Each recipe is designed to be healthy delicious and easy to make.</p>
                        </div>

                        <div className="col">
                            <img src="./Rayo.png" width={100} alt="" />
                            <br />
                            Minimun fuss
                            <p>We do the hard work, you just enjoy.</p>
                        </div>

                        <div className="col">
                            <img src="./public/Lupa.png" width={100} alt="" />
                            <br />
                            Search in seconds
                            <p>Find the perfect recipe for any occasion with our powerful search.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-6 ">

                        <div className="d-flex flex-column justitify-content-center h-100 gap-5">

                            <div >
                                <h1>Built For Real  Life </h1>
                                <br />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quia labore ut vitae quis impedit nulla quod eos? Ab ea molestias,
                                    sequi esse ut similique nesciunt veritatis nisi! Eaque, saepe asperiores
                                </p>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sequi nulla
                                    aliquid possimus aliquam voluptatem repudiandae, temporibus eum
                                </p>

                            </div>

                        </div>
                    </div>

                    <div className="col-6  ">
                        <div className="d-flex align-items-center justify-content-end h-100">
                            <img src="./Img  Sec Bil.png" className="w-75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
           <br />
           <br />

           <div className='col-50 border text-center h-100 gap-5 bg-info-subtle'>
            <h1> Ready to cook smaeter?</h1>
            <br />
            <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
            <a href="http://www.jango.com" className="btn btn-success">Browse recipes</a>

           </div>
        </>
    )
}