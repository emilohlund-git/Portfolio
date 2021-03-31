import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ChatRoom from '../components/ChatRoom';
import { GA_TRACKING_ID } from '../lib/gtag';

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <>
      <Head>
        <title>Emil Öhlund</title>
        <link rel='shortcut icon' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
        <link rel='manifest' href='/site.webmanifest'></link>
        <meta name='theme-color' content='#B36185' />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta
          name='Description'
          content='Home of Emil Öhlund, Fullstack Developer.'
        ></meta>
      </Head>
      <ChatRoom></ChatRoom>
      <div className='relative w-full flex flex-wrap content-center justify-center mt-20'>
        <Image
          className={
            hovered ? 'rounded-full cursor-pointer z-10' : 'rounded-full z-10'
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          src={hovered ? '/GitHub-Mark-Light-120px-plus.png' : '/me.jpg'}
          alt='Picture of Emil'
          width={200}
          height={200}
        />{' '}
      </div>
      <h1 className='font-sans text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-l from-pink-200 to-pink-900 mb-5 mt-5'>
        Emil Öhlund
      </h1>
      <p className='font-sans text-2xl text-center text-white'>
        Fullstack Developer
      </p>
      <div className='text-center flex flex-wrap content-center justify-center text-pink-200'>
        <p>
          React{' '}
          <span className='mr-1 ml-1 bg-clip-text text-transparent bg-gradient-to-l from-pink-200 to-pink-900'>
            |
          </span>{' '}
          Next.js{' '}
          <span className='mr-1 ml-1 bg-clip-text text-transparent bg-gradient-to-l from-pink-200 to-pink-900'>
            |
          </span>{' '}
          GraphQL{' '}
          <span className='mr-1 ml-1 bg-clip-text text-transparent bg-gradient-to-l from-pink-200 to-pink-900'>
            |
          </span>{' '}
          PostgreSQL{' '}
          <span className='mr-1 ml-1 bg-clip-text text-transparent bg-gradient-to-l from-pink-200 to-pink-900'>
            |
          </span>{' '}
          TypeScript
        </p>
      </div>
      <div className='w-full flex flex-wrap flex-col content-center justify-center text-white text-justify'>
        <p className='max-w-md mt-10 text-lg'>
          I'm Emil, I'm mostly occupying myself with{' '}
          <strong>backend development</strong>, I've listed my current go-to
          stack above. I also have a big interest in design, which is something
          I've been doing for as long as I can remember. I'm educated, but also
          a self-taught <strong>Fullstack Developer</strong>.
        </p>
        <div className='technologies mb-20 mt-20'>
          <h1 className='font-sans text-4xl text-center font-bold mb-2'>
            Technologies
          </h1>
          <p className='max-w-md mt-10 text-lg'>
            I use <strong>VSCode</strong> as my text editor of choice. Right now
            I primarily code in <strong>TypeScript</strong> using{' '}
            <strong>React</strong> / <strong>Next.js</strong>. I've recently
            gotten into <strong>Apollo</strong> and <strong>GraphQL</strong> for
            fetching queries from my databases, <strong>PostgreSQL</strong>.
            Using <strong>Express</strong> as middleware.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            For some applications, I'm using <strong>Python</strong> with{' '}
            <strong>Django</strong> as the framework of choice. I am however
            always trying new technologies, I feel it's very important to be
            versatile. I've also programmed quite a bit in <strong>Java</strong>
            , for desktop applications.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            When it comes to design I'm always using <strong>Adobe XD</strong>{' '}
            for wireframing / prototyping. Together with{' '}
            <strong>Adobe Illustrator</strong> and{' '}
            <strong>Adobe Photoshop</strong>. To bring my wireframes to life I'm
            more often than not doing it with <strong>Sass</strong>, cause I
            enjoy the OOP way. I've recently gotten into{' '}
            <strong>TailwindCSS</strong> though, and it might be a keeper.
          </p>
        </div>
        <div className='background mb-20 mt-20'>
          <h1 className='font-sans text-4xl text-center font-bold mb-2'>
            Background
          </h1>
          <p className='max-w-md mt-10 text-lg'>
            It's been in my interest to code, animate, and design since I was
            around 9-10 years old. I was hanging around on forums every day
            animating stick figures in <strong>Adobe Flash</strong> and creating{' '}
            <strong>HTML</strong> pages that were completely mock-up. After a
            while, I realized you could code in Flash and I started to learn{' '}
            <strong>ActionScript</strong>, which was my gateway into
            programming.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            Of course, back then I was just making 'games', and coding menus for
            my animations. Then I started making websites using Flash, which was
            quite short-lived for obvious reasons. Flash was losing popularity
            and it was looking dark for the software, which made me look for
            alternatives.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            I started messing around more and more with <strong>HTML</strong>{' '}
            and <strong>CSS</strong>. I ended up using{' '}
            <strong>Adobe Dreamweaver</strong> which was awesome, I could see
            what I was creating in 'real-time'! After that things happened and I
            forgot about coding and development for a while.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            A couple of years later, probably around 7 or 8. I picked up my
            interests in programming and designing once again, this time with a
            more serious approach. I started developing software in{' '}
            <strong>Java</strong>, mostly a program for the steel tubes industry
            that would calculate costs and margins for their sales. At the same
            time, I started studying at <strong>Code Institute</strong> as a{' '}
            <strong>Fullstack Developer</strong>. Where I picked up my{' '}
            <strong>Python</strong> and <strong>Django</strong> skills. I also
            took a <strong>Java</strong> course which lasted a couple of months
            to keep myself updated.
          </p>
          <p className='max-w-md mt-10 text-lg'>
            Most recently I have been spending all my spare time focusing on the
            current stack I mentioned above, making APIs, authentication
            applications, custom dashboards for{' '}
            <strong>Google Analytics</strong> using their reporting API. And
            that's where I am today!
          </p>
        </div>
        <div className='education mb-20 mt-20'>
          <h1 className='font-sans text-4xl text-center font-bold mb-10'>
            Education
          </h1>
          <Image
            className='mt-10'
            alt='Diploma from Code Institute'
            src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/21613261'
            width={450}
            height={650}
          ></Image>
        </div>
        <footer className='mb-20 mt-20'>
          <div className='text-center mt-5'>
            <span>
              <a className='uppercase' href='#'>
                Contact
              </a>
              <span className='mr-2 ml-2'>|</span>
              <a className='uppercase' href='#'>
                Blog
              </a>
              <span className='mr-2 ml-2'>|</span>
              <a className='uppercase' href='#'>
                Projects
              </a>
            </span>
          </div>
          <div className='mt-10 text-center'>
            <a href='#' className='text-5xl cursor-pointer'>
              &#9757;
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
