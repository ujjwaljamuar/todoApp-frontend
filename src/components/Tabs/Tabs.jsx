import { useDispatch } from "react-redux";

import { TABS } from "../../redux/actions/type";
import './Tabs.css';
import { toggleTabs } from "../../redux/actions/api";

const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTabs(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;