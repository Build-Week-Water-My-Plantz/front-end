import React, {useState} from 'react'

export default function AddPlant (props){
    const [plantName, setPlantName] = useState('')
    const [nickName, setNickName] = useState('')
    const [waterNeeds, setWaterNeeds] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const change = (e) => {
            const { name, value } = e.target;
        }
    return (
        <form onSubmit={onSubmit}>
           
                <label>Plant Breed
                {//could try and bring in the plant name dynamically here from an API, maybe based on user input or add the correct name to the plant list once user submits their plant
                    }   
                <input type='text'
                 placeholder='plant name here'
                 value={plantName}
                 onChange={(e)=>setPlantName(e.target.value)}/>
            </label>
            
                <label>Nickname for your Plant
                <input type='text'
                 placeholder='nickname for your plant'
                 value={nickName}
                 onChange={(e)=>setNickName(e.target.value)}/>
            </label>
            
                <label>Amount of Water Plant Needs
                <input type='text'
                 placeholder='plant name here'
                 value={waterNeeds}
                 onChange={(e)=>setWaterNeeds(e.target.value)}/>
            </label>
            
                <label>When to Water
                <input type='text'
                 placeholder='plant name here'
                 value={time}
                 onChange={(e)=>setTime(e.target.value)}/>
                </label>
            <input type='submit' value='Save Plant' />
        </form>


    )
                }}