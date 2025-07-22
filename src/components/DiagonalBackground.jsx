import './DiagonalBackground.css'
import {radialGreenGradient} from '../utils/gradients';

const DiagonalBackground = () => {
    return (
        <section
            className="w-[100dvw] h-[100dvh] absolute top-0 right-0 z-[-100] clip-diagonal"
            style={{ background: radialGreenGradient }}
        >
        </section>
    );
};

export default DiagonalBackground;