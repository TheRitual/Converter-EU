import { StyledInfo, Information } from "./styled";

const Info = ({ info }) => {
    return (
        <StyledInfo>
            <Information isError={info.isError}>
                {info.isError && "ERROR: "}
                {info.message}
            </Information>
        </StyledInfo >
    );
}

export default Info;