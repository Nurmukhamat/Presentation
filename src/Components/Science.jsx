import { div } from "framer-motion/client";
import React from "react";

const Science = () => {
  return (
    <div className="content-1">
       <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Department_of_Atomic_Energy.svg/294px-Department_of_Atomic_Energy.svg.png" alt="" />
    <div className="content">
      <h2>Научно-техническая революция</h2>
      <p>НТР началась после обретения независимости в 1947 году.</p>

      <h3>Основные этапы (1950–1970)</h3>
      <h3>1:Первые пятилетние планы и создание научной базы</h3>
      <ul>
        <li>1951: Первый пятилетний план, в котором заложены основы научного развития.</li>
        <li>Созданы Совет по научным и промышленным исследованиям CSIR</li>
        <li>Индийский совет сельскохозяйственных исследований (ICAR)</li>
        <li>Открыты Индийские технологические институты (IIT) и национальные исследовательские лаборатории</li>
      </ul>
      <h3>2: Развитие атомной энергетики:</h3>
      <ul>
        <li>В 1954 году создан Департамент атомной энергии (DAE)</li>
        <li>В 1956 году запущен первый ядерный реактор Apsara</li>
        <li>В 1974 году проведены первые ядерные испытания ("Улыбающийся Будда")</li>
      </ul>
    </div>
    </div>
  );
};

export default Science;
