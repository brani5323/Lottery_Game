import { useState } from "react"

import {genTicket, sum} from "./helper";
import Ticket from "./ticket";

export default function Lottery({n = 3, winningSum= 15}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;


    // logic behind this is we have to buy new ticket so we have to generate new number
    let buyTicket = () => {
        setTicket(genTicket(n));
    }


    return(
    <div>
        <h1>Lottery Game!</h1>
         <Ticket ticket={ticket} />
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
);
} 