import "./style.css";

const Section = ({ title, children }) => (
    <section className="section">
        <h2 className="section__header">{title}</h2>
        {children}
    </section>
);

export default Section;