import { linearGreenGradient } from "../utils/gradients";

const ORGANIZADORES = [
    {
        nombre: "Adriana Paredes Salinas",
        profesion: "Experta ciberseguridad",
        cargo: "Docente tiempo completo",
        correo: "adriana.paredess@campusucc.edu.co",
    },{
        nombre: "David Pulgarín Velásquez",
        profesion: "Diseñador UX/UI",
        cargo: "Coordinador ingeniería de software",
        correo: "david.pulgarinv@campusucc.edu.co",
    },{
        nombre: "Juan Sebastián Rios Valencia",
        profesion: "Desarrollador Full-Stack",
        cargo: "Estudiante",
        correo: "juan.riosva@campusucc.edu.co",
    },
]

const CardOrganizador = ({nombre, profesion, cargo, correo}) => {
    return (
        <div className="flex flex-col flex-wrap justify-around items-center w-full lg:w-1/3 gap-[20px] p-2 text-center">
            <div className="flex flex-col items-center">
                <h4 className="font-medium text-[24px]">{nombre}</h4>
                <h5 className="text-[20px]">{profesion}</h5>
            </div>
            {/* <div className="flex flex-col items-center">
                <p className="text-[16px] italic">Facultad de ingeniería</p>
            </div> */}
            <div className="flex flex-col items-center text-[16px]">
                <p className="font-medium">{cargo}</p>
                <p>Correo de contacto:</p>
                <a className="underline" href={`mailto:${correo}`} target="_blank">{correo}</a>
            </div>
        </div>
    )
}

const Footer = ()=>{
    return (
    <footer 
        className="m-4 bg-blue-500 box-border px-2 py-4 gap-[20px] rounded-md" 
        style={{background: linearGreenGradient}}
    >
        <h3 className="text-[36px] text-center font-semibold">Organiza e invita:</h3>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-[20px] min-h-[200px]">
            {ORGANIZADORES.map(({nombre, profesion, cargo, correo}, index)=>{
                return (
                    <>
                    <CardOrganizador nombre={nombre} profesion={profesion} cargo={cargo} correo={correo}  />
                    {(index !== ORGANIZADORES.length-1) ? <hr className="w-[80%] h-[1px] lg:w-[1px] lg:min-h-[150px] bg-black border-0 self-center" /> : <></>}
                    </>
                )
            })}
        </div>
    </footer>
    );
}

export default Footer;