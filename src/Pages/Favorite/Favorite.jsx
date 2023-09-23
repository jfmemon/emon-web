import React from 'react'

export const Favorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return (
        <div className='m-5'>
            <h2 className='text-center text-2xl font-bold text-red-500'>Favorite Blogs</h2>
            <ul className='gap-3'>
                {favorites.map((favorite, index) => (
                    <li key={index} className='border-2 m-3 p-3'>
                        <h3><span className='font-bold text-red-500'>Title:</span> {favorite.title}</h3>
                        <p><span className='font-bold text-red-500'>Body:</span> {favorite.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
