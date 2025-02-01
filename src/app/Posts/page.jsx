import Link from 'next/link';
import React from 'react';


const getPosts = async (params) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json()
    return data
}

export default async function Posts(params) {

    const posts = await getPosts()
    // console.log(posts)

    return (
        <div className='p-10 bg-gray-200'>

            <div className='grid grid-cols-5 gap-5'>

                {
                    posts.map((post, i) => <div key={i}
                        className='p-5 border rounded border-black bg-white'>

                        <p className='text-center py-2 bg-slate-400'>User id: {post.userId}</p>

                        <p className='text-xs text-gray-500 mt-4 h-[60px]'>
                            {post.title}
                        </p>

                        <Link href={`/Posts/${post.id}`} className="block  p-1 translate-x-24 translate-y-5 duration-300 border w-fit hover:text-gray-200 hover:bg-black mb-4">
                            <button>
                                view post
                            </button>
                        </Link>

                    </div>)
                }
            </div>
        </div>
    );
}

