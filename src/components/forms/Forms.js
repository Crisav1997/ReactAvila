import './Forms.css'
import { useState } from "react"

const Forms=({onGenerate})=>{
    const generar=(onGenerate)
        
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setNum]=useState('')

    return(
        <div className="container-fluid bgMain">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
            <form onSubmit={ev=>{
                ev.preventDefault();
                if((name==="")||(phone==="")||(email==="")){
                    
                }else{
                generar(name,phone,email)}
            }}> 
            <div className="form-group mt-2">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Ingrese su nombre" value={name} onChange={ev=>setName(ev.target.value)}/>
            </div>
            <div className="form-group">
                <label >Email</label>
                <input type="email" className="form-control" placeholder="Ingrese su email"value={email} onChange={ev=>setEmail(ev.target.value)}/>
            </div>
            <div className="form-group">
            <label>Telefono</label>
                <input type="text" className="form-control"  placeholder="Ingrese su numero de telofono" value={phone} onChange={ev=>setNum(ev.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mt-4" >Generar orden</button>
            </form>
            </div>
            <div className="col-sm-3"></div>
            </div>
        </div>
)

}

export default Forms