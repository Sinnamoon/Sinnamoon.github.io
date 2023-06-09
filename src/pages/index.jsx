/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoFrFlag from '@/images/logos/Flag-of-France.svg'
import logoUkFlag from '@/images/logos/Flag-of-the-United-Kingdom.svg'
import logoHenriTrip from '@/images/logos/henri-trip.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoYnovCampus from '@/images/logos/ynov-campus.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import printer from '@/images/photos/3d-printer.jpg'
import modelLighter from '@/images/photos/model-lighter.jpg'
import lighter from '@/images/photos/lighter.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image5 from '@/images/photos/image-5.jpg'
import yaya from '@/images/photos/yaya.gif'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import React from 'react'
import { CircleFlag } from 'react-circle-flags'
import { useState } from 'react'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function DownloadCV() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ArrowDownIcon className="h-6 w-6 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        <span className="ml-3">Download my CV</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Dowload the latest version of my CV in French or English (PDF format)
      </p>
      <div className="mt-6 flex">
        {/* <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        /> */}
        <a className="m-auto flex" href="/Joan_CV_FR.pdf" download>
          <Button variant="secondary" className="m-auto flex">
            <Image src={logoFrFlag} alt="fr flag" className="max-w-[2rem]" />
            Français
          </Button>
        </a>
        <a className="m-auto flex" href="/Joan_CV_EN.pdf" download>
          <Button variant="secondary" className="m-auto flex">
            <Image src={logoUkFlag} alt="uk flag" className="max-w-[2rem]" />
            English
          </Button>
        </a>
      </div>
    </div>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Ynov Toulouse Campus',
      title: 'Mentor Informatique',
      logo: logoYnovCampus,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Henri Trip',
      title: 'Stage Développeur Web',
      logo: logoHenriTrip,
      start: '2021',
      end: '2021',
    },
    // {
    //   company: 'Facebook',
    //   title: 'iOS Software Engineer',
    //   logo: logoFacebook,
    //   start: '2011',
    //   end: '2014',
    // },
    // {
    //   company: 'Starbucks',
    //   title: 'Shift Supervisor',
    //   logo: logoStarbucks,
    //   start: '2008',
    //   end: '2011',
    // },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[modelLighter, lighter, yaya, printer].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  const [language, setLanguage] = useState('English')
  return (
    <>
      <Head>
        <title>Joan Glendinning - Software developper & student.</title>

        <meta
          name="description"
          content="I’m Joan, a software developper based in the dynamic city of Toulouse."
        />
      </Head>

      <Container className="mt-9">
        <div className="max-w-3l">
          {language === 'English' ? (
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Software developper & student
            </h1>
          ) : (
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Développeuse web & étudiante
            </h1>
          )}
          {language === 'English' ? (
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              <Balancer>
                Hi ! I’m Joan, a software designer based in the dynamic city of
                Toulouse. <br />
                I’m currently in my third year of my bachelor’s degree as a
                student at Ynov Campus, where I’m studying web and applications
                development.
                <br />
                I have a strong passion for creating visually appealing and
                user-friendly websites that not only meet but exceed customer
                expectations. My expertise lies in HTML, CSS, JavaScript and I’m
                constantly learning other web development technologies, such as
                React and Node.js. <br />
                Always eager to learn new skills and techniques to enhance my
                web development knowledge, I am actively seeking a co-op
                opportunity in web development to gain real-world experience and
                contribute to a company’s success.
              </Balancer>
            </p>
          ) : (
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              <Balancer>
                Bonjour ! Je suis Joan, une conceptrice de logiciels basée dans
                la ville dynamique de Toulouse. <br />
                Je suis actuellement en troisième année de licence en
                développement web et applications à Ynov Campus, où j'étudie.
                <br />
                J'ai une forte passion pour la création de sites web esthétiques
                et intuitifs qui non seulement répondent, mais dépassent les
                attentes des clients. Mon expertise se situe dans l'HTML, CSS,
                JavaScript et j'apprends constamment d'autres outils de
                développement, telles que React, Angular et Node.js. <br />
                Toujours prête à apprendre de nouvelles compétences et
                techniques pour améliorer mes connaissances en développement
                Web, je suis à la recherche d'une opportunité d'alternance en
                développement Web afin d'acquérir de l'expérience et contribuer
                au succès d'une entreprise.
              </Balancer>
            </p>
          )}

          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://www.instagram.com/sinnamon.stix/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="mailto:joan.glendinning@ynov.com"
              icon={MailIcon}
              className="border-zinc-100 dark:border-zinc-700/40"
            />
            <SocialLink
              href="https://github.com/Sinnamoon"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />

            <SocialLink
              href="https://www.linkedin.com/in/joan-glendinning-3a26971b6/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <div classname="relative">
              <Button
                variant="secondary"
                className="absolute right-24 rounded-full" 
                style={{ borderRadius: '75%' }}
                onClick={() => setLanguage('French')}
              >
                <CircleFlag countryCode="fr" className="max-w-[2rem]" />
              </Button>
              <Button
                variant="secondary"
                className="absolute right-4 mx-3 rounded-full"
                style={{ borderRadius: '75%' }}
                onClick={() => setLanguage('English')}
              >
                <CircleFlag countryCode="uk" className="max-w-[2rem]" />
              </Button>
              <div />
            </div>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <DownloadCV />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

function changeToFrench() {}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
