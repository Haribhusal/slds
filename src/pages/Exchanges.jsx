import React from 'react'
import AreaChartComponent from '../components/AreaChartComponent'
import PieChartComponent from '../components/PieChartComponent'
import StackedBarChartComponent from '../components/StackedBarChart'
import TreeMapComponent from '../components/TreeMapComponent'

const Exchanges = () => {
    return (
        <>
            <div className="exchangesGrid">
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Defi Quarterly Performance
                        </h3>
                        <div className="label">
                            Label
                        </div>
                    </div>
                    <>
                        <AreaChartComponent />
                    </>
                </div>
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Asset Breakdown
                        </h3>
                        <div className="label">
                            Pie Chart
                        </div>
                    </div>
                    <>
                        <StackedBarChartComponent />
                    </>
                </div>
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Assets Breakdown
                        </h3>
                        {/* <div className="label">
                            Some Label
                        </div> */}
                    </div>
                    <>
                        <PieChartComponent />
                    </>
                </div>
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Assets Price Chart
                        </h3>
                        {/* <div className="label">
                            Some Label
                        </div> */}
                    </div>
                    <>
                        <TreeMapComponent></TreeMapComponent>
                    </>
                </div>
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Chain Split
                        </h3>
                        <div className="label">
                            Some Label
                        </div>
                    </div>
                    <>
                        <PieChartComponent />
                    </>
                </div>
            </div>
        </>
    )
}

export default Exchanges