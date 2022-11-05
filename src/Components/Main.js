import React, { useEffect, useState } from 'react'
import List from './List';

function Main({ result, setResult }) {

    const [paper, setPaper] = useState([]);

    const groupBy = (items, key) => items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }),
        {},
    );

    useEffect(() => {
    }, [paper]);

    useEffect(() => {
        let data = [];
        Object.values(result).map((items, i) => {
            let key = Object.keys(result)[i];
            Object.values(items).map((item, i) => {
                data.push({
                    id: key,
                    item
                });
                data.sort((a, b) => (a.item.maxCount > b.item.maxCount) ? -1 : 1);
                return data;
            })
            return data;
        });

        data = groupBy(data, 'id');

        setPaper(data);
    }, [result]);

    return (
        <main className='col-span-9 h-full'>
            <div id="canvas" className='flex flex-col h-full'>

                {Object.keys(paper).map((key, i) => {
                    return (
                        <div key={i} className='flex flex-col'>
                            <h2 className='text-2xl font-semibold text-sky-600 text-center p-8 bg-sky-100'>{key}</h2>
                            <List paper={paper[key]} />
                        </div>
                    )
                })}

            </div>
        </main>
    )
}

export default Main