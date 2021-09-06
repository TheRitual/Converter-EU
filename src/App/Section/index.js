import { StyledSection, SectionHeader } from "./styled";

const Section = ({ title, children, preContent }) => (
    <StyledSection>
        {preContent ? preContent : ""}
        <SectionHeader>{title}</SectionHeader>
        {children}
    </StyledSection>
);

export default Section;