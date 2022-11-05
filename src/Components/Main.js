import React, { useEffect, useState } from 'react'

function Main({ result, setResult }) {

    const [paper, setPaper] = useState([]);

    useEffect(() => {
    }, [paper]);

    useEffect(() => {
        let data = [];
        Object.values(result).map((items, i) => {
            Object.values(items).map((item, i) => {
                data.push(item);
                return true;
            })
            return true;
        });

        data.sort((a, b) => {
            return a.maxCount > b.maxCount ? -1 : 1;
        });

        console.log(data);

        setPaper(data);
    }, [result]);

    function calculate(item) {
        let totalArea = item.paper.w * item.paper.h;
        let paperArea = item.area.w * item.area.h;
        let percent = 100 - (totalArea / paperArea * 100) + "%";
        return percent;
    }
    return (
        <main className='col-span-9 h-full'>
            <div id="canvas" className='flex flex-col h-full'>
                {paper.map((item, i) => {
                    let fire = calculate(item);
                    return (
                        <div key={i} className="flex flex-col bg-gray-50 p-8 flex-1 justify-start border-b">
                            <div className='flex gap-2 [&>span]:bg-blue-100 [&>span]:rounded [&>span]:p-2 [&>span]:text-xs [&>span]:font-semibold'>
                                <span>Maximum : {item.maxCount}</span>
                                <span>Area : {item.area.w} x {item.area.h}</span>
                                <span>Paper : {item.paper.w} x {item.paper.h}</span>
                                {item.usedPercent !== 0 ? <span className={`!bg-green-200`}>Used : {item.usedPercent}%</span> : null}
                                {item.wastePercent !== 0 ? <span className={`!bg-red-200`}>Waste : {item.wastePercent}%</span> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Main