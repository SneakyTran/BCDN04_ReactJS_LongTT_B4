import React, { Component } from "react";
import { connect } from "react-redux";

class SeatList extends Component {
    renderSeat = () => {
        return this.props.seats.map((seat, index) => {
            let { danhSachGhe } = seat;
            let title_index = index;
            return (
                <tr key={index}>
                    <td>
                        <p className="seat__title mr-1">
                            {index > 0 ? seat.hang : ""}
                        </p>
                    </td>
                    {danhSachGhe.map((ghe, index) => {
                        if (title_index === 0) {
                            return (
                                <td key={index} className="seat__title pb-3">
                                    {ghe.soGhe}
                                </td>
                            );
                        }
                        let seatType = "ghe";
                        if (ghe.daDat) {
                            seatType = "gheDuocChon";
                        } else if (ghe.isSelected) {
                            seatType = "gheDangChon";
                        }
                        return (
                            <td key={index}>
                                <p
                                    onClick={() => {
                                        let isSelected = ghe.isSelected
                                            ? false
                                            : true;

                                        this.props.dispatch({
                                            type: "SELECT_SEAT",
                                            seat: ghe.soGhe,
                                            isSelected: isSelected,
                                        });
                                    }}
                                    className={seatType}
                                >
                                    {ghe.soGhe}
                                </p>
                            </td>
                        );
                    })}
                </tr>
            );
        });
    };

    render() {
        return (
            <div className="col-8 text-center">
                <h1 className="bookingMovie text-warning">
                    FILM TICKET BOOKING
                </h1>
                <p className="text-white m-0 font-weight-bold">Screen</p>
                <div className="screen"></div>
                <div className="seat__content pt-5 pb-3">
                    <table className="ml-3">
                        <thead></thead>
                        <tbody>{this.renderSeat()}</tbody>
                    </table>
                </div>
                <button
                    onClick={() => {
                        this.props.dispatch({
                            type: "COMFIRM_SELECTION",
                        });
                    }}
                    className="btn btn-success"
                >
                    Confirm Selection
                </button>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        seats: rootReducer.seatListReducer,
    };
};

export default connect(mapStateToProps)(SeatList);
