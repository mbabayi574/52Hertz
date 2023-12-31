import './card.scss'

interface CardProps {
  href: string
  image: string
  title: string
  body: string
}

const Card = (props: CardProps) => {
  return (
    <div className='card-style'>
      <li className='link-card'>
        <a href={props.href}>
          <div className='img'>
            <img width='226' height='127' src={props.image} className='card-img' alt='CardImage' />
          </div>
          <h3 className='card-title'>{props.title}</h3>
          <p className='card-txt'>{props.body}</p>
        </a>
      </li>
    </div>
  )
}
export default Card
