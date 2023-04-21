import React from 'react'

const whoami = () => {
  return (
    <div className='py-20 flex flex-col gap-6 w-full text-gray-400 justify-start'>

    <h2 className='text-4xl font-bold'> whoami 🧑🏼‍💻 </h2>

    <h4 className='text-2xl font-semibold mt-4'>Hi there, I’m Sashwin - aka 0xp4tcher 👋</h4>

    <p className='text-lg '>I'm a Security Researcher by day and Hacktivist by night. As a Hacktivist, I work anonymously to promote political or social change by breaking into computer systems or websites.

My strong interest lies in the areas of Offensive Security, Web Security and Computer Security, Which makes me a passionate Security enthusiast.</p> <hr className='opacity-30' />

<h2 className='text-3xl font-bold'> Certification Badges 🎓</h2>
<ul className='list-disc px-5 text-lg'>
  <li>Networking Essentials</li>
  <li>Cybersecurity Essentials</li>
  <li>Certified in Cybersecurity (ISC)²</li>
</ul>
    </div>
  )
}

export default whoami