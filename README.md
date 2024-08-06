# vue-test

Vue-CLI устарел, рекомендовано использовать npm create vue@latest или yarn create vue@latest

В проекте использую yarn 4 с corepack

## Рекомендуемая настройка IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (и задизейблить Vetur) или
[PHPStorm](https://www.jetbrains.com/phpstorm/) или
[WebStorm](hhttps://www.jetbrains.com/webstorm/)

## Настроить конфигурацию

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Настройка проекта

```sh
npm install или с yarn версия 4: corepack enable, после yarn set version stable и последнее yarn install
(если глобальная версия yarn старая, можно воспользоваться - corepack prepare yarn@stable --activate, обязательня версия ноды должна быть Node.js ^16.17 or >=18.6)
```

### Компиляция и горячая перезагрузка для разработки

```sh
npm run dev или yarn run dev
```

### Компиляция и минификация для производства

```sh
npm run build или yarn run build
```

### Lint с [ESLint](https://eslint.org/)

```sh
npm run lint или yarn run link
```
