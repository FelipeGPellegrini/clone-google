import './Body.css'

import Logo from '../assets/google_logo.svg'

const Body = () => {
  return (
    <div className='containerBody'>
      <div className='containerLogo'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="inputSearch">
        <input type="text" placeholder='Pesquise' />
      </div>
    </div>
  )
}

export default Body