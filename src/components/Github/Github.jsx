// import React from 'react'
// import { useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'

import React from 'react'
import { Link } from 'react-router-dom';

function Github() {
    const redirectToGitHub = () => {
        window.open('https://github.com/ImRahul0014', '_blank');
    };
    return (
        <div className=' bg-slate-300'>
            <div className=' flex flex-wrap justify-center '>
                <button className=' bg-slate-900 text-white p-5 font-semibold rounded-xl m-20'
                    onClick={redirectToGitHub}
                >Github</button>
            </div>
        </div>
    )
}

export default Github




// function Github() {

//     const data = useLoaderData()
//     return (
//         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//             <img src={data.avatar_url} width={300} alt="" />
//         </div>
//     )
// }

// export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

