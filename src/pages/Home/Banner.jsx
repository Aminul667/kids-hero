import banner from '../../assets/images/bannerPic.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <h2 className="title"><span className="text-colorPrimary">Discover</span> New Collection</h2>
                <h3 className="title">World Class Kids Toy</h3>
            </div>
            <div className='w-1/2'>
                <img src={banner}/>
            </div>
        </div>
    );
};

export default Banner;