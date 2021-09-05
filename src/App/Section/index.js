import "./style.css";

const Section = ({ title, children, preContent }) => (
    <section className="section">
        {preContent ? preContent : ""}
        <h2 className="section__header">{title}</h2>
        {children}
    </section>
);

export default Section;