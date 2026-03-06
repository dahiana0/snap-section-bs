import React from 'react'
import { Header } from '../components/Header.jsx'



export const About = () => {
    return (
        <>
            <br />
            <br />
            <div className="container d-flex flex-column gap-5 bg-light w-100" >
              <br />
                <div className="row ">
                    <div className="col-11 text-info-emphasis  fs-1 text"><h2>Join our community</h2>
                    </div>
                    <h3 className='text-success '>30-day, hassle-free money back guarantee</h3>
                    <p className='text-body-secondary'>  Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>

                <div className="row bg-info text-body-secondary">
                    <div className="col-6 ">
                        <h2>Monthly Subscription</h2> <br />
                    <br />
                        <h2>$29</h2>per month
                        Full access for less than $1 a day
                        <br />
                        <br />
                        <a href="http://www.jango.com" className="btn btn-success">Sign Up</a>
                        <br />
                        <br />
                    </div>

                    <div className="col-6 bg-info-subtle text-body-secondary">
                        <h2>Why Us</h2>
                        <br />
                        Tutorials by industry experts
                        Peer & expert code review
                        Coding exercises
                        Access to our GitHub repos
                        Community forum
                        Flashcard decksNew videos every week
                        </div>
                </div>
            </div>
            <br />

        </>
    )
}