import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  className?: string
  title?: string
  isShowNavber?: boolean
}

const Layout: FC<Props> = ({ children, className = '', title = 'Resume Chan', isShowNavber = true }): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <link
        rel='shortcut icon'
        href='/favicon.ico'
      />
    </Head>
    {isShowNavber &&
      <div className='print:hidden sticky top-0 z-40 w-full bg-white/95 border-b border-slate-900/10 backdrop-blur'>
        <div className='flex py-4 px-8'>
          <div>
            <Link href='/'>
              <a className='group flex items-center space-x-3'>
                <i className='text-secondary-500 fas fa-file fa-lg' />
                <span className='text-xl font-medium text-black-gray group-hover:animate-flipInX group-hover:animate-fast'>Resume Chan</span>
              </a>
            </Link>
          </div>
          <div className='flex items-center ml-auto'>
            <a
              className='text-slate-400 hover:text-slate-500 hover:animate-wobble animate-none hover:animate-infinite hover:animate-fast'
              href='https://github.com/nisitjiraruwat/resume-chan-web'
              target='_blank'
              rel='noreferrer'
            >
              <i className='text-current fab fa-github fa-lg'></i>
            </a>
          </div>
        </div>
      </div>}
    <main className={className}>
      {children}
    </main>
  </>
)

export default Layout
