# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

Реалізація модального вікна в React з використанням методів життєвого циклу

Створіть новий React проект або використайте вже існуючий.

Створіть новий файл, наприклад Modal.js, для компонента, який відповідатиме за відображення
модального вікна.

Імпортуйте бібліотеку styled-components та стилі для модального вікна. 

Створіть файли Modal.js та Modal.css.

Створіть класовий компонент Modal, який розширює Component.

В класовому компоненті визначте стан для відстеження відкриття/закриття модального вікна та
методи для його відкриття, закриття та обробки клавіш.

Використайте методи componentDidMount, componentWillUnmount, а також componentDidUpdate для
відслідковування подій.

Розробіть логіку для відображення та закриття модального вікна. Відобразіть модальне вікно при
відкритті та закрийте при натисканні кнопок чи клавіші "Escape".

Імпортуйте та використайте компонент Modal  в App.

Запустіть додаток та переконайтеся, що модальне вікно відображається та може бути закрите.

Додатково (опціонально): спробуйте змінити дизайн та додати анімацію до модального вікна.