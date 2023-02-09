import React from 'react'
import Explore from '../components/Explore/Explore';
import Navbar from '../components/Navbar/Navbar';
import NewPost from '../components/NewPost';
import Posts from '../components/Posts/Posts';
import ProfileCard from '../components/ProfileCard';
import './styles.css';

function Home() {
    return (
        <div className='w-full flex flex-col items-start justify-center p-5 text-white'>
            <div className='w-full pb-5'>
                <Navbar></Navbar>
            </div>
            <div className='w-full h-screen flex flex-row space-x-5'>
                <ProfileCard></ProfileCard>
                <div className='w-full h-screen flex flex-col space-y-5'>
                    <NewPost></NewPost>
                    <Posts></Posts>

                </div>
                <Explore></Explore>
            </div>

        </div>
    )
}

export default Home