# Описание программы визуализации 3D сцены

Эта программа представляет собой визуализацию трехмерной сцены с использованием библиотеки Three.js. Сцена включает в себя различные 3D объекты, освещение и возможность управления камерой для навигации по сцене. Вы можете запустить программу и увидеть результат, посетив следующую ссылку: [https://hippoflex.github.io/](https://hippoflex.github.io/).

## Описание кода

Программа написана на JavaScript с использованием библиотеки Three.js для создания и рендеринга 3D сцены. Вот основные компоненты кода:

- **Размеры окна**: Программа определяет ширину и высоту окна браузера и использует их для задания размеров сцены.

- **Свойства камеры**: Задаются параметры камеры, такие как угол обзора (FOV), соотношение сторон (ASPECT), ближняя и дальняя плоскости отсечения (NEAR и FAR).

- **Загрузка текстур**: Загружаются текстуры для различных объектов сцены, такие как сфера, тор, конус и куб.

- **Создание сцены и объектов**: Создается объект сцены (`scene`), а также различные 3D объекты, такие как сфера (`sphere`), тор (`torus`), конус (`cone`) и куб (`cube`).

- **Создание и настройка источников света**: В сцене создаются различные источники света, включая точечные источники света для внешнего и внутреннего освещения, а также окружающий свет.

- **Создание рендерера**: Создается рендерер WebGL для отображения сцены в браузере.

- **Использование OrbitControls**: Используется библиотека OrbitControls для управления камерой и навигации по сцене.

- **Анимация**: Программа включает в себя анимацию, которая вызывается через функцию `animate()`, обновляет состояние сцены и рендерит ее.

## Запуск приложения

Для запуска данной программы, перейдите по следующей ссылке: [https://hippoflex.github.io/](https://hippoflex.github.io/). Вы увидите трехмерную сцену с различными объектами и возможностью навигации.
