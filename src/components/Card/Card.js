import './Card.css';
import Circle from '../Сircle/Сircle';

function Card() {
  return (
    <section className="card__container">
        <div className="card__picture">
          <p className="card__text">Сказочное заморское яство</p>
        <h1 className="card__name">Нямушка</h1>
        <h2 className="card__kind">с фуа-гра</h2>
        <p className="card__promotion">10 порций мышь в подарок</p>
        </div>
        
        <Circle />
        <p className="card__question">Чего сидишь? Порадуй котэ, </p><a className="card__question card__link">купи.</a>
      </section>
  );
}

export default Card;