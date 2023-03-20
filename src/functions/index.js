import { colors } from "../constants";

export function getStatusColor(status){
    let color;
    switch (status) {
          case 'delayed':
            color = 'orange';
            break;
          case 'en-route':
            color = 'green';
            break;
          case 'cancelled':
            color = colors.red;
            break;
          case 'landed':
            color = colors.primary;
            break;
          case 'scheduled':
            color = 'green'
            break;
          default:
            color = 'black';
            break;
    }
    return color;
}