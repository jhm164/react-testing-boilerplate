import React from 'react'

export default function Card3() {
  return (
    <div class="flex h-screen items-center justify-center gap-6 bg-gradient-to-bl from-pink-500 via-orange-400 to-orange-500 sm:flex-col">
  <div class="flex min-h-[350px] w-[300px] md:min-h-[350px] md:w-[300px] flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-2xl relative">
    <div class="flex h-[100px] justify-center sm:h-full"><img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" class="md:absolute sm:relative sm:top-0  md:top-[-120px] h-[230px] w-[220px] rounded-3xl object-cover shadow-2xl" /></div>
    <h2 class="text-lg font-bold text-gray-700">Alina Smith</h2>
    <p class="text-sm text-gray-400">Product Designer UI/UX</p>
    <div class="mt-5 flex w-full flex-row">
      <div class="flex w-1/3 flex-col items-center justify-center">
        <h3 class="font-bold">324</h3>
        <p>Posts</p>
      </div>
      <div class="flex w-1/3 flex-col items-center justify-center">
        <h3 class="font-bold">500k</h3>
        <p>Followers</p>
      </div>
      <div class="flex w-1/3 flex-col items-center justify-center">
        <h3 class="font-bold">30</h3>
        <p>Following</p>
      </div>
    </div>
    <div class="mt-5 flex w-full justify-center gap-5">
      <button class="rounded-md bg-pink-500 pb-2 pl-6 pr-6 pt-2 font-semibold text-white">Follow</button>
      <button class="rounded-md bg-gray-500 pb-2 pl-6 pr-6 pt-2 font-semibold text-white">Message</button>
    </div>
  </div>

    
</div>

  )
}
