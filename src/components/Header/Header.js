import "./Header.css"

function Header() {
  return (
    <header className="page">
      <img className="logo" src="/images/logo.svg" alt="logo" />
      <div className='header__container'>
        <div className='header__text'>
          <p className="text">Афиша</p>
          <p className="text">Контакты</p>
        </div>
        <div className='header__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/79279325000">
            <img className="links" src="/images/whatsup.svg" alt="whatsup" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/dadyNikita">
            <img className="links" src="/images/telegram.svg" alt="telegramm" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://vk.com/swimschool_lk">
            <img className="links" src="/images/vk.svg" alt="vk" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;