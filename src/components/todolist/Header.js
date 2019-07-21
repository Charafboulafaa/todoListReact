import React, { Component } from 'react';
import { Consumer } from '../Context'

export default class Header extends Component {
    
    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date();

        return(
        <Consumer>
            {value=>(
                <div className="flex bg-pink-700 h-20 w-full text-left justify-between p-3 text-white text-lg relative">
                    <div>
                        <p><span className="font-extrabold">{dayNames[date.getDay()]},</span> {date.getDate()}</p>
                        <p className="font-normal text-sm">{monthNames[date.getMonth()]}</p>
                    </div>
                    <div>
                        <p className="font-normal text-sm">{value.todos.filter((todo)=>(todo.isChecked !== false)).length}/{value.todos.length} Done</p>
                    </div>

                    <button className="absolute right-0 bottom-0 bg-white text-pink-700 text-center w-12 h-12 rounded-full border-2 border-transparent hover:bg-pink-100 -mb-5 mr-2 outline-none text-2xl">+</button>
                </div>
            )}
        </Consumer>
        )
    }
}
