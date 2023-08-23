import { useState } from 'react'
import './styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('val init')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input    value={inputValue}
        onChange={(e) => chekInputValue(e.target.value)}
        onBlur={handleBlur}
        />
		</footer>
	)
    function chekInputValue(val){
        setInputValue(val);
     }
     function handleBlur(){
        !inputValue.includes("@") && alert("attention la mail n'est pas valide")
     }
}


export default Footer
