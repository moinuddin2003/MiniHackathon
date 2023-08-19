import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  const handlePostBlog = async () => {
      
      const newBlog = { title: blogTitle, body: blogBody };
      setPublishedBlogs([...publishedBlogs, newBlog]);

    
      setBlogTitle('');
      setBlogBody('');
  };
  return (
    <>
      <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4  m-5">
        <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/200/300"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 class="text-xl font-medium text-gray-900">
            Migrating to Sailboat UI
          </h3>
          <p class="mt-1 text-gray-500">
            Sailboat UI helps streamline software projects, sprints, tasks, and
            bug tracking.
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Design
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Product
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              Develop
            </span>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4  m-5">
        <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/200/300"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 class="text-xl font-medium text-gray-900"></h3>
          <p class="mt-1 text-gray-500"></p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Design
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Product
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              Develop
            </span>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4  m-5">
        <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/200/300"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 class="text-xl font-medium text-gray-900">
            Migrating to Sailboat UI
          </h3>
          <p class="mt-1 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum dui eget augue euismod. Nulla eget ante et ante
            sollicitudin feugiat.
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Design
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Product
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              Develop
            </span>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4  m-5">
        <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/200/300"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 class="text-xl font-medium text-gray-900">
            Migrating to Sailboat UI
          </h3>
          <p class="mt-1 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum dui eget augue euismod. Nulla eget ante et ante
            sollicitudin feugiat.
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Design
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Product
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              Develop
            </span>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4  m-5">
        <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://picsum.photos/200/300"
            class="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>18 Nov 2022</time>
          </p>
          <h3 class="text-xl font-medium text-gray-900">
            Migrating to Sailboat UI
          </h3>
          <p class="mt-1 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum dui eget augue euismod. Nulla eget ante et ante
            sollicitudin feugiat.
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Design
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Product
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
              Develop
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
