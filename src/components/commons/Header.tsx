'use client'

import { FC } from 'react'
import { Navbar } from './Navbar'

export const Header: FC = () => {
	return (
		<header className='bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex min-h-[70px] justify-center w-full mx-auto fixed'>
			<Navbar />
		</header>
	)
}
