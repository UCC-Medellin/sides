import DiagonalBackground from "../components/DiagonalBackground"
import ImageSlider from "../components/ImageSlider";
import logoFacultad from "../assets/logo-ucc-facultad-ingenierias.png";

const imagesImport = import.meta.glob('../assets/ponentes/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});

const images = Object.values(imagesImport);

const ExpositoresPage = () => {
    return (
        <main>
            <DiagonalBackground />
            <div className="flex flex-col gap-[10dvh]">
                <section className="p-5 flex justify-center items-center">
                    <h1 className="font-bold text-3xl text-white text-center">Expositores</h1>
                </section>
                <section className="min-h-[10px] py-[10px] px-[10dvw] flex flex-col gap-[30px]">
                    <ImageSlider images={images} />
                </section>
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-center text-2xl font-bold text-[#7EB726]">Organiza e invita:</h2>
                    <img src={logoFacultad} alt="logo-ucc" className="md:w-1/3" />
                </div>
            </div>
        </main>
    )
};

export default ExpositoresPage;