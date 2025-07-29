// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
import React from 'react';

function Infinite() {
  return (
    <>
      <div className='w-[50vw] text-5xl py-1 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-7 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-6 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
          </li>
        </ul>
        <ul
          className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'
          aria-hidden='true'
        >
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-7 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-6 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
          </li>
          <li>
            <img className="h-4 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
          </li>
          <li>
            <img className="h-5 w-fit brightness-0 invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
          </li>
        </ul>
      </div>


    </>
  );
}

export default Infinite;