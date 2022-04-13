import { SectionInformation } from './SectionInformation'
import { Slider } from './Slider'
import { Products } from './Products'
import './styles.css'


export const Initial = () => {

    return (
        <div className='initialContainer'>
            <Slider />
            <SectionInformation />
            <Products

            />
        </div>
    )
}
