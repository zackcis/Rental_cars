
import './firstSection.sass'

export const FirstSectionAbout = () => {
    return (
        <div className='mx-28 flex flex-col gap-9'>
            <div className='flex flex-col text-center p-20 gap-5'>
                <p className='font-bold text-center text-4xl'>About Us</p>
                <p className='text-[#b0b0b0]'>Home / <span className='text-black'>About Us</span></p>
            </div>
            <div className='flex  gap-5 '>
                <div className='w-[30%]'>
                    <h1 className='text-4xl font-bold w-[60%]'>Where Every Drive Feels Extraoridinary</h1>
                </div>
                <div className='w-[65%] flex flex-wrap'>
                    <div className='w-[50%]'>
                        <h3 className='font-bold text-xl'>Variety Brand</h3>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi.</p>
                    </div>
                    <div className='w-[50%]'>
                        <h3 className='font-bold text-xl'>Awesome support</h3>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi.</p>
                    </div>
                    <div className='w-[50%]'>
                        <h3 className='font-bold text-xl'>Maximum Freedom</h3>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi.</p>
                    </div>
                    <div className='w-[50%]'>
                        <h3 className='font-bold text-xl'>Flexibility on the go</h3>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
