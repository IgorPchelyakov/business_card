import { Footer } from '@/components/commons/Footer'
import { Header } from '@/components/commons/Header'
import { ThemesProvider } from '@/services/ThemeProvider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'My Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head />
			<body className='bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-apple'>
				<ThemesProvider>
					<Header />
					<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
						{children}
					</main>
					<Footer></Footer>
				</ThemesProvider>
			</body>
		</html>
	)
}
