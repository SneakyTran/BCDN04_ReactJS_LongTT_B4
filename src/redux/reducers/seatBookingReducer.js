import data from "../../data/danhSachGhe.json";

const seatBooking = [
    {
        seat: "",
        price: 0,
    },
];

export const seatBookingReducer = (state = seatBooking, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
