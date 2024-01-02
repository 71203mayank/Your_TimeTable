import React from 'react'

export default function Core(props) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>8:00 - 8:50</th>
                    <th>9:00 - 9:50</th>
                    <th>10:00 - 10:50</th>
                    <th>11:00 - 11:50</th>
                    <th>12:00 - 12:50</th>
                    <th className='blank'></th>
                    <th>2:00 - 4:50</th>
                    <th>5:00 - 5:50</th>
                </tr>
            </thead>
            <tbody>
                <tr className='mon'>
                    <td>Mon</td>
                    <td className='f'>F <br></br>{props.F}</td>
                    <td className='a'>A1 <br></br>{props.A}</td>
                    <td className='b'>B1 <br></br>{props.B}</td>
                    <td className='c'>C1 <br></br>{props.C}</td>
                    <td className='d dplus'>D1+ <br></br> {props.Dplus && `${props.D}`}</td>
                    <td className='blank'></td>
                    <td className='p'>P1 <br></br>{props.P}</td>
                    <td className='g'>G <br></br>{props.G}</td>

                </tr>
                <tr className='tue'>
                    <td>Tue</td>
                    <td className='h'>H <br></br>{props.H}</td>
                    <td className='b'>B1 <br></br>{props.B}</td>
                    <td className='c'>C1 <br></br>{props.C}</td>
                    <td className='d'>D1 <br></br>{props.D}</td>
                    {/* <td>E+ {props.E}</td> */}
                    <td className='e eplus'>E1+ <br></br> {props.Eplus && `${props.E}`}</td>
                    <td className='blank'></td>
                    <td className='q'>Q1 <br></br>{props.Q}</td>
                    <td className='f'>F <br></br>{props.F}</td>
                </tr>
                <tr className='wed'>
                    <td>Wed</td>
                    <td className='g'>G <br></br>{props.G}</td>
                    <td className='c'>C1 <br></br>{props.C}</td>
                    <td className='d'>D1 <br></br>{props.D}</td>
                    <td className='e'>E1 <br></br>{props.E}</td>
                    {/* <td>A+ {props.A}</td> */}
                    <td className='a aplus'>A1+ <br></br>{props.Aplus && `${props.A}`}</td>
                    <td className='blank'></td>
                    <td className='r'>R1 <br></br>{props.R}</td>
                    <td className='h'>H <br></br>{props.H}</td>
                </tr>
                <tr className='thu'>
                    <td>Thu</td>
                    <td className='f'>F <br></br>{props.F}</td>
                    <td className='d'>D1 <br></br>{props.D}</td>
                    <td className='e'>E1 <br></br>{props.E}</td>
                    <td className='a'>A1 <br></br>{props.A}</td>
                    {/* <td>B+ {props.B}</td> */}
                    <td className='b bplus'>B1+ <br></br>{props.Bplus && `${props.B}`}</td>
                    <td className='blank'></td>
                    <td className='s'>S1 <br></br>{props.S}</td>
                    <td className='g'>G <br></br>{props.G}</td>
                </tr>
                <tr className='fri'>
                    <td>Fri</td>
                    <td className='h'>H <br></br>{props.H}</td>
                    <td className='e'>E1 <br></br>{props.E}</td>
                    <td className='a'>A1 <br></br>{props.A}</td>
                    <td className='b'>B1 <br></br>{props.B}</td>
                    {/* <td>C+ {props.C}</td> */}
                    <td className='c cplus'>C1+ <br></br> {props.Cplus && `${props.C}`}</td>
                    <td className='blank'></td>
                    <td className='t'>T1 <br></br>{props.T}</td>
                    <td className='f fplus'>F+ <br></br>{props.Fplus && `${props.F}`}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
