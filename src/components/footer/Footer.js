

const Footer = ()=>{
    return(
        <footer className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-4 mx-auto text-center">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Company
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            About Us
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Team
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Products
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Blog
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Pricing
                        </a>
                    </div>
                    <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-dribbble"></span>
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-twitter"></span>
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-instagram"></span>
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-pinterest"></span>
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-github"></span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mx-auto text-center mt-1">
                        <p className="mb-0 text-secondary">
                            Copyright © <script>
                            document.write(new Date().getFullYear())
                            </script> Dashboard by Afinity Solution.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;