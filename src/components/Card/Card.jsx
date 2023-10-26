export default function Card({card, onCardOpen}) {
    return(
    <article className="element">
        <button className="element__trash-button" type="button" />
        <img 
        className="element__img" 
        alt={`Изображение ${card.name}`}
        src={card.link} 
        onClick={() => onCardOpen({link: card.link, name: card.name})}/>
        <div className="element__description">
          <div className="element__sign">
              <h2 className="element__title">{card.name}</h2>
                <div className="element__like-section">
                    <button
                    className="element__like-but"
                    type="button"
                    aria-label="Нравиться"
                    />
                    <span className="element__counter" />
                </div>
          </div>
        </div>
    </article>
)
}