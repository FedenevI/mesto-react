export default function PopupImage ({card, isOpen, isClose}) {
    return(
      <div className={`popup popup-image ${isOpen && 'popup_opened'}`}>
        <div className="popup-image__wrapper">
          <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={isClose}
          />
          <img className="popup-image__container" 
          src={card.link ? card.link : '#'} 
          alt={card.name ? `Изображение ${card.name}` : '#'} />
          <p className="popup-image__name">{card.name}</p>
        </div>
      </div>

    )
}