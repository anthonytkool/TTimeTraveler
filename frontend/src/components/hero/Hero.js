import './HeroStyle.css'
import Video from '../../assets/lovetour.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Hero
