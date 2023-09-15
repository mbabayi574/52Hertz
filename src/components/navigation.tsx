import ThemeIcon from './ThemeIcon/themeicon'

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <div className='title-link'>
        <a href='/'>52Hertz 🐋</a>
      </div>
      <div className='nav-links'>
        <a href='/works/'>Works</a>
        <a href='/posts/'>Posts</a>
        <a href='https://github.com/ttomczak3/Milky-Way' target='_blank'>
          GitHub
        </a>
        <ThemeIcon />
      </div>
    </div>
  )
}
export default Navigation
