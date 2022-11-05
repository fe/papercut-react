import React from 'react'

function List({ paper }) {
    return (
        paper.map((data, i) => {
            return (
                <div key={i} className="flex flex-row bg-gray-50 flex-1 justify-start last:border-b group">
                    <div className='h-full flex items-center bg-sky-100 text-sky-600 w-12 justify-center font-bold'>
                        {i + 1}
                    </div>
                    <div className='flex flex-col p-8 border-b w-full group-last:border-b-0'>
                        <div className='flex gap-2 [&>span]:bg-blue-100 [&>span]:rounded [&>span]:p-2 [&>span]:text-xs [&>span]:font-semibold'>
                            <span>Maximum : {data.item.maxCount}</span>
                            <span>Area : {data.item.area.w} x {data.item.area.h}</span>
                            <span>Paper : {data.item.paper.w} x {data.item.paper.h}</span>
                            {data.item.usedPercent !== 0 ? <span className={`!bg-green-200`}>Used : {data.item.usedPercent}%</span> : null}
                            {data.item.wastePercent !== 0 ? <span className={`!bg-red-200`}>Waste : {data.item.wastePercent}%</span> : null}
                        </div>
                        <canvas className='w-32 h-32'></canvas>
                    </div>
                </div>
            )
        })
    )
}

export default List;