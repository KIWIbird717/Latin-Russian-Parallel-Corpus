<p align="center">
  <img src="./assets/logo.svg" alt="Latin Parallel Corpus" width="120">
</p>

<h1 align="center">Latin Russian Parallel Corpus</h1>

> 📚 Параллельный корпус латинского, греческого и русского языков

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js&style=flat)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwindcss&style=flat)](https://tailwindcss.com/)
[![Dockerized](https://img.shields.io/badge/Docker-ready-blue?logo=docker&style=flat)](https://www.docker.com/)
[![IntentUI](https://img.shields.io/badge/Intent-Ui-blue?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI1IDI0IiBjbGFzcz0iaW50ZW50dWktaWNvbnMgc2l6ZS03IHRleHQtd2hpdGUiIGRhdGEtc2xvdD0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMi41IiB5PSIyIiBmaWxsPSIjMEQ2REZEIiByeD0iMy43NSI+PC9yZWN0PjxnIGZpbGw9IiNmZmYiIGZpbHRlcj0idXJsKCNpY29uLWJyYW5kLWludGVudHVpX3N2Z19fYSkiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PHBhdGggZD0iTTUuODYgNi4zMTFjMC0uNTI1LjQyNi0uOTUyLjk1MS0uOTUyaDEuOTA0Yy41MjYgMCAuOTUyLjQyNy45NTIuOTUydjEuOTA0YS45NS45NSAwIDAgMS0uOTUyLjk1Mkg2LjgxMWEuOTUuOTUgMCAwIDEtLjk1Mi0uOTUyVjYuMzExWiI+PC9wYXRoPjxwYXRoIGZpbGwtb3BhY2l0eT0iMC41IiBkPSJNMTAuNjA1IDYuMzExYzAtLjUyNS40MjYtLjk1Mi45NTItLjk1MmgxLjkwNGMuNTI1IDAgLjk1Mi40MjcuOTUyLjk1MnYxLjkwNGEuOTUuOTUgMCAwIDEtLjk1Mi45NTJoLTEuOTA0YS45NS45NSAwIDAgMS0uOTUyLS45NTJ6Ij48L3BhdGg+PHBhdGggZD0iTTE1LjM1IDYuMzExYzAtLjUyNS40MjYtLjk1Mi45NTItLjk1MmgxLjkwNGMuNTI2IDAgLjk1Mi40MjcuOTUyLjk1MnYxLjkwNGEuOTUuOTUgMCAwIDEtLjk1Mi45NTJoLTEuOTA0YS45NS45NSAwIDAgMS0uOTUyLS45NTJ6Ij48L3BhdGg+PHBhdGggZmlsbC1vcGFjaXR5PSIwLjUiIGQ9Ik0xNS4zNSAxMS4wNTdjMC0uNTI2LjQyNi0uOTUyLjk1Mi0uOTUyaDEuOTA0Yy41MjYgMCAuOTUyLjQyNi45NTIuOTUydjEuOTA0YS45NS45NSAwIDAgMS0uOTUyLjk1MmgtMS45MDRhLjk1Ljk1IDAgMCAxLS45NTItLjk1MnoiPjwvcGF0aD48L2c+PGRlZnM+PGZpbHRlciBpZD0iaWNvbi1icmFuZC1pbnRlbnR1aV9zdmdfX2EiIHdpZHRoPSIxMy40MjYiIGhlaWdodD0iOC42OCIgeD0iNS43OTYiIHk9IjUuMzI4IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiPjwvZmVGbG9vZD48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIj48L2ZlQ29sb3JNYXRyaXg+PGZlT2Zmc2V0IGR5PSIwLjAzMiI+PC9mZU9mZnNldD48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjAzMiI+PC9mZUdhdXNzaWFuQmx1cj48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiPjwvZmVDb21wb3NpdGU+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA1IDAiPjwvZmVDb2xvck1hdHJpeD48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTE3NzdfNjI0Ij48L2ZlQmxlbmQ+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzExNzc3XzYyNCIgcmVzdWx0PSJzaGFwZSI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4K&style=flat)](https://intentui.com/)

---

## 🏛️ Описание

> ⚠️ **Важно:**  
> Данный проект работает на **моковых данных** и предназначен **только для визуализации интерфейса**.  
> Настоящая бизнес-логика и подключение к серверу отсутствуют.

**Russian-Latin-Greek Parallel Corpus** — это параллельный корпус классических латинских текстов с переводами на русский и древнегреческий языки. Особенностью проекта является глубокая морфологическая аннотация латинских текстов и расширенный пользовательский поиск по словоформам, авторам и произведениям.

Сайт предоставляет:

- Полный интерактивный доступ к текстам и их переводам
- Поиск по словоформам с морфологической информацией
- Навигацию по авторам, переводчикам и произведениям
- Интерактивный просмотр текста постранично с возможностью изучения морфологии каждого слова
- Статистические страницы с метриками корпуса

## ✨ Особенности

- 🔍 **Морфо-аннотированный поиск**: пользователь может исследовать грамматические особенности слов с помощью hover/click взаимодействия.
- 📖 **Параллельное чтение**: одновременно отображаются латинский оригинал и переводы.
- 📊 **Статистика**: страница с агрегированной информацией по авторам, языкам, словоформам.
- 🧭 **Семантическая навигация**: легко найти все тексты одного автора, переводы одного переводчика или работы определённого периода.

---

## 🛠️ Технологии

Проект собран с использованием современного веб-стека:

### 💻 Frontend

- **Next.js 15** — серверный рендеринг и оптимизация загрузки
- **Tailwind CSS 4 + Variants** — быстрая стилизация компонентов
- **@tanstack/react-query** — продвинутая работа с асинхронными запросами и кешированием
- **next-intl** — интернационализация с поддержкой нескольких языков
- **motion** — анимации и плавный UX
- **ESLint + Prettier** — единый стиль кода и статический анализ

### ⚙️ Backend & Deployment

- **Docker + docker-compose** — контейнеризация

---

## 🚀 Get Started

```bash
git clone https://github.com/KIWIbird717/latin-russian-corpus.git
cd latin-russian-corpus
npm install
npm run build
npm run start
```

Для запуска в Docker:

```bash
docker compose up --build -d
```

---

## 🧾 Лицензия

Проект распространяется под лицензией MIT. См. [LICENSE](./LICENSE) для подробностей.
