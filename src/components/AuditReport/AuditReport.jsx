import React from 'react';
import { useState } from 'react';
import './AuditReport.css';

const AuditReport = ({ title, overallAnalysis, testResults, solutionSummary }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <div className="audit-report">
        <h2>{title}</h2>

        <section className="report-section">
          <h3>1. 总体剖析</h3>
          <div className="analysis-content">{overallAnalysis}</div>
        </section>

        <section className="report-section">
          <h3>2. 测试结果与证据分析</h3>
          {testResults.map((toolGroup) => (
            <div key={toolGroup.tool} className="tool-group">
              <h4>{toolGroup.tool} 分析</h4>
              <div className="image-gallery">
                {toolGroup.images.map((image, index) => (
                  <div className="image-card" key={index} onClick={() => openModal(image.src)}>
                    <img src={image.src} alt={image.caption} />
                    <p className="caption">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="report-section">
          <h3>3. 优化措施</h3>
          <div className="solution-content">
            {solutionSummary || <p><i>待实施优化...</i></p>}
          </div>
        </section>
      </div>

      {modalImage && (
        <div className="image-modal-backdrop" onClick={closeModal}>
          <img src={modalImage} alt="Enlarged view" className="image-modal-content" />
        </div>
      )}
    </>
  );
};

export default AuditReport;