import React from 'react'
import BarChartComponent from '../components/BarChart'
import DataTableComponent from '../components/DataTableComponent'

const Defi = () => {
    return (
        <>

            <div className="exchangesGrid">
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Some Title
                        </h3>
                        <div className="label">
                            Some Label
                        </div>
                    </div>
                    <>
                        <DataTableComponent />
                    </>
                </div>
                <div className="item">
                    <div className="heading">
                        <h3 className="title">
                            Some Title
                        </h3>
                        <div className="label">
                            Some Label
                        </div>
                    </div>
                    <>
                        <BarChartComponent />
                    </>
                </div>
            </div>
        </>
    )
}

export default Defi