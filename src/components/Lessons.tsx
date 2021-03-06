import{CheckCircle, Lock} from 'phosphor-react'
import{isPast,format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
interface LessonsProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lessons(props:LessonsProps){
    const {slug} = useParams<{slug:string}>()
    const isLessonAvaible= isPast(props.availableAt);
    const availableAtFormatted = format(props.availableAt,"EEEE' • ' d' de 'MMMM' • 'k'h'mm" ,{locale:ptBR,})
    const inActiveLesson = slug == props.slug;
    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableAtFormatted}
            </span>
            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${inActiveLesson?'bg-green-500':''}`}>
                <header className="flex items-center justify-between">
                   {
                    isLessonAvaible ? (
                        <span className="text-sm text-blue-500 font-medium flex gap-2 items-center">
                        <CheckCircle size={20} />
                        Conteudo liberado
                    </span>
                    ):(
                        <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
                        <Lock size={20} />
                        Em breve
                    </span>
                    )
                   }
                    <span className=" text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                        {props.type== 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="tex-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}