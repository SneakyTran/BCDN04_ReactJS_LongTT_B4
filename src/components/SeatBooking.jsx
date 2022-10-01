import React, { Component } from "react";
import SeatList from "./SeatList";
import SeatSelection from "./SeatSelection";

export default class SeatBooking extends Component {
    render() {
        return (
            <div className="bg ">
                <div className="bt__content container">
                    <div className="row">
                        <SeatList />
                        <SeatSelection />
                    </div>
                </div>
            </div>
        );
    }
}
