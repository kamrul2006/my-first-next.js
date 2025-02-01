import Link from "next/link"

export default async function page({ params }) {

    let param = await params

    const getPosts = async (params) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
        const data = res.json()
        return data
    }

    const post = await getPosts()

    return (
        <div className="p-10 bg-gray-100  min-h-screen">
            <p>Single Post</p>

            <div className='p-5 border rounded border-black bg-white'>

                <p className='text-center py-2 bg-slate-400'>User id: {post.userId}</p>

                <p> post id: {post.id}</p>

                <p className='text-xs text-gray-500 mt-4'>
                    {post.title}
                </p>
                <p>{post.body}</p>

                <Link href={'/Posts'} className="block  p-1  duration-300 border w-fit hover:text-gray-200 hover:bg-black my-4">
                    <button>
                        Go Back
                    </button>
                </Link>

            </div>

        </div>
    );
};

