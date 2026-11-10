
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import {CardHome} from "../../components/CardHome";

export default function Home(){
    return(
        <>
            <div className="flex">
                <Sidebar/>
            </div>
            <div className="flex">
                <Topbar/>
            </div>

            {/* Conteúdo Principal */}
            <main className="flex-1 ml-[22%] mr-9 my-7 p-7 h-full bg-ceu rounded-2xl ">
                <div>
                    <p className="text-lg font-semibold text-marinho">Bom dia, Milena Mattos!</p>
                    <h2 className="text-2xl font-bold text-white">Tudo Conectado, do seu jeito.</h2>
                    <p className="text-white font-sm/6">Você tem <span className="font-semibold"> 1 consulta esta semana e 3 resultados</span> de exames disponíveis.</p>
                    <div className="flex gap-4">
                        <button className=" flex items-center !rounded-lg gap-3 bg-white text-bic font-semibold py-2 px-4 mt-2 rounded-full">
                            {/*Tem que arredonadar direito esse botão!!!*/}
                            <i className="bi bi-calendar-plus"></i>
                            Agendar Consulta
                        </button>   
                        <button className=" flex items-center !rounded-lg gap-3 bg-baby text-white font-semibold py-2 px-4 mt-2 border border-dashed border-gray4  ">
                            <i className="bi bi-people font-bold"></i>
                            {/*Tem que descobrir como deixa o icone gordinho*/}
                            Fila Online   
                        </button> 
                    </div> 
                </div>            
                
            </main>

            {/*Agoras os cards*/}
            <div className="flex">
                <CardHome text="Consultas" number={3} icon="bi bi-calendar-check"/>
                <CardHome text="Exames" number={5} icon="bi bi-file-earmark-medical"/>
                <CardHome text="Mensagens" number={2} icon="bi bi-chat-dots"/>
                <CardHome text="Mensagens" number={2} icon="bi bi-chat-dots"/>
            </div>
            
        </>
    );
}