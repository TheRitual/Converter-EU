import { CodeValue, Code } from "./styled";

const NumCode = ({ number, code, small }) => (
    <>
        <CodeValue isSmall={small}>
            {number}
        </CodeValue>&nbsp;
        <Code isSmall={small}>
            {code}
        </Code>
    </>
);

export default NumCode;