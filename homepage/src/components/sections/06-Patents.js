import React from 'react';

const patents = [
  {
    index: '[1]',
    title: '하이퍼관계형 지식 그래프 상의 하이퍼관계형 사실에 대한 링크 예측 방법 및 장치',
    subtitle:
      'Method and Apparatus for Link Prediction of Hyper-Relational Facts on Hyper-Relational Knowledge Graphs',
    meta: (
      <>
        <span className="name-highlight">Sangjun Ji</span>, Byungkook Oh
        <br />
        KR Patent, 출원번호 10-2025-0198284, 출원일 2025년 12월 12일
      </>
    ),
  },
];

const PatentsSection = () => (
  <section id="patents" className="section">
    <div className="section-label">Patents</div>
    <div className="card-list">
      {patents.map((patent) => (
        <article className="pub-card" key={patent.index}>
          <div className="card-body">
            <div className="indexed-card">
              <span className="inline-index">{patent.index}</span>
              <div>
                <h3>{patent.title}</h3>
                <p className="muted">{patent.subtitle}</p>
                <p>{patent.meta}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default PatentsSection;
