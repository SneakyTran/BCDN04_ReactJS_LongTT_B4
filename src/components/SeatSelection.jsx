import React, { Component } from "react";
import { connect } from "react-redux";

class SeatSelection extends Component {
    renderBooking = () => {
        console.log(this.props);
    };

    render() {
        return (
            <div className="col-4">
                <h1 className="bookingMovie ss__title">YOUR SELECTION SEAT</h1>
                <div className="seat__type mt-5 bookingMovie">
                    <div className="d-flex">
                        <div className="gheDuocChon mb-1"></div>
                        <p className="ml-2 text-white">Ghế đã đặt</p>
                    </div>
                    <div className="d-flex">
                        <div className="gheDangChon mb-1"></div>
                        <p className="ml-2 text-white">Ghế đang chọn</p>
                    </div>
                    <div className="d-flex">
                        <div className="ghe m-0"></div>
                        <p className="ml-2 text-white">Ghế chưa đặt</p>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr className="text-white">
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderBooking()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        seatBooking: rootReducer.seatBookingReducer,
    };
};

export default connect(mapStateToProps)(SeatSelection);
