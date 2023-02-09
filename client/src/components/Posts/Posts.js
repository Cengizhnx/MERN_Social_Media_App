import React from 'react'
import Avatar from '../../assets/cd.jpg'

function Posts() {
    return (
        <div className='w-full h-screen flex flex-col space-y-5'>
            <div className='w-full p-4 bg-[#1a191f] rounded-xl flex flex-row items-start '>
                <img className='h-14 w-auto object-cover rounded-full' src={Avatar} alt="icon" />
                <div className='flex flex-col space-x-3 space-y-1'>
                    <div className='flex flex-row pl-3 space-x-1'>
                        <p className='text-sm font-semibold tracking-wider hover:underline hover:cursor-pointer'>Cengizhan Durmuş</p>
                        <p className='text-sm font-medium text-gray-400 tracking-wider hover:underline hover:cursor-pointer'>@cengizhnx</p>
                        <p className='text-sm font-medium text-gray-400 tracking-wider'>· 1 sa</p>
                    </div>

                    <p className='text-sm text-justify tracking-wide text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima, magni
                        ipsam sit deserunt perferendis maxime quo maiores laborum, cumque odit mollitia nesciunt
                        sequi iure distinctio alias voluptas nemo nam.</p>
                </div>
            </div>

            <div className='w-full p-4 bg-[#1a191f] rounded-xl flex flex-row items-start '>
                <img className='h-14 w-auto object-cover rounded-full' src={Avatar} alt="icon" />
                <div className='flex flex-col space-x-3 space-y-1'>
                    <div className='flex flex-row pl-3 space-x-1'>
                        <p className='text-sm font-semibold tracking-wider hover:underline hover:cursor-pointer'>Cengizhan Durmuş</p>
                        <p className='text-sm font-medium text-gray-400 tracking-wider hover:underline hover:cursor-pointer'>@cengizhnx</p>
                        <p className='text-sm font-medium text-gray-400 tracking-wider'>· 1 sa</p>
                    </div>

                    <p className='text-sm text-justify tracking-wide text-gray-300'>Başkanımız ve Kulüpler Birliği Vakfı Başkanı Ali Y. Koç: "Elimizden gelen her şeyi yapıyoruz ama yeterli değil. O yüzden özellikle devletimize ve bölgede yaşayanlara kuvvet, kudret diliyorum."
                        🔗 https://bit.ly/3RP5fC9
                    </p>
                    <img className='w-full pr-4 pt-2 rounded-xl' src="https://pbs.twimg.com/media/FojAhKvWAAMGtVP?format=png&name=large" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Posts