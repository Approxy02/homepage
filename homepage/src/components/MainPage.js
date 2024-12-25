import React from 'react';

const MainPage = () => {
  return (
    <div id="header" className="content">
      <div id="profile">
        <div id="header-info">
          <div>
            <h1>Sang-Jun Ji (지상준)</h1>
            <span>(24세)</span><br />
            <span>Email#1: wltkdwns0220@naver.com</span><br />
            <span>Email#2: wltkdwns0220@konkuk.ac.kr</span><br />
            [<a href="../assets/[지상준]CV.pdf">CV</a>]
            [<a href="https://github.com/Approxy02">GitHub</a>]
          </div>
        </div>
        <img src="%PUBLIC_URL%/assets/Sang-Jun_Ji.jpg" alt="profile" />
      </div>
      <hr />
      <div id="biography">
        <blockquote style={{ marginLeft: "auto", marginRight: "auto" }}>
          <p className="quote">
            <em>I pursue AI that thinks similar to humans based on <a href="https://www.youtube.com/watch?v=y7sXDpffzQQ&ab_channel=IBMTechnology">knowledge</a><br />
              because it is vital to the future of AGI.</em>
          </p>
        </blockquote>
        <p>
          Hello! I am currently an undergraduate student in the <a href="https://cse.konkuk.ac.kr/cse/index.do">Department of Computer Science and Engineering at Konkuk University</a>. 
          I am also working as an undergraduate intern at <a href="https://gli.konkuk.ac.kr/">Graph & Language Intelligence Lab.</a>, advised by Prof. <a href="https://bkoh509.github.io/">Byungkook Oh</a>.
        </p>
        <p style={{ margin: 0 }}>
          My research interest is highly related to <em><b>Human-like Artificial Intelligence</b></em>, including
          knowledge representation (e.g., knowledge graph embedding and graph embedding) and knowledge-based
          applications (e.g., Knowledge-enhanced NLP Applications, Information Retrieval & Recommendation). I have
          covered a wide range of data types (e.g., matrix/tensor, text, graph, time series) for various tasks (e.g.,
          classification, prediction, retrieval, data generation).
        </p>
      </div>
    </div>
  );
};

export default MainPage;
