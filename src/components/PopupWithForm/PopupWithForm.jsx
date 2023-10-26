export default function PopupWithForm({name, title, titleBtn, children, isOpen, isClose}) {
    return(
    <div className= {`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
        action="name"
        name={name}
        id="edit-profile"
        className="popup__form popup-profile__form"
        noValidate=""
        >
        {children}
        <button
          type="submit"
          className="popup__button popup__save-button popup__button_disabled"
          aria-label="сохранить"
        >  
          {titleBtn||'Сохранить'}
        </button>
        </form>

        <button
          className="popup__close-button popup__close-profile"
          type="button"
          aria-label="закрыть"
          onClick={isClose}
        />
      </div>
    </div>
    )
}