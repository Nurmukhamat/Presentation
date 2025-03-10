import React from "react";

const Space = () => {
  return (
    <div className="content">
      <h2>Космические технологии</h2>
      <ul>
        <li>1975: Первый спутник "Ариабхата"</li>
        
        <li>2013: Миссия "Mangalyaan" – успешная миссия на Марс.</li>
      </ul>
      <div style={{
        display:"flex",
         gap:"10px",
         padding:"10px 100px 0"
      }}>
      <img src="https://avatars.mds.yandex.net/get-entity_search/68218/78440340/S600xU" alt="" />
      <img src="https://mirkosmosa.ru/images/big/news/8/7432.jpg" alt="" />
      <img src="" alt="" />
      </div>
    </div>
  );
};

export default Space;
