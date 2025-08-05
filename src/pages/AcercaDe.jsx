import DiagonalBackground from "../components/DiagonalBackground";
import logoFacultad from "../assets/logo-ucc-facultad-ingenierias.png";

const AcercaDePage = () => {
    return (
        <main>
            <DiagonalBackground />
            <div className="flex flex-col gap-[10dvh]">
                <section className="p-5 flex justify-center items-center">
                    <h1 className="font-bold text-3xl text-white text-center">SIDES 2025</h1>
                </section>
                <section className="min-h-[10px] py-[40px] px-[10dvw] flex flex-col gap-[30px]">
                    <div className="bg-[rgba(204,202,202,0.60)] rounded-xl flex flex-col justify-center items-center py-4 px-[8dvw] gap-4">
                        <h2 className="font-bold text-2xl text-center text-[#162D3C]">Presentación</h2>
                        <p className="text-center font-semibold">Bienvenidos a SIDES (Seminario de Ingeniería y Desarrollo de Software), el segundo evento organizado por estudiantes y la coordinación de Ingeniería de software de la Facultad de ingeniería de la Universidad Cooperativa de Colombia Seccional Medellín. SIDES presenta temas fundamentales y de total interés para los estudiantes, profesionales y comunidad en general, interesadas en las actividades, competencias y retos de la Ingeniería de software; sobre una mirada al futuro y las posibles áreas de especialización como: bases de datos, la inteligencia artificial, seguridad informática, entre otros. También se brindarán charlas con expertos en áreas temáticas afines a la ingeniería de software que serán como insumo para el desarrollo personal, profesional y social de los asistentes.</p>
                    </div>
                    <div className="bg-[rgba(204,202,202,0.60)] rounded-xl flex flex-col justify-center items-center py-4 px-[8dvw] gap-4">
                        <h2 className="font-bold text-2xl text-center text-[#162D3C]">Objetivo</h2>
                        <p className="text-center font-semibold">Con este evento se busca que todos los participantes puedan aprender y actualizarse sobre las tendencias en ingeniería de software captando su atención, de manera que más personas logren adentrarse en este mundo, dónde el pensamiento lógico y la tecnología están totalmente inmersas en el mundo actual con el fin de ayudar a la sociedad a través del conocimiento para un futuro más próspero, donde la tecnología y el aprendizaje vayan de la mano y estén al alcance de todas las personas. Finalmente, con este seminario se busca que todos aquellos participantes aprecien las experiencias desde el mundo laboral y profesional en el ámbito del software, mostrando por qué se necesitan más ingenieros para nuestro desarrollo global y social.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-center text-2xl font-bold text-[#7EB726]">Organiza e invita:</h2>
                        <img src={logoFacultad} alt="logo-ucc" className="md:w-1/3" />
                        <p className="text-center text-2xl">
                            Fecha: Miércoles, Jueves y Viernes 13, 14 y 15 de agosto de 2025<br />
                            Lugar: Universidad Cooperativa de Colombia<br />
                            Bloque 1, Piso 8 - Aulas Múltiples 805 - 807
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
};

export default AcercaDePage;