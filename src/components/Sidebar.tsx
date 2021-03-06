import { Lessons } from "./Lessons";
import { gql, useQuery} from '@apollo/client'
const GET_LESSONS_QUERY = gql`
{
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    availableAt
    lessonType
    slug
    title
  }
}
`
interface GetLessonsQueryResponse{
    lessons:{
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: 'live' | 'class';
    }[]
}

export function Sidebar(){
    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    return (
        <aside className="lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronogama de aulas
            </span>
            <div className="flex flex-col gap-8">
                {
                    data?.lessons.map(lessons=>{
                        return(
                        <Lessons
                        key={lessons.id}
                        title={lessons.title}
                        slug={lessons.slug}
                        availableAt={new Date(lessons.availableAt)}
                        type ={lessons.lessonType}
                        />
                        )
                    })
                }
            </div>
        </aside>
    )
}