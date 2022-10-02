import React, { Component } from "react";
import { connect } from "react-redux";

class SeatSelection extends Component {
    total = 0;
    renderBooking = () => {
        this.total = 0;
        return this.props.seatBooking.map((seatList, index) => {
            let seats = seatList.danhSachGhe;
            return seats.map((seat, index) => {
                if (seat.daDat) {
                    this.total += seat.gia;
                    return (
                        <tr key={index}>
                            <td className="text-warning">{seat.soGhe}</td>
                            <td className="text-warning">{seat.gia}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        this.props.dispatch({
                                            type: "CANCEL_TICKET",
                                            seat: seat.soGhe,
                                        });
                                    }}
                                    className="btn btn-danger"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </td>
                        </tr>
                    );
                }
            });
        });
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
                    <tbody>
                        {this.renderBooking()}
                        <tr>
                            <td className="text-warning">Tổng tiền</td>
                            <td className="text-warning">
                                {this.total.toLocaleString()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        seatBooking: rootReducer.seatListReducer,
    };
};

export default connect(mapStateToProps)(SeatSelection);
