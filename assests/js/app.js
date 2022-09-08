let btn = document.querySelector( ".button" )
let color = "dark"

if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "dark-mode" )
}
btn.addEventListener( "click", function ()
{
    document.body.classList.toggle( "dark-mode" )
    if ( document.body.className === "dark-mode" )
    {
        window.localStorage.setItem( "color", color )
    } else
    {
        window.localStorage.removeItem( "color" )
    }
} )