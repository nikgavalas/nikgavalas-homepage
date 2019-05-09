export interface PageRoute {
	path: string;
	title: string;
	icon: string;
}

export const PAGE_ROUTES: PageRoute[] = [
	{
		path: '/software',
		title: 'Software',
		icon: 'code'
	},
	{
		path: '/music',
		title: 'Music',
		icon: 'musical-notes'
	},
	{
		path: '/aviation',
		title: 'Aviation',
		icon: 'airplane'
	},
];
