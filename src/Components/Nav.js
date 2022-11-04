import React, { useEffect, useState } from 'react'

function Nav() {
    const [ebat, setEbat] = useState([
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

    const [optionEbat, setOptionEbat] = useState([]);

    const handleChange = (e) => {
        let selected = [...e.target.selectedOptions].map(o => {
            return o.value;
        });
        setOptionEbat(selected);
    }

    useEffect(() => {
        if (optionEbat.length > 0) {
            console.log(optionEbat);
        }
    }, [optionEbat]);

    return (
        <nav className='col-span-3 bg-gray-100'>
            <div className='px-8 py-8 flex flex-col h-full gap-y-4'>
                <div className='flex-1 flex flex-col'>
                    <h4 className='text-base font-semibold mb-2'>
                        Kağıt Tabaka <small className='text-gray-400'>(en/boy)</small>
                    </h4>
                    <select name="kagit-tabaka" id="tabaka" className='w-full h-full form-multiselect' onChange={handleChange} multiple>
                        {ebat.map((x, y) => <option key={y}>{x}</option>)}
                    </select>
                </div>
                <div className='flex-initial flex flex-col'>
                    <h4 className='text-base font-semibold mb-2'>Özel Boyut Girin</h4>
                    <div className='flex w-full gap-2 mb-2'>
                        <input type="text" className='w-full form-input' placeholder='en' />
                        <input type="text" className='w-full form-input' placeholder='boy' />
                    </div>
                </div>
                <div className='flex-initial flex flex-col'>
                    <h4 className='text-base font-semibold mb-2'>İş Bilgisi</h4>
                    <div className='flex w-full gap-2 mb-2'>
                        <input type="text" className='w-full form-input' placeholder='en' />
                        <input type="text" className='w-full form-input' placeholder='boy' />
                    </div>
                </div>
                <div className='flex-initial flex flex-col'>
                    <button type='button' className='light-btn'>
                        Hesapla
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;