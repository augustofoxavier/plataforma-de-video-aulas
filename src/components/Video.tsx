import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
// import '@vime/core/themes/default.css'

interface VideoProps{
    lessonSlug:string;
}
export function Video(props:VideoProps){
    const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY,{
        variables:{
            slug:props.lessonSlug,
        }})
        if(!data){
            return <div className="flex-1"> <p>Carregando...</p> </div>
        }
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center ">
                <div className="h-full w-full lg:max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player controls={true}>
                        <Youtube videoId={data.lesson.videoId}
                        key={data.lesson.videoId} />
                        {/* <DefaultUi/> */}
                    </Player>
                </div>
            </div>

            <div className=" p-8 max-w-[1100px] mx-auto">

            

            <div className="flex flex-col items-start gap-16 lg:flex-row ">
                {/* titulo e descrição da aula */}
                <div className="flex-1">
                    <h1 className="lg:text-2xl font-bold">
                        {data.lesson.title}
                    </h1>
                    <p className=" mt-4 text-gray-200 leading-relaxed text-sm lg:text-lg ">
                    {data.lesson.description}
                    </p>

                    <div className="flex items-center gap-4 mt-6 ">
                        <img className="rounded-full h-16 border boder-2 border-blue-500" src={data.lesson.teacher.avatarURL} alt="" />
                        <div className="leading-relaxed">
                        <strong className="font-bold sm:text-2xl block">
                        {data.lesson.teacher.name}
                        </strong>
                        <span className="text-gray-200 text-sm block">
                        {data.lesson.teacher.bio}
                        </span>
                    </div>

                    </div>
                    

                </div>
                <div className="flex flex-row lg:flex-col gap-4 justify-between ">
                    <a href="#" className=" p-4 text-sm bg-green-500 flex flex-row items-center rounded-sm font-bold upercase gap-2 justify-center hover:bg-green-700 transition-colors" >
                        <DiscordLogo size={24}/>
                        Comunidade do Discord
                    </a>
                    <a href="#" className=" p-4 text-sm border border-blue-500 text-blue-500 flex flex-row items-center rounded-sm   font-bold upercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors}" >
                        <Lightning size={24}/>
                        Acesse o desafio   
                    </a>

                </div>
                </div>

            

            <div className="gap-8 mt-20 lg:grid lg:grid-cols-2 ">
                {/* material complementa */}
                <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40}/>
                    </div>
                    <div className=" py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Material Complementar
                        </strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />

                    </div>
                </a>

                <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40}/>
                    </div>
                    <div className=" py-6 leading-relaxed">
                        <strong className="text-2xl">
                            Wallpapers exclusivos
                        </strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Baixe wallpapers exclusivos do Ingite Lab e personalize a sua máquina
                        </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />

                    </div>
                </a>
            </div>
            </div>
        </div>
    )
}