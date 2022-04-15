import { SectionInformation } from './SectionInformation'
import { Slider } from './Slider'
import { Products } from './Products'
import './styles.css'


export const Initial = (props: any) => {
    const {handleCart} = props

    return (
        <div className='initialContainer'>
            <Slider />
            <SectionInformation />
            <Products
                handleCart={handleCart}
            />
        </div>
    )
}
