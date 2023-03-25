import { colors } from "../constants";

export function getStatusColor(status){
    let color;
    switch (status) {
          case 'delayed':
            color = 'orange';
            break;
          case 'en-route':
            color = 'blue';
            break;
          case 'cancelled':
            color = colors.red;
            break;
          case 'landed':
            color = colors.green;
            break;
          case 'scheduled':
            color = colors.lightblue
            break;
          default:
            color = 'black';
            break;
    }
    return color;
}