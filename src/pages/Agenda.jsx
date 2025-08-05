import DiagonalBackground from "../components/DiagonalBackground"
import agenda from "../assets/Programacion-SIDES.png";

const AgendaPage = () => {
    return (
        <main>
            <DiagonalBackground />
            <div className="flex flex-col gap-[10dvh]">
                <section className="p-5 flex justify-center items-center">
                    <h1 className="font-bold text-3xl text-white text-center">Agenda</h1>
                </section>
                <section className="min-h-[10px] py-[40px] px-[10dvw] flex flex-col gap-[30px] items-center justify-center">
                    <img src={agenda} alt="Agenda SIDES" className="md:max-w-[60%]"/>
                </section>
            </div>
        </main>
    )
};

export default AgendaPage;