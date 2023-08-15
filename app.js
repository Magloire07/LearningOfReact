
const title ="La maison jungle"
function Header (){
    return (<div>
        <h1>{title.toUpperCase()}</h1>
    </div>)

}
function Description() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
}
function Banner() {
    return (<div>
        <Header />
        <Description />
    </div>)
}
function Cart(){
let p1=8;
let p2=10;
let p3=15;
    return (
    <div>
    <h2>Panier</h2>
    <ul>
        <li> monstera: {p1}€</li>
        <li> lierre : {p2}€</li>
        <li>bouquet de fleurs : {p3}€</li>
    </ul>
    Total: {p1+p2+p3}€
    </div>);
}

ReactDOM.render( <React.Fragment><Header/><Description/><Cart/></React.Fragment>,document.getElementById("root"));

