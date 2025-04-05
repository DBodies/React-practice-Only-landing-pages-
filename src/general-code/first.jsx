import '/src/scss/styles.scss'

export default function FirstLanding() {
  return (
    <div className='firstLanding container'>
      <h1 className='firstLanding-title'>Discover the beauty around the world</h1>
      <p className="firstLanding-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
      <button type="button" className='firstLanding-button'>Explore</button>
      <div className="wrapper-for-img">
        <img src="/src/img/FirstFrame.png" alt="img" className="firstLanding-imgs" />
        <img src="/src/img/SecondFrame.png" alt="img" className="firstLanding-imgs" />
      </div>
    </div>
)
}


