const React = require ('react')
const Default = require('./layouts/default')

function Show({ bread }){
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                bread.hasGluten ? <span> does </span> : <span>does not</span>
                }
                have gluten
            </p>
            <img src= {bread.image} alt = {bread.name} />
            <li>
            <a href = {'/breads'} >Go Home</a> 
            </li>
        </Default>
    )
}

module.exports = Show