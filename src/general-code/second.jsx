import '/src/scss/styles.scss'

export default function SecondLanding() {
    return (
        <div className="header container">
            <div className="header__wrapper-upper-section">
            <div className="header__wrapper-text">
                <p className="header__wrapper-title">Discover the beauty around the world</p>
                <p className="header__wrapper-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.</p>
                <a href="../main.jsx" className="header__wrapper-link">Get started</a>
                </div>
                <img src="/src/img/secondLanding/leftImg.png" alt="" className="upper-section-img" />
                <img src="/src/img/secondLanding/rightImg.png" alt="" className="upper-section-img rightImg" />
            </div>
            <div className="header__wrapper-lower-section">
                <img src="/src/img/secondLanding/3-in-a-row.png" alt="" className="lower-section-img" />
            </div>
        </div>
    )
}