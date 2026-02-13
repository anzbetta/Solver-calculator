export default function Instruction() {
  return (
    <div className="instruction-card">
      <div className="instruction-content open">
        <section className="instruction-section">
          <h3>Мета</h3>
          <p>
            Калькулятор шукає <strong>найдовший ланцюжок</strong> з числових 
            фрагментів, де кожен фрагмент використовується лише один раз.
          </p>
        </section>

        <section className="instruction-section">
          <h3>Правило з'єднання</h3>
          <p>Два фрагменти з'єднуються, коли:</p>
          <div className="instruction-rule">
            <span className="fragment">...XY</span>
            <span className="connector">→</span>
            <span className="fragment">XY...</span>
          </div>
          <p className="instruction-note">
            Останні 2 цифри лівого = перші 2 цифри правого
          </p>
        </section>

        <section className="instruction-section">
          <h3>Склеювання</h3>
          <p>При з'єднанні збігові цифри не дублюються:</p>
          <div className="instruction-example">
            <div className="example-row">
              <code>248460</code>
              <span>+</span>
              <code>608017</code>
            </div>
            <div className="example-arrow">збіг: 60</div>
            <div className="example-result">
              <code>2484608017</code>
            </div>
          </div>
        </section>

        <section className="instruction-section">
          <h3>Результат</h3>
          <p>
            Калькулятор повертає фінальний склеєний рядок цифр — 
            це і є відповідь.
          </p>
        </section>
      </div>
    </div>
  );
}
