import css from "./Loader.module.css";
import { DotLoader } from "react-spinners";
import { FC } from "react";

const Loader: FC = () => {
    return (
    <div className={css.loader}>
        <DotLoader size={60} color="#36d7b7" />
    </div>
    );
};

export default Loader;
