import "./style.css";

const Info = ({ info }) => {

    return (
        <section className={`info ${!info.showInfo && " info--hidden"}`}>
            <p className={`info__information ${info.isError && " info__information--error"}`}>
                {info.isError && "ERROR: "}
                {info.message}
            </p>
        </section >
    );
}

export default Info;