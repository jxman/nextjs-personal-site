'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Lawn() {
  return (
    <>
      <Link href="/projects" className="btn btn-outline">
        Back to Projects
      </Link>
      <div className="relative w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <Image
            className="w-full"
            src="/images/lawn1.jpeg"
            alt="Lawn care transformation - image 1"
            width={1600}
            height={1200}
            unoptimized
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <Image
            className="w-full"
            src="/images/lawn2.jpeg"
            alt="Lawn care transformation - image 2"
            width={1600}
            height={1200}
            unoptimized
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <Image
            className="w-full"
            src="/images/lawn3.jpeg"
            alt="Lawn care transformation - image 3"
            width={1600}
            height={1200}
            unoptimized
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
