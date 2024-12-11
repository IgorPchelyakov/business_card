'use client'
import { paths } from '@/data/paths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'
import { ThemeButton } from '../ui/ThemeButton'

export const Navbar: FC = () => {
	const pathname = usePathname()
	// const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
	// 	left: '0px',
	// 	width: '0px',
	// 	top: '0px',
	// 	height: '0px',
	// 	transition: 'all 0.3s ease',
	// })

	// useEffect(() => {
	// 	// Находим активную ссылку
	// 	const activeLink = document.querySelector('.active-link')
	// 	if (activeLink) {
	// 		const { offsetLeft, offsetWidth, offsetTop, offsetHeight } =
	// 			activeLink as HTMLElement
	// 		// Устанавливаем стиль индикатора с нужной позицией и размерами
	// 		setIndicatorStyle({
	// 			left: `${offsetLeft - 20}px`, // смещение по горизонтали
	// 			width: `${offsetWidth + 40}px`, // ширина индикатора
	// 			top: `${offsetTop - 5}px`, // смещение по вертикали
	// 			height: `${offsetHeight + 10}px`,
	// 			// высота индикатора
	// 		})
	// 	}
	// }, [pathname])
	const indicatorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const activeLink = document.querySelector('.active-link')
		if (activeLink && indicatorRef.current) {
			const { offsetLeft, offsetWidth } = activeLink as HTMLElement

			// Обновляем положение индикатора с помощью requestAnimationFrame
			requestAnimationFrame(() => {
				indicatorRef.current!.style.transform = `translateX(${offsetLeft}px)`
				indicatorRef.current!.style.width = `${offsetWidth}px`
			})
		}
	}, [pathname])

	return (
		<>
			<nav className='flex items-center gap-10'>
				<ul className='flex gap-10'>
					<div
						ref={indicatorRef}
						className='absolute h-10 bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out'
						style={{
							width: '0px', // Начальная ширина
							transform: 'translateX(0px)', // Начальное положение
						}}
					/>
					{Object.values(paths).map(({ href, label }) => {
						const isActive = pathname === href
						return (
							<li key={href} className='relative'>
								<Link
									href={href}
									// className={`${
									// 	isActive ? 'active-link text-white' : 'text-gray-500'
									// } relative py-2 px-4 transition-all duration-300`}
									className={`${
										isActive ? 'active-link text-gray-900' : 'text-gray-600'
									} relative z-10 px-4 py-2 text-sm font-medium transition-all`}
								>
									{label}
								</Link>
								{/* {isActive && (
									<div
										className='absolute bg-white opacity-20 rounded-lg blur-sm transition-all duration-300'
										style={indicatorStyle}
									/>
								)} */}
							</li>
						)
					})}
				</ul>
				<ThemeButton />
			</nav>
		</>
	)
}
