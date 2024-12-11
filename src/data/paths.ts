interface Paths {
	href: string
	label: string
}

export const paths: Record<string, Paths> = {
	home: { href: '/', label: 'Home' },
	about: { href: '/about', label: 'About' },
	projects: { href: '/projects', label: 'Projects' },
	contact: { href: '/contacts', label: 'Contacts' },
}
