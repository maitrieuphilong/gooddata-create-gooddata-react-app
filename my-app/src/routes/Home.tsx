import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Md from "../md/full";

const style = { height: 300 };

const Home: React.FC = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Md.Insights.InsightHasNoFilter} />
        </div>
    );
};

export default Home;