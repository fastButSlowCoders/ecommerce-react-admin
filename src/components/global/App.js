import React from 'react';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Preloader from '../layouts/Preloader';
import Sidebar from '../layouts/Sidebar';
function App() {
    return (
        /* Main Admin  App Component Start */
        <div className='admin-main-wrapper'>
            {/* Preloader start */}
            <Preloader />
            {/* Preloader end */}
            <div id="main-wrapper">
                {/* Nav area start */}
                <Navbar/>
                {/* Nav area end */}

                {/* Sidebar start */}
                <Sidebar/>
                {/* Sidebar end */}

                {/* Content body start */}
                    <div className="content-body">
                        <div className="container-fluid">
                            Blank page
                        </div>
                    </div>
                {/* Content body end */}


                {/* Footer start */}
                <Footer/>
                {/* Footer end */}
            </div>
        </div>
        /*  Main Admin  App Component End */
    );
  }
  export default App;