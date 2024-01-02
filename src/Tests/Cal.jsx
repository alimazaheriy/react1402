import {DtCalendar} from "react-calendar-datetime-picker";
import 'react-calendar-datetime-picker/dist/style.css';
import {useState} from "react";
import axios from "axios";


export const Cal=()=>{

        const [date,setDate]=useState(null)
        const [isOff,setIsOff]=useState(false)
        const [events,setEvents]=useState([])

    /*const updateInitValue = () => {
        setDate({
            year: 2020,
            month: 12,
            day: 25
        })
    }*/

        const getOccasion=()=>{
            if(date==null)
                return;
            const year=date.year;
            const month=date.monthIndex+1;
            const day=date.day;

            const promise=axios.get(`https://holidayapi.ir/jalali/${year}/${month}/${day}`)
            console.log(promise)
            promise.then(result=>{
                console.log(result);

                const {data}=result;
                setIsOff(data.is_holiday);
                setEvents(data.events)
            })
            promise.catch(data=>{
                console.log(data)
            })
        }

    const getOccasion2=async()=>{
        if(date==null)
            return;
        const year=date.year;
        const month=date.month+1;
        const day=date.day;

        try {
            const result = await axios.get(`https://holidayapi.ir/jalali/${year}/${month}/${day}`)
            const {data}=result;

            setIsOff(data.is_holiday);
            setEvents(data.events)
        }
        catch (e)
        {
            console.log(e)
        }
    }

    return(<>
        {/*<button onClick={updateInitValue}>
            مقدار آپدیت شده
        </button>*/}
        <DtCalendar value={date}
                    onChange={value => setDate(value)}
                    local='fa'
                    withTime
                    showWeekend
        />
        <button className={"btn btn-primary"} onClick={() => getOccasion2()}>Get Occasion</button>

        {
            isOff == true &&
            <p className={"alert alert-success"}>امروز تعطیله :)</p>
        }
        {
            isOff == false &&
            <p className={"alert alert-danger"}>امروز تعطیل نیس :(</p>
        }

        <ul>
            {
                events && events.length > 0 &&
                events.map(e => <li key={e.description}>{e.description}</li>)
            }
        </ul>
    </>)
}