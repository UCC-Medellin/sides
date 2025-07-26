import DiagonalBackground from "../components/DiagonalBackground"
import sideImage from "../assets/side-image.svg"
import logoFacultad from "../assets/logo-ucc-facultad-ingenierias.png";

const HomePage = () => {
    return (
        <main>
            <DiagonalBackground isMain={true} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:py-[40px]">
                <div className="px-[10dvw] md:col-span-2">
                    <div className="flex flex-col justify-center h-[45dvh] md:h-[45dvh]">
                        <h1 className="font-extrabold text-white text-3xl md:text-3xl lg:text-4xl">Seminario de Ingeniería y Desarrollo de Software<br />Evento Presencial</h1>
                        <h2 className="font-bold text-white text-xl lg:text-2xl">Agosto 13, 14 y 15 </h2>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p>Este segundo semestre de 2025, en el Seminario de Ingeniería y Desarrollo de Software, Prepárate para vivir una edición cargada de energía, con paneles y ponencias sobre los temas más actuales del mundo tecnológico.</p>
                        <p>Y este año traemos una gran novedad: ¡celebraremos por primera vez el Día del profesional de la ingeniería! Un espacio especial con charlas inspiradoras, casos reales y debates sobre los desafíos y oportunidades que hoy marcan la ingeniería.</p>
                        <a className="bg-[#162D3C] hover:bg-[#80AF38] transition-all text-white w-fit px-6 py-2 rounded-full" href="https://google.com" target="_blank">Inscribete</a>
                        <img src={logoFacultad} alt="logo-ucc" className="max-w-[475px]"/>
                    </div>
                </div>
                <img src={sideImage} className="hidden md:block md:self-center" alt="side-image" />
            </div>
        </main>
    )
};

export default HomePage;