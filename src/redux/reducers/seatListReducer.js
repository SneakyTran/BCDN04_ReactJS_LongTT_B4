import data from "../../data/danhSachGhe.json";
const seats = data;

export const seatListReducer = (state = seats, action) => {
    switch (action.type) {
        case "SELECT_SEAT":
            let seatRow = state.findIndex((seat) => {
                return seat.hang === action.seat.substring(0, 1);
            });
            let seatIndex = state[seatRow].danhSachGhe.findIndex((seat) => {
                return seat.soGhe === action.seat;
            });
            let seatFound = state[seatRow].danhSachGhe[seatIndex];
            state[seatRow].danhSachGhe[seatIndex] = {
                ...seatFound,
                isSelected: action.isSelected,
            };
            return [...state];

        case "SEAT_CONFIRM":
            
            return state;

        default:
            return state;
    }
};
