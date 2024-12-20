// src/components/Section.jsx
import React from 'react';

const Section = () => {
  return (
    <section>
      <h2>Заголовок секции</h2>
      <form>
        {/* Пример формы */}
        <input type="text" placeholder="Введите что-то..." />
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default Section;
