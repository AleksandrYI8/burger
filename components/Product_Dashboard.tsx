import Image from "next/image";
import DashboardProductModal from "./Dashboard_product_modal";
import Modal from "./hoc/modal";

type Props = {
    item: any;
};

const Products_Dashboard: React.FC<Props> = ({ item }) => {

    return (

        <>
            <div
                key={item._id}
                className="p-[1%] flex gap-[2%]  rounded-[15px] bg-white mb-[2%] text-black"
            >
                <Image
                    className="w-[20%] h-[30vh] object-cover rounded-[10px] mb-[5px]"
                    src={item.images || ""}
                    alt="burger"
                    width={500}
                    height={500}
                />

                <div className="w-full flex justify-between">
                    <div className="w-[90%] flex flex-col">
                        <h2 className="text-[16px] border-b font-600"><span className="font-bold">Price:</span>{item.price}  ₽</h2>
                        <p className="text-[16px] border-b"><span className="font-bold">Title ru:</span>  {item.titles.ru}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Title en:</span> {item.titles.en}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Description ru:</span>  {item.description.ru}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Description en:</span> {item.description.en}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Composition ru:</span> {item.composition.ru}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Composition en:</span> {item.composition.en}</p>
                        <p className="text-[16px] border-b"><span className="font-bold">Category:</span> {item.category}</p>
                        <p className="text-[16px]"><span className="font-bold">Weight:</span> {item.weight}g</p>
                    </div>

                    <div className="flex-col justify-end relative">
                        <DashboardProductModal type={"menu"} id={item._id} Button={<button >•••</button>} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products_Dashboard;
