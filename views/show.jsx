const React = require ('react')
const Default = require('./layouts/default')

function Show({ bread, index }){
    return (
        <Default>
            <a href={`/breads/${bread.id}/edit`}>
            <button>Edit</button>
            </a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type= 'submit' value ='DELETE'/>
            </form>

            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                bread.hasGluten ? <span> does </span> : <span>does not</span>
                }
                have gluten
            </p>
            <img src= {bread.image} alt = {bread.name} />
            <p>{bread.getBakedBy()}</p>
            <li>
            <a href = {'/breads'} >Go Home</a> 
            </li>
        </Default>
    )
}

module.exports = Show