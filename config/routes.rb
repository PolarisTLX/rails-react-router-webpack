Rails.application.routes.draw do
  root 'pages#index'

  # below is for use with React-Router:
  match '*path', to: 'pages#index', via: :all
end
