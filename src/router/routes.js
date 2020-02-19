import Index from '../pages/Index/Index';
import Category from '../pages/Category/Category';
import Buy from '../pages/Buy/Buy';
import Order from '../pages/Order/Order';
import Personal from '../pages/Personal/Personal';
import Item from '../pages/Item/Item';
import Home from '../pages/Home/Home'

export default [
	{
		path: '/index',
		component: Index,
		children:[
			{
				path: '/index/item/:id',
				component: Item
			},
			{
				path: '/index/home',
				component:Home
			},
			{
				path:'/index',
				redirect:'/index/home'
			}
		]
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/buy',
		component: Buy
	},
	{
		path: '/order',
		component: Order
	},
	{
		path: '/personal',
		component: Personal
	},
	
	{
		path:'/',
		redirect:'/index'
	}
]