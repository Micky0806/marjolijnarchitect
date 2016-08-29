Rails.application.routes.draw do
	root to: 'pages#home'

	resources :projects, only: [:index]
	resources :brands, only: [:index]

	get 'show1', to: 'projects#show1'
	get 'show2', to: 'projects#show2'
	get 'show3', to: 'projects#show3'  
	get 'show4', to: 'projects#show4'

	get 'blog', to: 'blogs#show'
	get 'blog1', to: 'blogs#show1'
	get 'blog2', to: 'blogs#show2'
	get 'blog3', to: 'blogs#show3'
	get 'blog4', to: 'blogs#show4'
	get 'blog5', to: 'blogs#show5'
	get 'blog6', to: 'blogs#show6'

end
