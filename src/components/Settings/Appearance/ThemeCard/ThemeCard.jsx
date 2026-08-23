import './ThemeCard.css'

function ThemeCard({title, imageSrc, cardTheme, theme, setTheme }){
    function switchTheme(){
        setTheme(cardTheme)
    }

    return (
        <div 
            className={theme === cardTheme ? 'theme-card theme-card-selected' : 'theme-card'}
            onClick={()=>switchTheme()}
        >
            <img src={imageSrc} alt={`${title} Theme`} />
            <div className='theme-card-info'>
                <h3>
                    {title}
                    {(title === "Dark" || title === "Light") && <span className='theme-card-info-title-span'> (Default {title.toLowerCase()})</span> }
                </h3>
                {
                    theme === cardTheme && <span className='theme-card-active-badge'>Active</span>
                }
            </div>
        </div>
    )
}

export default ThemeCard