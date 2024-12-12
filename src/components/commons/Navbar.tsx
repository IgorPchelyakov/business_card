'use client'
import { paths } from '@/data/paths'
import { AboutMe } from '@/data/user/user'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { ThemeButton } from '../ui/buttons/ThemeButton'
import NavLink from '../ui/links/NavLink'

export const Navbar: FC = () => {
	const pathname = usePathname()

	return (
		<>
			<nav className='navbar flex items-center gap-10 justify-between w-full max-w-[1200px] min-h-[70px] px-5 h-full'>
				<Link href={paths.home.href}>
					<h1 className='font-bold text-2xl'>
						<span className='dark:text-dark-secondary text-light-secondary'>
							{AboutMe.data?.firstName}
						</span>{' '}
						{AboutMe.data?.lastName}
					</h1>
				</Link>
				<ul className='flex gap-10'>
					{Object.values(paths).map(({ href, label }) => {
						const isActive = pathname === href
						return (
							<NavLink
								key={href}
								href={href}
								label={label}
								isActive={isActive}
							/>
						)
					})}
				</ul>
				<ul className='flex gap-6 items-center'>
					<li>
						<Link href={`${AboutMe.data?.socialLinks?.github}`}>
							<FaGithub size={30} className='dark:white black' />
						</Link>
					</li>
					<li>
						<Link href={`${AboutMe.data?.socialLinks?.linkedin}`}>
							<FaLinkedin size={30} className='dark:white black' />
						</Link>
					</li>
					<li>
						<Link href={`${AboutMe.data?.socialLinks?.telegram}`}>
							<FaTelegram size={30} className='dark:white black' />
						</Link>
					</li>
					<ThemeButton />
				</ul>
			</nav>
		</>
	)
}
