import { IUser } from '@/types/user'

export const AboutMe: IUser = {
	id: 1,
	login: 'deViling',
	email: 'deviling1313@icloud.com',
	data: {
		firstName: 'Igor',
		middleName: 'Victorovich',
		lastName: 'Pchelyakov',
		tel: '+380980917013',
		birthDate: new Date('1994-12-22T 00:00:00.000Z'),
		socialLinks: {
			github: 'https://github.com/IgorPchelyakov',
			linkedin: '#',
			telegram: '#',
		},
		bio: {
			shortDescription: '',
		},
	},
}
