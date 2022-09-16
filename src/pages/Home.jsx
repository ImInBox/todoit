import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import { RiStarFill } from 'react-icons/ri'

function HomePage() {
    const starItems = [
        {
            id: 0,
            title: "todo1",
            todo: ["task1", "task2", "task3"],
        },
        {
            id: 1,
            title: "todo2",
            todo: ["task4", "task5", "task6"],
        },
    ];

    return (
        <Background className="flex">
            <Sidebar />
            <div className="h-full w-full flex p-[83px]">
                <div className="h-full w-full flex bg-white rounded-lg pt-[20px] pl-[20px] pb-[20px]">
                    {starItems.map((starItems, index) => (
                        <div key={index} className="h-full w-full font-dmMono bg-gray-50 rounded-lg mr-[20px]">
                            <div>
                                <div className="flex items-center bg-gray-100 rounded-t-lg">
                                    <h2 className="text-[30px] ml-4 font-extrabold text-">{starItems.title}</h2>
                                    <div className="w-full flex flex-row-reverse pr-4">
                                        <RiStarFill size={30} color="gold" />
                                    </div>
                                </div>
                                <ul>
                                    {starItems.todo.map((todo, index) => (
                                        <li className="mt-[4px] text-[20px] h-[20px]" key={index}>
                                            <label className="flex">
                                                <input type="checkbox" className="ml-2 checked:before:scale-100 before:scale-0 before:bg-black before:w-[12px] before:h-[12px] grid place-content-center appearance-none rounded translate-y-[6px] h-[20px] w-[20px] border-2 font-bold border-black" />
                                                <p className="ml-2">{todo}</p>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <div className={`mt-2 flex opacity-0`}>
                                    Done:
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Background>
    )
}

export default HomePage;
