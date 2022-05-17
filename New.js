import React from 'react'

const New = (props) => {
    const shaggy = props.det 
    const head = props.head  
    const handle = props.handle 
    // const Name = props.Name 

    return (
        <div>
            {shaggy.map((detail)=>{
            const {title,body,id,author,image} = detail

            return(
                <div className="move" key={id}> 
                    <h2>Title : {title}</h2>
                    <h2>Description : {body}</h2>
                    <h2>Written by : {author}</h2>
                    <img src={image} alt="" srcset="" />

                    <div>
                        <button className='delBtn' onClick={()=> head(detail.id)} style={{backgroundColor: 'blue', color: 'white' }}>click</button>
                    </div>
                </div>
            )
        })}
            

       <div className="btn">
       <button onClick={handle} className="btn2" >Clear All</button>

       </div>

        </div>
        )
}

export default New