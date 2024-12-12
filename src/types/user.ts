export interface IUser {
	id: number
	login: string
	email: string
	data?: IUserData
}

export interface IUserData {
	firstName: string
	middleName?: string
	lastName: string
	tel?: string
	birthDate?: Date
	profilePictureUrl?: string | null
	address?: IAddress
	socialLinks?: ISocialLinks
	bio?: IBio
}

export interface IAddress {
	street?: string
	city?: string
	state?: string
	postalCode?: string
	country?: string
}

export interface ISocialLinks {
	github?: string
	linkedin?: string
	telegram?: string
	twitter?: string
	facebook?: string
	instagram?: string
	youtube?: string
}

export interface IBio {
	shortDescription: string
	detailedDescription?: string
	achievements?: string[]
	interests?: string[]
}
