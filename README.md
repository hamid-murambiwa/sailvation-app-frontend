![](https://img.shields.io/badge/Microverse-blueviolet)

# Sailvation-app-frontend
## Description
> A simple app to reserve cruise ships to various locations

## Built With

- React
- Redux

### Preview

Homepage
-------------
<img width="500px" height="500px" alt="Screenshot 2022-04-14 at 18 45 33" src="https://user-images.githubusercontent.com/71644515/174386958-c637b8be-a659-45a6-a9ff-f075159c9989.png">

## Live Demo

[Live Demo Link](https://62ada1e5cf10dc0008911fa4--tangerine-basbousa-b21c1a.netlify.app/)

## Learning objectives

- Implement a connection between a Ruby on Rails back-end and React front-end.
- Understand pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.


## Setup

## Getting Started

To get a local copy for this project and running follow these simple example steps.

### Creating the hello-rails-react

```bash
$   npx create-react-app@latest sailvation-app-frontend
$   cd sailvation-app-frontend # Move into the application directory
```

### Clone this repository

```bash
$ https://github.com/karelvanoordt/sailvation-app-frontend.git
$ cd sailvation-app-frontend
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

`https://github.com/facebook/create-react-app/issues/11816`

### Host the app

- heroku login 
- git remote remove heroku
- heroku create sailvation-app-api    
- git push heroku intgration-tests:main
- heroku run rails db:migrate 
- heroku run rails db:seed    

### Install linter and 

ESLint

```bash
$  npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x  @babel/preset-react@7.x @babel/preset-react@7.x
```

- Stylelint package

```bash
$  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

```

- Run linter

```bash
$  npx eslint .
$  npx stylelint "**/*.{css,scss}" 
```

- In auto-correct mode, RuboCop will try to automatically fix offenses:

```bash
$  npx eslint . --fix
$  npx stylelint "**/*.{css,scss}" --fix 
```


## Built With

This project is build with:
- React
- Redux

---
## Authors

👤 **Karel van Oordt**

- GitHub: [@karelvanoordt](https://github.com/karelvanoordt)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/karelvanoordt/)

👤 **Hamid Murambiwa**

- GitHub: [@hamid-murambiwa](https://github.com/hamid-murambiwa/)
- Twitter: [@Hamid87789454](https://twitter.com/Hamid87789454/)
- LinkedIn: [LinkedIn](https://linkedin.com/in/hamid-murambiwa/)


👤 **Orçun Uğur**

- GitHub: [@githubhandle](https://github.com/luftedar)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/orcunugur)


## 🤝 Contributing

>Contributions, issues, and feature requests are welcome!
>Feel free to check the [issues page](../../issues/).

## Show your support

>Give a ⭐️ if you like this project!

## Acknowledgments

- This project built in Microverse's Final capstone module.

## 📝 License

>This project is [MIT](./MIT.md) licensed.
