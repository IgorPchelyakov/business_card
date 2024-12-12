import Link from 'next/link'
import { FC } from 'react'

const NavLink: FC<{ href: string; label: string; isActive: boolean }> = ({
	href,
	label,
	isActive,
}) => {
	const baseClasses = 'relative px-3 py-2 text-lg transition-colors'
	const activeClasses = isActive
		? 'font-bold dark:text-dark-heading text-light-heading after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-full after:bg-light-heading after:dark:bg-dark-heading'
		: 'dark:text-dark-text-secondary text-light-text-secondary group'
	const hoverClasses = 'hover:dark:text-dark-heading hover:text-light-heading'
	return (
		<li>
			<Link
				className={`${baseClasses} ${activeClasses} ${hoverClasses}`}
				href={href}
			>
				{label}
				{!isActive && (
					<span className='absolute bottom-[-7px] left-0 h-0.5 w-full scale-x-0 bg-light-heading dark:bg-dark-heading transition-transform duration-300 group-hover:scale-x-100' />
				)}
			</Link>
		</li>
	)
}

export default NavLink
