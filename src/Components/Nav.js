import React, { useState } from 'react'

function Nav({ result, setResult }) {

    const API = "http://localhost/papercut-api/";
    const [spinner, setSpinner] = useState(false);

    const [staticEbat] = useState([
        '12.5x17.5',
        '14x20',
        '17.5x20',
        '17.5x25',
        '20.5x28.5',
        '20x23.3',
        '23.3x25',
        '22.5x32',
        '23.3x33.3',
        '25x35',
        '28.5x41',
        '30x40',
        '23.3x50',
        '32x45',
        '35x50',
        '33.3x70',
        '35x65',
        '41x57',
        '45x64',
        '50x70',
        '57x82',
        '64x90',
        '70x100',
        '33.3x35'
    ]);

    const [dynamic, setDynamic] = useState([]);
    const [paper, setPaper] = useState({
        w: 0,
        h: 0
    });

    const dynamicSelectHandler = (e) => {
        setDynamic([...e.target.selectedOptions].map((item) => {
            const split = item.value.split('x');
            return {
                w: parseFloat(split[0]),
                h: parseFloat(split[1])
            }
        }));
    }

    const resetHandler = (e) => {
        setDynamic([]);
    }

    const paperHandler = (e) => {
        let val = e.target.value.replace(',', '.');
        setPaper({
            ...paper,
            [e.target.name]: parseFloat(val)
        });
        if (val === '') {
            setPaper({
                ...paper,
                [e.target.name]: 0
            });
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if ((paper.w !== 0 && paper.h !== 0) && dynamic.length > 0) {
            setSpinner(true);
            const data = new FormData(e.target);

            await fetch(API, {
                method: 'POST',
                body: data,
            }).then(response => response.json())
                .then(data => {
                    setSpinner(false);
                    setResult(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } else {
            alert('Please fill all fields');
            setSpinner(false);
        }
    }

    return (
        <nav className='col-span-3 bg-gray-100'>
            <div className='px-8 py-8 flex flex-col h-screen gap-y-4 sticky top-0'>
                {!spinner && <form className='flex flex-col h-full' onSubmit={submitHandler}>
                    <div className='flex-1 flex flex-col mb-2'>
                        <h4 className='text-base font-semibold mb-2'>
                            Standart Boyutlar <small className='text-gray-400'>(<span className='cursor-pointer' onClick={resetHandler}>reset</span>)</small>
                        </h4>
                        <select name="tabaka[]" id="tabaka" className='w-full h-full form-multiselect' onChange={dynamicSelectHandler} multiple>
                            {staticEbat.map((x, y) => <option key={y}>{x}</option>)}
                        </select>
                    </div>
                    <div className='flex-initial flex flex-col'>
                        <h4 className='text-base font-semibold mb-2'>İş Bilgisi</h4>
                        <div className='flex w-full gap-2 mb-2'>
                            <input type="number" name="w" className='w-full form-input' onChange={paperHandler} placeholder='en' />
                            <input type="number" name="h" className='w-full form-input' onChange={paperHandler} placeholder='boy' />
                        </div>
                    </div>
                    <div className='flex-initial flex flex-col'>
                        <button className='light-btn'>
                            Hesapla
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </form>}
                {spinner && <div id="loading" className='h-full'>
                    <div className='flex justify-center items-center h-full'>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span className='text-gray-500'>Hesaplanıyor...</span>
                    </div>
                </div>}

            </div>
        </nav>
    )
}

export default Nav;