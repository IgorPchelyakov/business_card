'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemesProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <>{children}</>
	}
	return (
		<ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
			{children}
		</ThemeProvider>
	)
}