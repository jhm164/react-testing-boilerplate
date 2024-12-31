import React from 'react'

export default function Card2() {
  return (
    <div class="flex h-screen items-center justify-center bg-gray-500 align-middle">
    <div class="relative flex h-[350px] min-h-[450px] min-w-[280px] flex-col rounded-xl bg-white">
      <div class="flex min-h-[270px] flex-1 flex-col items-center justify-center rounded-t-xl bg-slate-100 p-5 pb-7">
        <img src="https://img.freepik.com/free-photo/portrait-beautiful-woman_144627-23207.jpg?t=st=1735623938~exp=1735627538~hmac=68720a6427711d4ce7330c0d147367a52a8426c6fafbd89d7c37acc059ff39d2&w=996" class="h-[150px] w-[150px] rounded-full object-cover" />
        <h2 class="mt-2 text-center text-lg font-bold">Leslie Walton</h2>
        <p class="pt-3 text-center text-sm text-gray-500">@leslie</p>
        <p class="text-md text-center text-[16px] text-gray-500">Product Designer</p>
      </div>
      <div class="flex flex-1 items-center justify-center pb-5 pt-5">
        <div class="flex w-1/3 flex-col items-center justify-center">
          <p class="font-bold">17</p>
          <p class="text-[12px] text-gray-400">SHOTS</p>
        </div>
        <div class="flex h-full w-1/3 flex-col items-center justify-center">
          <p class="font-bold">177</p>
          <p class="text-[12px] text-gray-400">FOLLOWING</p>
        </div>
        <div class="flex h-full w-1/3 flex-col items-center justify-center">
          <p class="font-bold">10</p>
          <p class="text-[12px] text-gray-400">FOLLOWERS</p>
        </div>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <button class="rounded-3xl bg-green-300 pb-2 pl-5 pr-5 pt-2 font-bold text-white">Send Message</button>
      </div>
  
      <div class="flex flex-1 items-center justify-center">
        <p class="text-sm text-gray-400">MORE</p>
      </div>
      <div class="absolute right-[-19px] top-1/3">
        <button class="text- flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-400 bg-center p-2 text-lg text-white shadow-2xl]">+</button>
      </div>
    </div>
  </div>
  
  )
}
