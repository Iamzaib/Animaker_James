import Animate from '../views/Animate';
import AuthView from '../views/auth/AuthView';
import MainView from '../views/MainView';
import LandingPage from '../views/LandingPage';


let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	// {
	// 	path: '/',
	// 	component: MainView,
	// 	layout: 'main',
	// },
	{
		path:"/",
		component: LandingPage,
		layout:"main",
	},
	{
		path:"/animate",
		component: Animate,
		layout: 'main',
	},
];
export default routes;