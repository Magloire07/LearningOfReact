let n=0;

function render (){
const title = React.createElement('h1',{},"bonjour les gens ",React.createElement('span',{},n.toString().padStart(4,"0")));
ReactDOM.render(title,document.querySelector("#app"));

}

window.setInterval(()=>{
    n++;
    render();
},1000);