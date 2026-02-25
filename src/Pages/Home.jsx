export const Home = () => {
    return (
        <>
            <div className="container text-center">
                <h1>Row 1</h1>
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 border">
                        Column
                    </div>
                
                </div>

                <h1>Row 2</h1>
                <div className="row">
                    <div className="col-6 border">
                        Column
                    </div>
                    <div className="col-6 border">
                        Column
                    </div>
                    <div className="col-6 border">
                        Column
                    </div>
                    <div className="col-6 border">
                        Column
                    </div>
                    
                </div>
               
            </div>
        </>
    )
}