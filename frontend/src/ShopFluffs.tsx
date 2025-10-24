import FluffItem from './FluffItem.tsx'
import item1 from './assets/item1.jpg'
import item2 from './assets/item2.jpg'
import item3 from './assets/item3.jpg'
import placehold from './assets/placehold.jpg'
function ShopFluffs() {
    return (
        <div className='flex flex-col gap-7 pt-15'>
            <img src={placehold} className='h-35 w-1200 object-cover'/>
            <div className='flex justify-between gap-5'>
                <FluffItem image={item1} rank='border-pink-200' />
                <FluffItem image={item2} rank='border-pink-200' />
                <FluffItem image={item3} rank='border-pink-200' />
            </div>
        </div>
    );
}
export default ShopFluffs;