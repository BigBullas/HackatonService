Гайд по использованию переменных темы 

В файле src/style/theme.scss Есть переменные которые можно юзать глобально.

текущие переменные это:
--color-bg
--color-accent
--color-primary

Эти переменные адаптивные для разных тем.

Пример импользования:
.button {
  background-color: var(--color-accent);
  color: var(--color-primary);
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-bg)
  }
}