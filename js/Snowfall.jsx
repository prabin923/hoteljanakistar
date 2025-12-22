const Snowfall = () => {
    const [snowflakes, setSnowflakes] = React.useState([]);

    React.useEffect(() => {
        const createSnowflake = () => {
            const id = Math.random();
            const left = Math.random() * 100 + "vw";
            const animationDuration = Math.random() * 3 + 2 + "s";
            const opacity = Math.random();
            const size = Math.random() * 5 + 5 + "px"; // Size between 5px and 10px

            return { id, left, animationDuration, opacity, size };
        };

        const initialSnowflakes = Array.from({ length: 50 }).map(createSnowflake);
        setSnowflakes(initialSnowflakes);

        const interval = setInterval(() => {
            setSnowflakes(prev => {
                // Keep the array size roughly constant by replacing old flakes or adding new ones occasionally
                // For a simple CSS animation effect, we actually just need to render them once
                // and let CSS handle the looping found in our styles.
                // However, to make it random over time, we might want to periodically refresh them.
                // But for pure CSS animation keyframes, static rendering is often enough if the delays are randomized.

                // Let's actually just generate them once and let CSS loop infinite.
                return prev;
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
    };

    const flakeStyle = (flake) => ({
        position: 'absolute',
        top: '-10px',
        left: flake.left,
        width: flake.size,
        height: flake.size,
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: flake.opacity,
        animation: `fall ${flake.animationDuration} linear infinite`,
        filter: 'blur(1px)'

    });

    // We need to inject the keyframes into the document
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fall {
                0% {
                    transform: translateY(-10vh);
                }
                100% {
                    transform: translateY(105vh);
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        }
    }, []);

    return (
        <div style={styles}>
            {snowflakes.map(flake => (
                <div key={flake.id} style={flakeStyle(flake)} />
            ))}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('snow-root'));
root.render(<Snowfall />);
