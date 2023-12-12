import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import data from '@/data/projects.json';
import { Inter } from 'next/font/google';
import LoadingSpinner from '../components/LoadingSpinner';
import { FC, useState } from 'react';

const Home: FC = () => {
  const projects = data;
  if(!projects) return <LoadingSpinner/>;
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Home | Rick Cruz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-gradient-to-t from-slate-700 to-slate-800 text-gray-100 p-6">
                <h1 className="text-3xl font-semibold">Rick Cruz, Master of Science in Computer Science</h1>
                <p className="text-2xl">Software Engineer | Full-Stack Developer</p>
            </header>

            <nav className="bg-gradient-to-t from-slate-600 to-slate-700 text-lg text-white p-4 flex justify-center space-x-4 scroll-smooth">
                <Link href="/#about" className="hover:underline">About</Link>
                <Link href="/#portfolio" className="hover:underline">Portfolio</Link>
                <Link href="/#contact" className="hover:underline">Contact</Link>
            </nav>

            <main className="flex-grow p-8 bg-stone-200">

                <section id="about" className="my-6">
                  <h2 className="text-2xl text-gray-950 font-semibold mb-2">About Me</h2>
                  <div className="py-2 grid grid-col-2 justify-items-center md:flex md:items-start ">
                  <Image src="/headshot.png" width={150} height={200} alt="headshot image" className="flex object-contain border-2 border-slate-600 rounded-3xl mb-4 md:mr-4" />
                  <p>
                    I am a Software Engineer with a Master of Science in Computer Science from Portland State University. I bring a rich blend of technical knowledge and hands-on experience. Proficient in C/C++, Python, Java, JavaScript, and SQL, I excel in creating creating practical and efficient software solutions. I have developed a strong foundation in using frameworks like React and technologies such as OpenCV and TensorFlow through project-based learning. I pride myself on my ability to adapt to new technologies and methodologies to stay at the forefront of software development.

                    <br/><br/>
                    I have demonstrated ability to conduct extensive research, analyze data, and apply statistical techniques to identify trends and make accurate predictions. With my strong experience in implementing complex models, presenting findings to stakeholders, and showcasing the potential value of projects I am passionate about leveraging technology to drive innovation and deliver impactful solutions.
                  </p>
                  </div>
                </section>

                <section id="portfolio" className="my-8">
                  <h2 className="text-2xl text-gray-950 font-semibold mb-4">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects?.map((project:Project, index) => (
                    <div className="lg:p-1 p-1" key={index}>
                      <div className="flex flex-col justify-center items-center">
                      <Image src={project.image} alt={project.name} width={100} height={100} className="object-cover h-24 w-24 border-2 rounded-xl border-slate-600 "/>
                      <h3 className="my-1 text-lg font-semibold">{project.name}</h3>
                      </div>
                    <p className="mt-1 text-center md:h-48 lg:h-72 xl:h-56 2xl:h-48 ">{project.description}</p>
                    <div className="lg:my-2 md:my-4 my-8 text-center"><Link href={project.url} 
                    className="bg-teal-800 text-white py-2 px-4 rounded-2xl hover:bg-teal-900">
                      View
                    </Link>
                    </div>
                    </div>
                      ))}
                  </div>
                </section>
                <section id="contact" className="my-8">
                    <h2 className="text-2xl text-gray-950 font-semibold mb-4">Contact</h2>
                <p>Connect with me on <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} className="hover:underline font-semibold text-blue-700">LinkedIn</Link>, <Link  href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} className="hover:underline font-semibold text-blue-700">GitHub</Link> or <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "example@example.com"}`} className="hover:underline font-semibold text-blue-700">Email</Link>
                </p>
                </section>
            </main>

            <footer className="bg-gradient-to-t from-slate-900 to-slate-600 text-white p-6 text-center">
                <p>© 2023 Rick Cruz. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
