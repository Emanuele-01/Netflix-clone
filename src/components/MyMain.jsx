import { Component } from "react";
import MyCarosel from "./MyCarosel";
import MyCaroselSecond from "./MyCaroselSecond";
import MyCaroselThird from "./MyCaroselThird";



class MyMain extends Component{
    render(){
        return(
            <>
                <MyCarosel/>
                <MyCaroselSecond/>
                <MyCaroselThird/>
            </>
        )
    }
}

export default MyMain;