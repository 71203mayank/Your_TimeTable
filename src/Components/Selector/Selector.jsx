import React, {useState, useRef} from 'react'
import "./Selector.css"
import html2canvas from 'html2canvas';
import Core from '../Core/Core';
import CoreTwo from '../Core/CoreTwo';

export default function Selector() {
    const [noon,setNoon] = useState(true);
    const [A,setA] = useState('');
    const [Aplus,setAplus] = useState(false);
    const [B,setB] = useState('');
    const [Bplus,setBplus] = useState(false);
    const [C,setC] = useState('');
    const [Cplus,setCplus] = useState(false);
    const [D,setD] = useState('');
    const [Dplus,setDplus] = useState(false);
    const [E,setE] = useState('');
    const [Eplus,setEplus] = useState(false);
    const [F,setF] = useState('');
    const [Fplus,setFplus] = useState(false);
    const [G,setG] = useState('');
    const [H,setH] = useState('');
    const [P,setP] = useState('');
    const [Q,setQ] = useState('');
    const [R,setR] = useState('');
    const [S,setS] = useState('');
    const [T,setT] = useState('');
    const [title,setTitle] = useState('');
    

    const divRef = useRef();
    const handleDownload = () => {
        const divContent = divRef.current;
        html2canvas(divContent).then((canvas) => {
            const dataUrl = canvas.toDataURL('image/jpeg');
            const link = document.createElement('a');
            link.download = 'time_table.jpg';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }

    const handleChangeTitle = (event) => {
        const title = event.target.value;
        setTitle(title);
    }

    const handleChangeSlot = (event) => {
        // console.log("i m changing")
        // console.log(event.target)
        const className = event.target.className;
        // console.log(className);
        const subject = event.target.value;
        // console.log(className);
        if(className === 'A-slot'){
            setA(subject);
        }
        else if(className === 'B-slot'){
            setB(subject);
        }
        else if(className === 'C-slot'){
            setC(subject);
        }
        else if(className === 'D-slot'){
            setD(subject);
        }
        else if(className === 'E-slot'){
            setE(subject);
        }
        else if(className === 'F-slot'){
            setF(subject);
        }
        else if(className === 'G-slot'){
            setG(subject);
        }
        else if(className === 'H-slot'){
            setH(subject);
        }
        else if(className === 'P-slot'){
            setP(subject);
        }
        else if(className === 'Q-slot'){
            setQ(subject);
        }
        else if(className === 'R-slot'){
            setR(subject);
        }
        else if(className === 'S-slot'){
            setS(subject);
        }
        else if(className === 'T-slot'){
            setT(subject);
        }
    }

    const handelNoonChange = (event) => {
        const newNoon = event.target.value;
        console.log(newNoon);
        if(newNoon === 'Forenoon Slots'){
            setNoon(true);
        }
        else{
            setNoon(false);
        }

        setA('');
        setB('');
        setC('');
        setD('');
        setE('');
        setAplus(false);
        setBplus(false);
        setCplus(false);
        setDplus(false);
        setEplus(false);
        // setAplus(false);
        // setB('');

    }

    const includePlusSlot = (event) => {
        const status = event.target.value;
        console.log(status);
        const className = event.target.className;
        if(status === 'Include plus slot'){
            if(className === 'A-slot'){
                setAplus(true);
            }
            else if(className === 'B-slot'){
                setBplus(true);
            }
            else if(className === 'C-slot'){
                setCplus(true);
            }
            else if(className === 'D-slot'){
                setDplus(true);
            }
            else if(className === 'E-slot'){
                setEplus(true);
            }
            else if(className === 'F-slot'){
                setFplus(true);
            }
        }
        else{
            if(className === 'A-slot'){
                setAplus(false);
            }
            else if(className === 'B-slot'){
                setBplus(false);
            }
            else if(className === 'C-slot'){
                setCplus(false);
            }
            else if(className === 'D-slot'){
                setDplus(false);
            }
            else if(className === 'E-slot'){
                setEplus(false);
            }
            else if(className === 'F-slot'){
                setFplus(false);
            }
        }
    }

    const handleReset = () => {
        setA('');
        setB('');
        setC('');
        setD('');
        setE('');
        setF('');
        setG('');
        setH('');
        setP('');
        setQ('');
        setR('');
        setS('');
        setT('');
        setTitle('');

    }
    
    return (
    <div className='selector'>
        <div className='tip-conatiner'>
            <div className='idea-img-container'>
                <img src='./Assets/idea.png' alt='idea'></img>
            </div>
            <div>Use on a mobile phone for a better experience.</div>
        </div>
        <div className='controls'>
            <div className='control-title'>
                Title:
                <input type = 'text' value={title} onChange={handleChangeTitle}></input>
            </div>
            <div className='control-slots'>
                Select the slot:
                <select onChange={handelNoonChange}>
                    <option>Forenoon Slots</option>
                    <option>Afternoon Slots</option>
                </select>
            </div> 
        </div>


        <div className='core-slots'>
            {noon && 
            <div className='forenoon-slot'>
                <div className='A1-slot A-slot slot'>
                    <div>A1</div>
                    <div> <input className='A-slot' type='text' value={A}  onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='A-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='B1-slot B-slot slot'>
                    <div>B1</div>
                    <div> <input className='B-slot' type='text' value={B} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='B-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='C1-slot C-slot slot'>
                    <div>C1</div>
                    <div> <input className='C-slot' type='text' value={C} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='D1-slot D-slot slot'>
                    <div>D1</div>
                    <div> <input className='D-slot' type='text' value={D} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='D-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='E1-slot E-slot slot'>
                    <div>E1</div>
                    <div> <input className='E-slot' type='text' value={E} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='E-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
            </div>}
            {!noon && 
            <div className='afternoon-slot'>
                <div className='A2-slot A-slot slot'>
                    <div>A2</div>
                    <div> <input className='A-slot' type='text' value={A} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='A-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='B2-slot B-slot slot'>
                    <div>B2</div>
                    <div> <input className='B-slot' type='text' value={B} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='B-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='C2-slot C-slot slot'>
                    <div>C2</div>
                    <div> <input className='C-slot' type='text' value={C} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='D2-slot D-slot slot'>
                    <div>D2</div>
                    <div> <input className='D-slot' type='text' value={D} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='D-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='E2-slot E-slot slot'>
                    <div>E2</div>
                    <div> <input className='E-slot' type='text' value={E} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='E-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
            </div>}
        </div>
        <div className='elective-slots'>
                <div className='F-slot F-slot slot'>
                    <div>F</div>
                    <div> <input className='F-slot' type='text' value={F} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select className='F-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='G-slot G-slot slot'>
                    <div>G</div>
                    <div> <input className='G-slot' type='text' value={G} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='H-slot H-slot slot'>
                    <div>H</div>
                    <div> <input className='H-slot' type='text' value={H} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                {/* <h3> Laboratory Slots</h3> */}
                <div className='P-slot P-slot slot'>
                    <div>P</div>
                    <div> <input className='P-slot' type='text' value={P} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='Q-slot Q-slot slot'>
                    <div>Q</div>
                    <div> <input className='Q-slot' type='text' value={Q} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='R-slot R-slot slot'>
                    <div>R</div>
                    <div> <input className='R-slot' type='text' value={R} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='S-slot S-slot slot'>
                    <div>S</div>
                    <div> <input className='S-slot' type='text' value={S} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
                <div className='T-slot T-slot slot'>
                    <div>T</div>
                    <div> <input className='T-slot' type='text' value={T} onChange={handleChangeSlot}></input></div>
                    <div className='plus-slot'>
                        <select disabled className='C-slot' onChange={includePlusSlot}>
                            <option>exclude plus slot</option>
                            <option>Include plus slot</option>
                        </select>
                    </div>
                </div>
        </div>
        <div className='reset-btn-container btn-container'>
            <button onClick={handleReset}>Reset</button>
        </div>
        <div className = "preview">
            <div className='preview-title'>Preview</div>
            <div className='time-table-container' ref={divRef}>
                <div className='table-title'>{title}</div>
                <div className='time-table'>
                    {noon && <div className='forenoon-table table'>
                        <Core
                            A = {A}
                            Aplus = {Aplus}
                            B = {B}
                            Bplus = {Bplus}
                            C = {C}
                            Cplus = {Cplus}
                            D = {D}
                            Dplus = {Dplus}
                            E = {E}
                            Eplus = {Eplus}
                            F = {F}
                            Fplus = {Fplus}
                            G = {G}
                            H = {H}
                            P = {P}
                            Q = {Q}
                            R = {R}
                            S = {S}
                            T = {T}
                        />
                    </div>}
                    {!noon && <div className='afternoon-table table'>
                        <CoreTwo
                            A = {A}
                            Aplus = {Aplus}
                            B = {B}
                            Bplus = {Bplus}
                            C = {C}
                            Cplus = {Cplus}
                            D = {D}
                            Dplus = {Dplus}
                            E = {E}
                            Eplus = {Eplus}
                            F = {F}
                            Fplus = {Fplus}
                            G = {G}
                            H = {H}
                            P = {P}
                            Q = {Q}
                            R = {R}
                            S = {S}
                            T = {T}
                        />
                    </div>}
                </div>
            </div>
            <div className='download-btn-container btn-container'>
                <button onClick={handleDownload}>Download</button>
            </div>
        </div>
    </div>
    )
}
