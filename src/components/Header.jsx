import './Header.css';
import Perfil from '../assets/login.webp'

const Header = () => {
  return (
    <header className='containerHeader'>
      <a href="/">Gmail</a>
      <a href="/">Imagens</a>
      <div className='imgHeader'>
        <img src={Perfil} alt="Foto Default Perfil" width={30} />
      </div>
    </header>
  )
}

export default Header