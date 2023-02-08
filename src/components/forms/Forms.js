
import { useState } from "react"

const Forms=({onGenerate})=>{
    const generar=(onGenerate)
        
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setNum]=useState('')

    // const handleInputChange=(e)=>{
    //     setName(e.target.name.value)
    // }

    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    //     const name= event.target.name.value;
    //     console.log(name)

    // }

    return(
        <div>
            <form onSubmit={ev=>{
                ev.preventDefault();
                generar(name,phone,email)
            }}> 
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" 
                    class="form-control" 
                    placeholder="Ingrese su nombre"
                    value={name} 
                    onChange={ev=>setName(ev.target.value)}/>
            </div>
            <div class="form-group">
                <label >Email</label>
                <input type="email" class="form-control" placeholder="Ingrese su email"
                value={email} 
                onChange={ev=>setEmail(ev.target.value)}/>
            </div>
            <div class="form-group">
            <label>Telefono</label>
                <input type="text" class="form-control"  placeholder="Ingrese su numero de telofono" value={phone} 
                    onChange={ev=>setNum(ev.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary" >Generar orden</button>
            </form>
           
        </div>
)

}
export default Forms