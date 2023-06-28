import { useRef } from "react"
import { toast } from 'react-toastify';

export const ListInputs = ({ listFields }: any) => {

    const findeType = (type:string)=>{
        if(type == ''){

        }
    }

    return (
        <div className="w-full flex flex-col mt-[50px]">
            <span className="text-gray-500 ">لیست فیلد های فرم</span>
            {listFields.length == 0 &&
                <div className=" w-full h-[70px] flex items-center justify-center text-gray-400 text-sm">
                    هنوز فیلدی اضافه نکرده اید
                </div>
            }
            {listFields.length > 0 && listFields.map((item: any, index: number) =>
                <div className=" w-full flex flex-col my-2 bg-gray-100 border rounded-md shadow">
                    <div className="w-full h-[40px] flex items-center justify-around px-2 text-sm">
                        <span>{item?.title} </span>
                        <span>فیلد از نوع {item?.type}</span>
                    </div>
                </div>
            )}
        </div>
    )
}