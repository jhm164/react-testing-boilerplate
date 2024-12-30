import React from 'react'

export default function CardShouse() {
  return (
    <div class="flex h-screen w-screen items-center justify-center bg-pink-100">
  <div class="flex h-2/5 w-3/5 overflow-hidden rounded-md bg-white p-4">
    <div class="flex w-6/12 flex-col justify-between p-2">
      <div class="bg-slate-900">
        <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/p/4/-original-imagmuc8mfwfszr2.jpeg?q=70&crop=false" />
      </div>
      <div class="flex flex-col">
        <p class="mb-2 text-xs font-medium text-pink-400">CHOOSE SIZE</p>
        <div class="flex gap-1">
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">5</button>
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">6</button>
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">7</button>
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">8</button>
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">9</button>
          <button class="h-9 w-10 rounded-sm border border-pink-400 text-pink-400">10</button>
        </div>
      </div>
    </div>
    <div class="flex w-6/12 flex-col justify-between  p-2">
      <div class="flex flex-col">
        <h5 class="mb-2 text-xs font-medium text-pink-400">WOMEN'S RUNNING SHOE</h5>
        <h2 class="font-bold leading-tight text-2xl">NIKE EPIC REACT <br />FLYKNIT</h2>
        <h1 class="font-bold text-pink-400 text-3xl mt-2">$150</h1>
        <p class="text-gray-600 mt-3">
          The Nike Epic React Flyknit foam cushioning is responsive Nike Epic React Flyknit
          foam cushioning is responsive Nike Epic React Flyknit foam cushioning is responsive
        </p>
      </div>
      <div class="mt-auto flex gap-1">
        <button class="h-9 w-9/12 rounded-sm bg-pink-400 text-white">ADD TO CART</button>
        <button class="h-9 w-2/12 rounded-sm bg-pink-400 text-white">&#11206;</button>
      </div>
    </div>
  </div>
</div>

  
  )
}
