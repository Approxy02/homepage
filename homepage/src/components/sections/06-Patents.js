import React from 'react';
import GlassCard from '../GlassCard';

const patents = [
  {
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
        <GlassCard className="pub-card" key={patent.title}>
          <div className="card-body">
            <h3>{patent.title}</h3>
            <p className="muted">{patent.subtitle}</p>
            <p>{patent.meta}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default PatentsSection;
