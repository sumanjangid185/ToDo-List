import './itemDate.css'

// import './ItemDate.css'
const DateCompoent = (props) =>{
    const date = props.date || 'Date not Sent'
    const month = props.month || 'Month Not avaiable'
    const year = props.year || 'Year Not avaiable'
    // const name = props.hello
    // console.log(props)

    return (
        <div>
            <span className="date"> {date} </span>
            <span className="date"> {month}</span>
            <span className="date"> {year}</span>
            {/* <span className="date"> {name}</span> */}
        </div>
    )
}

export default DateCompoent