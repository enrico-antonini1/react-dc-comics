export default function Footer() {
    return <footer>
        <div className="bg-primary footer-navbar">
            <div className="container">
                <ul className="white d-flex justify-content-between">
                    <li>
                        <img src="/buy-comics-digital-comics.png" alt=""/>
                        <span>DIGITAL COMICS</span>
                    </li>
                     <li>
                        <img src="/buy-comics-merchandise.png" alt="" />
                        <span>DC MERCHANDISE</span>
                    </li>
                     <li>
                        <img src="/buy-comics-shop-locator.png" alt="" />
                        <span>SUBSCRIPTION</span>
                    </li>
                     <li>
                        
                        <img src="/buy-comics-subscriptions.png" alt="" />
                        <span>COMIC SHOP LOCATOR</span>
                    </li>
                    <li>
                        <img src="/buy-dc-power-visa.svg" alt="" />
                        <span>DC POWER VISA</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-footer">
            <div className="container"></div>
        </div>
        <div className="bg-light-grey">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <button type="button" className="btn btn-outline-primary white ">
                    SIGN-UP NOW!
                </button>
                <div className="d-flex align-items-center">
                    <span className="followus">FOLLOW US</span>
                    <ul className="d-flex align-items-center gap-3 mb-0">
                        <li><a href="">Ciao</a>                     
                        </li>
                        <li><a href="">Ciao</a></li>
                        <li><a href="">Ciao</a></li>
                        <li><a href="">Ciao</a></li>
                        <li><a href="">Ciao</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}