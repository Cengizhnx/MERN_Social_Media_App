import React from 'react'
import Avatar from '../assets/cd.jpg'

function ProfileCard() {
    return (
        <div className='w-2/3 h-2/4 flex flex-col justify-center bg-[#1a191f] rounded-xl'>
            <div className='w-full flex flex-row items-center px-8 justify-between h-1/4'>
                <div className='w-full flex flex-row items-center space-x-3'>
                    <img className='h-16 w-auto object-cover rounded-full' src={Avatar} alt="" />
                    <div className='space-y-1'>
                        <p className='text-sm font-medium text-gray-50 tracking-wider'>Cengizhan Durmuş</p>
                        <p className='text-xs font-medium text-gray-400 tracking-wider'>@cengizhnx</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
            </div>

            <hr className='mx-8 my-2 opacity-5 border-dashed rounded-full' />

            <div className='w-full flex flex-row items-center justify-center h-14'>
               <p className='text-sm font-medium text-zinc-400 tracking-wide'>"Lorem ipsum dolor sit amet consectetursaa."</p>
            </div>

            <hr className='mx-8 my-2 opacity-5 border-dashed rounded-full' />

            <div className='w-full flex flex-row items-center justify-center space-x-5 h-1/6'>
                <div className='flex flex-row justify-start items-center space-x-2 cursor-pointer'>
                    <div className='w-auto h-auto px-2 py-2 rounded-xl bg-[#111014]'>
                        <p className='text-sm font-medium text-gray-50 tracking-wider'>100</p>
                    </div>
                    <p className='text-sm font-medium text-zinc-300 tracking-wider' >Post</p>
                </div>
                <div className='flex flex-row justify-start items-center space-x-2 cursor-pointer'>
                    <div className='w-auto h-auto px-2 py-2 rounded-xl bg-[#111014]'>
                        <p className='text-sm font-medium text-gray-50 tracking-wider'>100</p>
                    </div>
                    <p className='text-sm font-medium text-zinc-300 tracking-wider' >Follower</p>
                </div>
                <div className='flex flex-row justify-start items-center space-x-2 cursor-pointer'>
                    <div className='w-auto h-auto px-2 py-2 rounded-xl bg-[#111014]'>
                        <p className='text-sm font-medium text-gray-50 tracking-wider'>100</p>
                    </div>
                    <p className='text-sm font-medium text-zinc-300 tracking-wider' >Follow</p>
                </div>
            </div>

            <hr className='mx-8 my-2 opacity-5 border-dashed rounded-full' />

            <div className='w-full flex flex-row items-center justify-center px-8 h-1/4'>
                <div className='w-1/2 flex flex-col items-center justify-center space-y-5 h-1/6'>
                    <div className='flex flex-row justify-start items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='text-sm font-medium text-zinc-400 tracking-wider'>İstanbul</p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                        </svg>

                        <p className='text-sm font-medium text-zinc-400 tracking-wider'>20 Eylül 1999</p>
                    </div>

                </div>
                <div className='w-1/2 flex flex-col items-center justify-center space-y-5 h-1/6'>
                    <div className='flex flex-row justify-start items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                        </svg>

                        <a href='https://twitter.com/Cengizhnx_' target="_blank" rel="noreferrer" className='text-sm font-medium text-zinc-400 tracking-wider hover:underline hover:text-white'>Web Page</a>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>

                        <p className='text-sm font-medium text-zinc-400 tracking-wider'>24 Temmuz joined</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileCard