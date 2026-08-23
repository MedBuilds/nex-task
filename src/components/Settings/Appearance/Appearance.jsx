import ThemeCard from "./ThemeCard/ThemeCard";
import "./Appearance.css";
import lightTheme from "../../../assets/light-theme.svg";
import lightJadeTheme from "../../../assets/light-jade-theme.svg";
import lightMarbleTheme from "../../../assets/light-marble-theme.svg";
import darkTheme from "../../../assets/dark-theme.svg";
import darkVelvetTheme from "../../../assets/dark-velvet-theme.svg";
import darkAubergineTheme from "../../../assets/dark-aubergine-theme.svg";

function Appearance({ theme, setTheme }) {
    return (
        <div className="appearance">
            <h2>Appearance</h2>
            <p className="appearance-description">Choose a color theme for NexTask — scroll for more options.</p>
            <div className="themes-container">
                <ThemeCard
                    title="Light"
                    imageSrc={lightTheme}
                    cardTheme="light"
                    theme={theme}
                    setTheme={setTheme}
                />
                <ThemeCard
                    title="Light Jade"
                    imageSrc={lightJadeTheme}
                    cardTheme="light-jade"
                    theme={theme}
                    setTheme={setTheme}
                />
                <ThemeCard
                    title="Light Marble"
                    imageSrc={lightMarbleTheme}
                    cardTheme="light-marble"
                    theme={theme}
                    setTheme={setTheme}
                />
                <ThemeCard
                    title="Dark"
                    imageSrc={darkTheme}
                    cardTheme="dark"
                    theme={theme}
                    setTheme={setTheme}
                />
                <ThemeCard
                    title="Dark Velvet"
                    imageSrc={darkVelvetTheme}
                    cardTheme="dark-velvet"
                    theme={theme}
                    setTheme={setTheme}
                />
                <ThemeCard
                    title="Dark Aubergine"
                    imageSrc={darkAubergineTheme}
                    cardTheme="dark-aubergine"
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        </div>
    );
}

export default Appearance;
