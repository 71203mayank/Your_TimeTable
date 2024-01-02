import React from 'react'

export default function CoreTwo(props) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>8:00 - 8:50</th>
                    <th>9:00 - 11:50</th>
                    <th className='blank'></th>
                    <th>1:00 - 1:50</th>
                    <th>2:00 - 2:50</th>
                    <th>3:00 - 3:50</th>
                    <th>4:00 - 4:50</th>
                    <th>5:00 - 5:50</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr className='mon'>
                    <td>Mon</td>
                    <td className='f'>F <br></br>{props.F}</td>
                    <td className='p'>P2 <br></br>{props.P}</td>
                    <td className='blank'></td>
                    <td className='d dplus'>D2+ <br></br> {props.Dplus && `${props.D}`}</td>
                    <td className='a'>A2 <br></br>{props.A}</td>
                    <td className='b'>B2 <br></br>{props.B}</td>
                    <td className='c'>C2 <br></br>{props.C}</td>
                    <td className='g'>G <br></br>{props.G}</td>
                </tr>
                <tr className='tue'>
                    <td>Tue</td>
                    <td className='h'>H <br></br>{props.H}</td>
                    <td className='q'>Q2 <br></br>{props.Q}</td>
                    <td className='blank'></td>
                    <td className='e eplus'>E2+ <br></br> {props.Eplus && `${props.E}`}</td>
                    <td className='b'>B2 <br></br>{props.B}</td>
                    <td className='c'>C2 <br></br>{props.C}</td>
                    <td className='d'>D2 <br></br>{props.D}</td>
                    <td className='f'>F <br></br>{props.F}</td>
                </tr>
                <tr className='wed'>
                    <td>Wed</td>
                    <td className='g'>G <br></br>{props.G} </td>
                    <td className='r'>R2 <br></br>{props.R}</td>
                    <td className='blank'></td>
                    <td  className='a aplus'>A2+ <br></br>{props.Aplus && `${props.A}`}</td>
                    <td className='c'>C2 <br></br>{props.C}</td>
                    <td className='d'>D2 <br></br>{props.D}</td>
                    <td className='e'>E2 <br></br>{props.E}</td>
                    <td className='h'>H <br></br>{props.H}</td>
                </tr>
                <tr className='thu'>
                    <td>Thu</td>
                    <td className='f'>F <br></br>{props.F}</td>
                    <td className='s'>S2 <br></br>{props.S}</td>
                    <td className='blank'></td>
                    <td className='b bplus'>B2+ <br></br>{props.Bplus && `${props.B}`}</td>
                    <td className='d'>D2 <br></br>{props.D}</td>
                    <td className='e'>E2 <br></br>{props.E}</td>
                    <td className='a'>A2 <br></br>{props.A}</td>
                    <td className='g'>G <br></br>{props.G}</td>
                </tr>
                <tr className='fri'>
                    <td>Fri</td>
                    <td className='h'>H <br></br>{props.H}</td>
                    <td className='t'>T2 <br></br>{props.T}</td>
                    <td className='blank'></td>
                    <td  className='c cplus'>C2+ <br></br> {props.Cplus && `${props.C}`}</td>
                    <td  className='e'>E2 <br></br>{props.E}</td>
                    <td className='a'>A2 <br></br>{props.A}</td>
                    <td className='b'>B2 <br></br>{props.B}</td>
                    <td className='f fplus'>F+ <br></br>{props.Fplus && `${props.F}`}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
