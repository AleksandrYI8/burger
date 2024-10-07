import Image from "next/image";
import DashboardProductModal from "./Dashboard_product_modal";

type Props = {
    item: any;
};

const Category_Dashboard: React.FC<Props> = ({ item }) => {

    return (

        <> <div className="relative mb-[1%] flex  items-center overflow-hidden bg-gray-200 gap-[10px] text-black w-[45%] h-[15vh] p-[1%] pr-[5%]  rounded-md">
            <Image className='rounded-md object-cover' src={item.images || ""} alt="category" width={150} height={150} />
            <div className="flex flex-col gap-[2px]">
                <p className='text-[18px]'><span className='font-bold'>ru:</span> {item.titles.ru}</p>
                <p className='text-[18px]'><span className='font-bold'>en:</span> {item.titles.en}</p>
            </div>
            <div className="absolute top-[1%] right-[1%]">
                <DashboardProductModal type={"category"} id={item._id} Button={<button>•••</button>} />
            </div>
        </div>

        </>
    );
};

export default Category_Dashboard;
