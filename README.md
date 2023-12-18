# Contacts app using Typescript + React js | GraphQL 

## still in the process of development

demo : https://contact-app-ts.netlify.app/

My Portofolio : http://raflirifaldi.infinityfreeapp.com/

implement : 
- graphql
- Apollo Client
- Emotion css

feature :
- Search list Contact
- Pagination
- Add New Contact
- Add New Phone Number  

### Preview - Mobile and Web Version

1. Mobile Version
 
![Home-mobile](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/3d821a3a-ab02-477b-a029-606c994fa5c6)


![add_new_contact](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/16a8a411-ac97-4aaa-ba67-496f2ac7ddd3)


![detail_and_input-mobile](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/9bbb80fc-ce40-44dd-8f1b-ef018a2f83c5)


![Search_contact-mobile](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/646d44d2-b42c-4620-93ce-1e3e8b9c8a12)



2. Web Version

   
![Home-web](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/af91ec0e-7004-4667-86f7-bee37a9ef537)


![detail_and_input-web](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/1161e318-49aa-4dd3-9350-00ed78d4d56a)


![add_contacts-web](https://github.com/Rafli-ri/contact-app-ts/assets/55773671/26c3576b-8291-405f-b3e8-035b48d0904c)





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
